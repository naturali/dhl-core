interface DHLAgentInfo {
    agentId: string;
    agentName?: string;
}
interface DHLAppInfo {
    appId: string;
    appKey: string;
    appSecret: string;
}
export declare class DHL {
    private agent;
    constructor(agent: DHLAgentInfo);
    verify(app: DHLAppInfo): void;
}
export {};
