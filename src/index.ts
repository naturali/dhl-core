import axios from 'axios';
import { w3cwebsocket } from 'websocket';

import { dhlmixer, dhl } from './../static/js/dhl';
import { restfulAddr, websocketAddr } from './config';
import { fieldValidate } from './util';
import { UserInfo, UserType } from './user-info';
import { analyzeKerfuResponse } from './response-analyze';
import { MessageRequest, transferMessageRequest } from './message-request';
import { MessageResult } from './message-result';

export interface DHLAgentInfo {
  agentId: string;
  agentName?: string;
}

export interface DHLAppInfo {
  appId: string;
  appKey: string;
  appSecret: string;
}

export interface SendMessageParamsInfo {
  message: string;
  messageContentType: dhlmixer.MessageContentType;
  forceHandleManually: boolean;
}

export interface DHLConnectParams {
  userId: string;
  userName?: string;
}

export class DHL {
  private agent: UserInfo;
  private app: DHLAppInfo;
  private user: UserInfo;
  private token: string;
  private client: any;

  /**
   * Creates an instance of DHL.
   * @param {DHLAgentInfo} agent
   * @memberof DHL
   */
  constructor(agent: UserInfo) {
    fieldValidate(agent, ['agentId']);
    this.agent = { ...agent };
  }

  /**
   * Verify app and get auth token.
   *
   * @param {DHLAppInfo} app
   * @param {(token: string) => void} [callback]
   * @memberof DHL
   */
  async verify(app: DHLAppInfo, callback?: (token: string) => void) {
    fieldValidate(app, ['appId', 'appKey', 'appSecret']);

    const MessageType = dhlmixer.AuthenticationParams;
    const message = MessageType.create(app);
    const buffer = MessageType.encode(message).finish();

    this.app = { ...app };
    this.token = await axios
      .post(`${restfulAddr}/v1/access_token`, buffer, {
        headers: {
          accept: 'application/protobuf',
          'content-type': 'application/protobuf'
        },
        responseType: 'arraybuffer',
        transformRequest: (data: any, headers?: any) => data,
        transformResponse: (data: any) => data
      })
      .then((res: any) => {
        const responseBuffer = res.data;
        let responseData = '';

        if (res.status === 200 && responseBuffer) {
          const resData = new Buffer(responseBuffer);

          responseData = dhlmixer.AccessToken.decode(resData).accessToken || '';
        }

        return responseData;
      });
    if (callback) {
      callback(this.token);
    }
  }

  /**
   * Connect websocket and listen server messages.
   *
   * @param {DHLConnectParams} params
   * @param {(message: string, messageType: string, res: any) => void} onMessage
   * @param {() => void} [onOpen]
   * @param {() => void} [onClose]
   * @param {(error: any) => void} [onError]
   * @memberof DHL
   */
  connectWebsocket(params: DHLConnectParams, onMessage: (message: string, messageType: string, res: any) => void, onOpen?: () => void, onClose?: () => void, onError?: (error: any) => void) {
    fieldValidate(params, ['userId', 'isCustomerService']);

    const { userId, userName } = params;

    if (userId) {
      this.user = {
        userId,
        userName: userName || userId,
        type: UserType.USER
      };
    }

    if (!this.client) {
      this.client = new w3cwebsocket(
        `${websocketAddr}/v1/event_action?Authorization=${this.token}`,
        'event_action',
        undefined,
        undefined,
        undefined,
        {
          closeTimeout: 3600000
        }
      );
    }

    this.client.onerror = (error: any) => {
      if (onError) {
        onError(error);
      }
    };

    this.client.onopen = () => {
      const defaultSeq = 'server-client-seq';
      const message = dhlmixer.KerfuAction.create({
        seq: defaultSeq,
        action: dhlmixer.Action.Authentication,
        authenticationData: dhlmixer.KerfuAuthenticationData.create({
          userId,
          platformType: 'kerfu_web',
          appId: this.app.appId
        })
      });
      const buffer = dhlmixer.KerfuAction.encode(message).finish();

      this.client.send(buffer);
      if (onOpen) {
        onOpen();
      }
    };

    this.client.onclose = () => {
      if (onClose) {
        onClose();
      }
    };

    this.client.onmessage = (res: any) => {
      const resData = res.data;
      const fileReader = new FileReader();

      // Parse blob data
      fileReader.onload = (event: any) => {
        const bufferData = event.target.result;
        const response: any = dhlmixer.KerfuEvent.decode(
          new Buffer(bufferData)
        ).toJSON();

        if (response && response.event === 'MessagePosted') {
          const responseData = response.messagePostedData || {};
          const paramsData = {
            message_id: responseData.messageId,
            session_id: responseData.sessionId,
            message_type: responseData.messageType
          };

          this.getHistoryMessages(paramsData, onMessage);
        }
      };
      fileReader.readAsArrayBuffer(resData);
    };
  }

