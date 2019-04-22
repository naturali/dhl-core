export const MessageType = {
  TEXT: 1,
  IMAGE: 2,
  AUDIO: 3,
  VIDEO: 4,
  SINGLE_CARD: 5,
  MULTI_CARD: 6,
  TEXT_LIST: 7,
  OTHERS: 8
};

export interface MessageResult {
  id: string;
  serverMsgId: number | Long;
  creatTime: Date;
  receiverId?: string;
  senderId?: string;
  userId?: string;
  agentId?: string;
  messageType?: number;
  content?: MessageContent;
}

export interface MessageContent {
  reqId?: string;
  message?: string;
  audioUrl?: string;
  videoUrl?: string;
  url?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
  script?: string;
  candidates?: (string[] | null);
  listCard?: ListCard[];
  listCardType?: number;
}

export interface ListCard {
  title?: string;
  avatar?: string;
  description?: string;
  description2?: string;
  link?: string;
  script?: string;
  coreference?: string;
  useCoreference?: boolean;
}
