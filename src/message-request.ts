import { dhlmixer, dhl } from '../static/js/dhl';

export const RequestType = {
  NORMAL: dhl.DHLRequestType.Normal,
  AGENT_LIST: dhl.DHLRequestType.AgentList,
  WELCOME_MESSAGE: dhl.DHLRequestType.WelcomeMessage
};

export interface MessageRequest {
  reqId: string;
  appId?: string;
  platformType?: string;
  type: number;
  message?: string;
  audioUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  userId?: string;
  agentId?: string;
  agentName?: string;
  forceHandleManually?: boolean;
}

export const transferMessageRequest = (msgRequest: MessageRequest): Uint8Array => {
  console.log('transferMessageRequest', msgRequest);
  let msgContentType: dhlmixer.MessageContentType;
  if (msgRequest.videoUrl) {
    msgContentType = dhlmixer.MessageContentType.Video;
  } else if (msgRequest.audioUrl) {
    msgContentType = dhlmixer.MessageContentType.Voice;
  } else if (msgRequest.imageUrl) {
    msgContentType = dhlmixer.MessageContentType.Image;
  } else {
    msgContentType = dhlmixer.MessageContentType.Text;
  }

  const mixerRequestData = dhlmixer.DHLMixerRequestData
    .create({
      reqId: msgRequest.reqId,
      message: msgRequest.message,
      voiceUrl: msgRequest.videoUrl,
      resourceUrl: msgRequest.imageUrl,
      messageContentType: msgContentType,
      forceHandleManually: msgRequest.forceHandleManually,
      dhlRequestType: msgRequest.type
    });

  const kerfuRequest = dhlmixer.KerfuMessage.create({
    appId: msgRequest.appId || '',
    platformType: msgRequest.platformType || 'kerfu_web',
    agentId: msgRequest.agentId || '',
    agentName: msgRequest.agentName || '',
    userId: msgRequest.userId || '',
    userName: msgRequest.userId || '',
    request: mixerRequestData,
    messageType: dhlmixer.KerfuMessageType.Request
  });
  console.log('kerfuRequest', kerfuRequest);

  return dhlmixer.KerfuMessage.encode(kerfuRequest).finish();
};
