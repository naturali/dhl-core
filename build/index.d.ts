import { dhlmixer } from './../static/js/dhl';
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
    userName?: string;
}
export declare class DHL {
    private agent;
    private app;
    private user;
    private token;
    private client;
    constructor(agent: DHLAgentInfo);
    verify(app: DHLAppInfo, callback?: (token: string) => void): Promise<void>;
    connectWebsocket(params: DHLConnectParams, onMessage: (message: string, messageType: string, res: any) => void, onOpen?: () => void, onClose?: () => void, onError?: (error: any) => void): void;
    private getHistoryMessages;
    send(params: SendMessageParamsInfo, callback: (message: string, messageType: string, res: any) => void): void;
    static uploadImage(file: any, callback: (res: any) => void): void;
}
export * from './../static/js/dhl';