  /**
   * Get history messages
   *
   * @private
   * @param {*} params
   * @param {(message: string, messageType: string, res: any) => void} callback
   * @memberof DHL
   */
  private getHistoryMessages(params: any, callback: (message: string, messageType: string, res: any) => void) {
    axios.get(`${restfulAddr}/v1/message_history`, {
      params,
      headers: {
        Authorization: this.token
      },
      responseType: 'arraybuffer',
      transformResponse: resData => resData
    }).then((res: any) => {
      const resData = res.data;
      const buffer = new Buffer(resData);
      const response = dhlmixer.KerfuMessageList.decode(buffer).toJSON();
      const message = response && response.messages && response.messages[0];
      const responseMessages = (message &&
        message.response &&
        message.response.dhlScript &&
        message.response.dhlScript.chatResponse &&
        message.response.dhlScript.chatResponse.msgs) ||
        [];
      const responseMessage = responseMessages.map((item: any) => item && item.textMsg)[0] || '';
      const messageType = message && message.response && message.response.messageContentType || 'text';

      if (callback) {
        callback(responseMessage, messageType.toLowerCase(), message);
      }
    });
  }

  /**
   * send a message
   *
   * @param {MessageRequest} msgRequest
   * @param {(msgResult: MessageResult[]) => void} onSuccess
   * @param {(code: number, message: string) => void} onFailed
   * @memberof DHL
   */
  send(msgRequest: MessageRequest, onSuccess?: (msgResult: MessageResult[]) => void, onFailed?: (code: number, message: string) => void) {

    console.log("send : ", msgRequest);
    const buffer = transferMessageRequest(msgRequest);
    axios.post(`${restfulAddr}/v1/kerfu_messages`, buffer, {
      headers: {
        accept: 'application/protobuf',
        'content-type': 'application/protobuf',
        Authorization: this.token
      },
      responseType: 'arraybuffer',
      transformRequest: (reqData, headers) => reqData,
      transformResponse: resData => resData
    }).then((res: any) => {
      const responseBuffer = res.data;

      console.log("res 1: ", res);
      if (res.status === 200 && responseBuffer) {
        const resData = new Buffer(responseBuffer);
        const kerfuResponse = dhlmixer.KerfuResponse.decode(resData);
        console.log("res 2: ", kerfuResponse.toJSON);

        const msgResults = analyzeKerfuResponse(kerfuResponse);

        console.log('msgResult 3: ', msgResults);
        if (onSuccess) {
          onSuccess(msgResults);
        }
      } else {
        if (onFailed) {
          onFailed(res.status, 'error');
        }
      }
    });
  }

  /**
   * Upload an image and get the URI
   *
   * @static
   * @param {*} file
   * @param {(res: any) => void} callback
   * @memberof DHL
   */
  static uploadImage(file: any, callback: (res: any) => void) {
    if (file) {
      const formData = new FormData();

      formData.append('image', file);
      axios.post(`${restfulAddr}/v1/resources`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then((res: any) => {
        callback(res.data);
      });
    } else {
      throw Error(('File is missing.'));
    }
  }
}

export * from './../static/js/dhl';

if (window) {
  (window as any).DHL = DHL;
  (window as any).dhl = dhl;
  (window as any).dhlmixer = dhlmixer;
}
