export const UserType = {
  USER: 1,
  AGENT: 2
};

export interface UserInfo {
  userId: string;
  userName?: string;
  avatar?: string;
}


export interface AgentInfo {
  agentId: string;
  agentName?: string;
  avatar?: string;
}

export interface AppInfo {
  appId: string;
  appKey: string;
  appSecret: string;
}
