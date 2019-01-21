import axios from 'axios';
import { w3cwebsocket } from 'websocket';

import { dhlmixer, dhl } from './../static/js/dhl';
import { restfulAddr, websocketAddr } from './config';

interface DHLAgentInfo {
  agentId: string;
  agentName?: string;
}

interface DHLAppInfo {
  appId: string;
  appKey: string;
  appSecret: string;
}

const defaultAgentName = 'DHL-agent';
export class DHL {
  private agent: DHLAgentInfo;
  private token: string;
  private client: any;

  constructor(agent: DHLAgentInfo) {
    this.agent = { ...agent };
  }

  async verify(app: DHLAppInfo) {
    console.log('get verify app: ', app);

    const MessageType = dhlmixer.AuthenticationParams;
    const message = MessageType.create(app);
    const buffer = MessageType.encode(message).finish();

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
  }

  connectWebsocket(appId: string, userId: string, isCustomerService: boolean, seq?: string) {
    if (!this.client) {
      this.client = new w3cwebsocket(
        `${websocketAddr}/v1/event_action?Authorization=${token}`,
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
        seq: seq || defaultSeq,
        action: dhlmixer.Action.Authentication,
        authenticationData: dhlmixer.KerfuAuthenticationData.create({
          appId,
          userId,
          isCustomerService,
          platformType: 'Web'
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
          const responseData = response.message_posted_data || {};
          // this.getHistoryMessages(token, responseData);
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

  getHistoryMessages(params: any, callback: Function) {
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
      const messageType = message && message.response && message.response.message_content_type || 'text';

      if (callback) {
        callback(responseMessage, message, messageType.toLowerCase());
      }
    });
  }

  send(message: string) {
    //
  }
}
