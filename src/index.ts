import axios from 'axios';
import { w3cwebsocket } from 'websocket';

import { dhlmixer, dhl } from './../static/js/dhl';
import { restfulAddr, websocketAddr } from './config';
import { fieldValidate } from './util';
import { UserInfo, AppInfo } from './user-info';
import { analyzeKerfuResponse, analyzeKerfuMessageList } from './response-analyze';
import { MessageRequest, transferMessageRequest } from './message-request';
import { MessageResult } from './message-result';

export class DHL {
  private app: AppInfo;
  private token: string;
  private clients: Map<string, any> = new Map<string, any>();

  /**
   *
   * @param app
   * @param onCompleted
   */
  constructor(app: AppInfo, onCompleted?: () => void) {
    this.verify(app, onCompleted);
  }

  /**
   * Verify app and get auth token.
   *
   * @param {AppInfo} app
   * @param {() => void} [callback]
   * @memberof DHL
   */
  private async verify(app: AppInfo, callback?: () => void) {
    fieldValidate(app, ['appId', 'appKey', 'appSecret']);

    const AuthenticationParams = dhlmixer.AuthenticationParams;
    const message = AuthenticationParams.create(app);
    const buffer = AuthenticationParams.encode(message).finish();

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
      callback();
    }
  }

  /**
   * Connect websocket and listen server messages.
   * @param user 用户信息
   * @param onMessage 接收消息回调
   * @param onOpen 建立连接回调
   * @param onClose 关闭连接回调
   * @param onError 连接失败回调
   */
  connectWebsocket(user: UserInfo, onMessage: (msgResults: MessageResult[]) => void, onOpen?: () => void, onClose?: () => void, onError?: (error: any) => void) {

    const { userId } = user;

    if (!this.clients.get(userId)) {
      const client = new w3cwebsocket(
        `${websocketAddr}/v1/event_action?Authorization=${this.token}`,
        'event_action',
        undefined,
        undefined,
        undefined,
        {
          closeTimeout: 3600000
        }
      );

      client.onerror = (error: any) => {

        if (onError) {
          onError(error);
        }
      };

      client.onopen = () => {
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

        client.send(buffer);
        this.clients.set(userId, client);
        if (onOpen) {
          onOpen();
        }
      };

      client.onclose = () => {
        if (onClose) {
          onClose();
        }
        this.clients.delete(userId);
      };

      client.onmessage = (res: any) => {
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
  }

  /**
   * Get history messages
   * @param params 发送请求参数
   * @param onSuccess 接收消息回调
   */
  private getHistoryMessages(params: any, onSuccess: (msgResults: MessageResult[]) => void) {
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
      const msgResults = analyzeKerfuMessageList(dhlmixer.KerfuMessageList.decode(buffer).messages);

      if (onSuccess) {
        onSuccess(msgResults);
      }
    });
  }

  /**
   * Send a message
   *
   * @param {MessageRequest} msgRequest
   * @param {(msgResult: MessageResult[]) => void} onSuccess
   * @param {(code: number, message: string) => void} onFailed
   * @memberof DHL
   */
  send(msgRequest: MessageRequest, onSuccess?: (msgResult: MessageResult[]) => void, onFailed?: (code: number, message: string) => void) {

    console.log('Send  Message: ', msgRequest);
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

      if (res.status === 200 && responseBuffer) {
        const resData = new Buffer(responseBuffer);
        const kerfuResponse = dhlmixer.KerfuResponse.decode(resData);
        const msgResults = analyzeKerfuResponse(kerfuResponse);

        console.log('Receive Message: ', msgResults);
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
