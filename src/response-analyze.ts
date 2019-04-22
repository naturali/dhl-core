import { dhlmixer, dhl } from '../static/js/dhl';
import { MessageResult, MessageContent, MessageType, ListCard } from './message-result';
const nanoid = require('nanoid');

type IKerfuResponse = dhlmixer.IKerfuResponse;
type IKerfuMessage = dhlmixer.IKerfuMessage;
type IDHLMixerRequestData = dhlmixer.IDHLMixerRequestData;
type IDHLMixerResponseData = dhlmixer.IDHLMixerResponseData;
type IDHLScript = dhl.IDHLScript;
type IDHLChatResponse = dhl.IDHLChatResponse;
type ITextListItem = dhl.ITextListItem;
type IDHLCardResponse = dhl.IDHLCardResponse;

const KerfuMessageType = dhlmixer.KerfuMessageType;
const DHLRequestType = dhl.DHLRequestType;
const MessageContentType = dhlmixer.MessageContentType;

export const analyzeKerfuResponse = (response: IKerfuResponse): MessageResult[] => {

  if (response.messages) {
    return analyzeKerfuMessageList(response.messages);
  }

  return [];
};

const analyzeKerfuMessageList = (list: IKerfuMessage[]): MessageResult[] => {

  const msgs: MessageResult[] = [];
  list.forEach((it: IKerfuMessage) => {

    const msgResult = analyzeKerfuMessage(it);
    msgs.push(msgResult);
  });

  return msgs;
};

const analyzeKerfuMessage = (kerfuMessage: IKerfuMessage): MessageResult => {

  const msgResult: MessageResult = {
    id: nanoid(),
    serverMsgId: kerfuMessage.messageId || -1,
    userId: kerfuMessage.userId || '',
    agentId: kerfuMessage.agentId || '',
    creatTime: new Date(Number(kerfuMessage.timestamp))
  };

  switch (kerfuMessage.messageType) {
    case KerfuMessageType.Request: {
      msgResult.senderId = msgResult.userId;
      msgResult.receiverId = msgResult.agentId;
      if (kerfuMessage.request) {
        analyzeDHLMixerRequestData(msgResult, kerfuMessage.request);
      }
      break;
    }

    case KerfuMessageType.Response: {
      msgResult.senderId = msgResult.agentId;
      msgResult.receiverId = msgResult.userId;
      if (kerfuMessage.response) {
        analyzeDHLMixerResponseData(msgResult, kerfuMessage.response);
      }
      break;
    }

    default: { break; }
  }

  return msgResult;
};

/**
 * 解析Server端保存的发送的信息
 * @param msgResult 返回的结果
 * @param data 输入的数据
 */
const analyzeDHLMixerRequestData = (msgResult: MessageResult, data: IDHLMixerRequestData) => {

  if (!data) {
    return;
  }
  switch (data.dhlRequestType) {

    case DHLRequestType.Normal: {
      const content: MessageContent = msgResult.content || {};
      switch (data.messageContentType) {
        case MessageContentType.Text: {
          content.message = data.message || '';
          msgResult.messageType = MessageType.TEXT;
          break;
        }

        case MessageContentType.Image: {
          content.imgUrl = data.resourceUrl || '';
          msgResult.messageType = MessageType.IMAGE;
          break;
        }

        case MessageContentType.Voice: {
          content.audioUrl = data.resourceUrl || '';
          msgResult.messageType = MessageType.AUDIO;
          break;
        }

        case MessageContentType.Video: {
          content.videoUrl = data.resourceUrl || '';
          msgResult.messageType = MessageType.VIDEO;
          break;
        }
        default: { break; }
      }
      msgResult.content = content;
      break;
    }

    default: { break; }
  }
};

