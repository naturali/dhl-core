# dhl-core
Create your DHL(Dui Hua Liu) services on Web.

## 📦 Install
```bash
npm install dhl-core --save
```

```
yarn add dhl-core
```

## 🔨 Usage
### from node_modules
```typescript
import { DHL } from 'dhl-core';

const client = new DHL({
  agentId: '<your agent id>',
  agentName: '<your agent name>'
});
```

## 🌈 Methods
- async verify(app: DHLAppInfo, callback?: (token: string) => void);
```text
  Get authentication token.
```
```typescript
interface DHLAppInfo {
  appId: string;
  appKey: string;
  appSecret: string;
}
```

- connectWebsocket(params: DHLConnectParams, onMessage: (message: string, messageType: string, res: any) => void, onOpen?: () => void, onClose?: () => void, onError?: (error: any) => void)
```text
  Connect Websocket and listen messages from server.
```
```typescript
interface DHLConnectParams {
  userId: string;
  isCustomerService: boolean;
  userName?: string;
}
```

- send(params: SendMessageParamsInfo, callback: (message: string, messageType: string, res: any) => void)
```text
  Send messages.
```
```typescript
interface SendMessageParamsInfo {
  message: string;
  messageContentType: dhlmixer.MessageContentType;
  forceHandleManually: boolean;
}
```

- uploadImage(file: any, callback: (res: any) => void)

  Upload an image and get the URI

## ✨ Features
- Written in TypeScript with complete define types

## License
MIT License.
