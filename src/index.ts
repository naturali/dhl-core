import axios from 'axios';
import { w3cwebsocket } from 'websocket';

import { dhlmixer, dhl } from './../static/js/dhl';
import { restfulAddr, websocketAddr } from './config';

export interface DHLAgentInfo {
  agentId: string;
  agentName?: string;
}

export interface DHLAppInfo {
  appId: string;
  appKey: string;
  appSecret: string;
}

export interface DHLUserInfo {
  userId: string;
  userName: string;
}

export interface SendMessageParamsInfo {
  message: string;
  messageContentType: dhlmixer.MessageContentType;
  forceHandleManually: boolean;
}

export interface DHLConnectParams {
  userId: string;
  isCustomerService: boolean;
  userName?: string;
}

const defaultAgentName = 'DHL-agent';
export class DHL {
  private agent: DHLAgentInfo;
  private app: DHLAppInfo;
  private user: DHLUserInfo;
  private token: string;
  private client: any;

  constructor(agent: DHLAgentInfo) {
    this.agent = { ...agent };
  }

  async verify(app: DHLAppInfo, callback?: (token: string) => void) {
    console.log('get verify app: ', app);

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

        console.log('get access token in getAccessToken: ', res, res.data);
        if (res.status === 200 && responseBuffer) {
          const resData = new Buffer(responseBuffer);

          console.log('get response buffer: ', resData);
          responseData = dhlmixer.AccessToken.decode(resData).accessToken || '';
        }

        return responseData;
      });
    if (callback) {
      callback(this.token);
    }
  }

  connectWebsocket(params: DHLConnectParams, onMessage: (message: string, messageType: string, res: any) => void, onOpen?: () => void, onClose?: () => void, onError?: (error: any) => void) {
    const { userId, userName, isCustomerService } = params;

    if (userId) {
      this.user = {
        userId,
        userName: userName || userId
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

    // console.log('user in componentDidMount: ', user, client);
    this.client.onerror = (err: any) => {
      console.log('Connection Error: ', err);
    };

    this.client.onopen = () => {
      console.log('in onopen: WebSocket Client Connected pollForKefuResponse.');
      const defaultSeq = 'server-client-seq';
      const message = dhlmixer.KerfuAction.create({
        seq: defaultSeq,
        action: dhlmixer.Action.Authentication,
        authenticationData: dhlmixer.KerfuAuthenticationData.create({
          userId,
          isCustomerService,
          platformType: 'Web',
          appId: this.app.appId
        })
      });
      const buffer = dhlmixer.KerfuAction.encode(message).finish();

      this.client.send(buffer);
    };

    this.client.onclose = () => {
      console.log('server_protocol Client Closed');
    };

    this.client.onmessage = (res: any) => {
      console.log('get res in client.onmessage: ', res);
      const resData = res.data;
      const fileReader = new FileReader();
      fileReader.onload = (event: any) => {
        const bufferData = event.target.result;
        console.log('get arrayBuffer: ', bufferData);

        // const bufferData = new Buffer(new ArrayBuffer(resData));
        const response: any = dhlmixer.KerfuEvent.decode(
          new Buffer(bufferData)
        ).toJSON();
        console.log('get response in client.onmessage: ', response);

        if (response && response.event === 'MessagePosted') {
          const responseData = response.messagePostedData || {};
          this.getHistoryMessages(responseData, onMessage);
        }
      };
      fileReader.readAsArrayBuffer(resData);
    };

    setTimeout(() => {
      const content = document.getElementById('conversation-content');

      if (content) {
        content.scrollTo(0, content.scrollHeight);
      }
    }, 100);
  }

  private getHistoryMessages(params: any, callback: (message: string, messageType: string, res: any) => void) {
    axios.get(`${ restfulAddr }/v1/message_history`, {
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
      const responseMessage = message && message.response && message.response.message || '';
      const messageType = message && message.response && message.response.messageContentType || 'text';

      if (callback) {
        callback(responseMessage, messageType.toLowerCase(), message);
      }
    });
  }

  send(params: SendMessageParamsInfo, callback: (message: string, messageType: string, res: any) => void) {
    const { message, messageContentType, forceHandleManually } = params;
    const dateTime = new Date().getTime();
    console.log('get message in send: ', params);

    if (message) {
      const MessageType = dhlmixer.KerfuMessage;
      const messageData = {
        appId: this.app.appId,
        userId: this.user.userId,
        agentId: this.agent.agentId,
        agentName: this.agent.agentName,
        messageId: 0,
        sessionId: 0,
        messageType: dhlmixer.KerfuMessageType.Request,
        platformType: 'kerfu_web',
        userName: this.user.userName || this.user.userId,
        timestamp: dateTime,
        request: dhlmixer.DHLMixerRequestData.create({
          message,
          messageContentType,
          forceHandleManually,
          dhlRequestType: dhl.DHLRequestType.Normal,
          reqId: `customer-request-${ dateTime }`
        })
      };
      console.log('get message before send: ', messageData);
      const paramsMessage = MessageType.create(messageData);
      // const verify = MessageType.verify(messageData);

      console.log('get message & verify here: ', message);
      const buffer = MessageType.encode(paramsMessage).finish();

      axios.post(`${ restfulAddr }/v1/kerfu_messages`, buffer, {
        headers: {
          accept: 'application/protobuf',
          'content-type': 'application/protobuf',
          Authorization: this.token
        },
        responseType: 'arraybuffer',
        transformRequest: (reqData, headers) => reqData,
        transformResponse: resData => resData
      }).then((res: any) => {
        console.log('get res after send: ', res);
        const responseBuffer = res.data;

        if (res.status === 200 && responseBuffer) {
          const resData = new Buffer(responseBuffer);
          const responseData = dhlmixer.KerfuResponse.decode(resData).toJSON();
          const messageType = responseData.message && responseData.message.response && responseData.message.response.messageContentType || 'text';
          const responseMessage = responseData.message && responseData.message.response && responseData.message.response.dhlScript && responseData.message.response.dhlScript.message || '';

          // console.log('get decode data after send: ', responseMessage, messageType, responseData);
          callback(responseMessage, messageType.toLowerCase(), res.data);
        }
      });
    }
  }

  static uploadImage(file: any, callback: (res: any) => void) {
    if (file) {
      const formData = new FormData();

      formData.append('image', file);
      axios.post(`${ restfulAddr }/v1/resources`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then((res: any) => {
        console.log('get res in uploadImage: ', res);
        callback(res.data);
      });
    }
  }
}

export * from './../static/js/dhl';

if (window) {
  (window as any).DHL = DHL;
  (window as any).dhl = dhl;
  (window as any).dhlmixer = dhlmixer;
}