const analyzeDHLMixerResponseData = (msgResult: MessageResult, data: IDHLMixerResponseData) => {
  if (!data) {
    return;
  }
  const content: MessageContent = {};

  switch (data.messageContentType) {
    case MessageContentType.Text: {
      content.message = data.message || '';
      msgResult.content = content;
      msgResult.messageType = MessageType.TEXT;
      break;
    }
    case MessageContentType.Image: {
      content.imgUrl = data.resourceUrl || '';
      msgResult.content = content;
      msgResult.messageType = MessageType.IMAGE;
      break;
    }

    case MessageContentType.Voice: {
      content.audioUrl = data.resourceUrl || '';
      msgResult.content = content;
      msgResult.messageType = MessageType.AUDIO;
      break;
    }

    case MessageContentType.Video: {
      content.videoUrl = data.resourceUrl || '';
      msgResult.content = content;
      msgResult.messageType = MessageType.VIDEO;
      break;
    }

    case MessageContentType.Script: {
      if (data.dhlScript) {
        analyzeDHLScript(msgResult, data.dhlScript);
      }
      break;
    }
    default: { break; }
  }

  if (msgResult && msgResult.content) {
    msgResult.content.reqId = data.reqId || '';
  }
};

const analyzeDHLScript = (msgResult: MessageResult, dhlScript: IDHLScript) => {
  if (!dhlScript) {
    return;
  }

  if (dhlScript.agentResponse) {
    return;
  }

  if (dhlScript.chatResponse) {
    analyzeChatMessage(msgResult, dhlScript.chatResponse);
  }
};

const analyzeChatMessage = (msgResult: MessageResult, dhlChatResponse: IDHLChatResponse) => {

  const content: MessageContent = {};
  if (dhlChatResponse.msgs && dhlChatResponse.msgs.length) {
    const chatMessage = dhlChatResponse.msgs[0];
    if (chatMessage.textMsg) {
      content.message = chatMessage.textMsg;
      msgResult.messageType = MessageType.TEXT;
    } else if (chatMessage.textListMsg) {
      const cards: ListCard[] = [];
      const textResp = chatMessage.textListMsg;
      content.title = textResp.header || '';
      content.listCardType = MessageType.TEXT_LIST;
      if (textResp.textList) {
        textResp.textList.forEach((textItem: ITextListItem) => {
          const card: ListCard = {
            title: textItem.content1 || '',
            description: textItem.content2 || '',
            description2: textItem.content3 || '',
            coreference: textItem.coreference || '',
            useCoreference: textResp.useCoreference || false
          };
          cards.push(card);
        });

        content.listCard = cards;
        msgResult.messageType = MessageType.TEXT_LIST;
      }
    } else if (chatMessage.imageResponseUrl) {
      content.imgUrl = chatMessage.imageResponseUrl;
      msgResult.messageType = MessageType.IMAGE;
    } else if (chatMessage.cardMsg) {
      const cardMsg = chatMessage.cardMsg;
      const card: ListCard = {
        title: cardMsg.title || '',
        description: cardMsg.description || '',
        avatar: cardMsg.imageUrl || '',
        link: cardMsg.deepLink || '',
        script: cardMsg.script || '',
        coreference: cardMsg.coreference || ''
      };
      content.listCard = [card];
      content.listCardType = MessageType.SINGLE_CARD;
      msgResult.messageType = MessageType.SINGLE_CARD;
    } else if (chatMessage.cardListMsg) {
      const cardResp = chatMessage.cardListMsg;
      const cards: ListCard[] = [];
      msgResult.messageType = MessageType.MULTI_CARD;
      content.title = cardResp.header || '';
      if (cardResp.cardMsgs) {
        cardResp.cardMsgs.forEach((cardItem: IDHLCardResponse) => {
          const card: ListCard = {
            title: cardItem.title || '',
            description: cardItem.description || '',
            avatar: cardItem.imageUrl || '',
            link: cardItem.deepLink || '',
            script: cardItem.script || '',
            coreference: cardItem.coreference || '',
            useCoreference: cardResp.useCoreference || false
          };
          cards.push(card);
        });
      }
      content.listCard = cards;
    }
    content.candidates = dhlChatResponse.candidates;
  }
  msgResult.content = content;
};
