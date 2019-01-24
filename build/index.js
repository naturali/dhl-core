"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const websocket_1 = require("websocket");
const dhl_1 = require("./../static/js/dhl");
const config_1 = require("./config");
const util_1 = require("./util");
class DHL {
    constructor(agent) {
        util_1.fieldValidate(agent, ['agentId']);
        this.agent = Object.assign({}, agent);
    }
    verify(app, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            util_1.fieldValidate(app, ['appId', 'appKey', 'appSecret']);
            const MessageType = dhl_1.dhlmixer.AuthenticationParams;
            const message = MessageType.create(app);
            const buffer = MessageType.encode(message).finish();
            this.app = Object.assign({}, app);
            this.token = yield axios_1.default
                .post(`${config_1.restfulAddr}/v1/access_token`, buffer, {
                headers: {
                    accept: 'application/protobuf',
                    'content-type': 'application/protobuf'
                },
                responseType: 'arraybuffer',
                transformRequest: (data, headers) => data,
                transformResponse: (data) => data
            })
                .then((res) => {
                const responseBuffer = res.data;
                let responseData = '';
                if (res.status === 200 && responseBuffer) {
                    const resData = new Buffer(responseBuffer);
                    responseData = dhl_1.dhlmixer.AccessToken.decode(resData).accessToken || '';
                }
                return responseData;
            });
            if (callback) {
                callback(this.token);
            }
        });
    }
    connectWebsocket(params, onMessage, onOpen, onClose, onError) {
        util_1.fieldValidate(params, ['userId', 'isCustomerService']);
        const { userId, userName, isCustomerService } = params;
        if (userId) {
            this.user = {
                userId,
                userName: userName || userId
            };
        }
        if (!this.client) {
            this.client = new websocket_1.w3cwebsocket(`${config_1.websocketAddr}/v1/event_action?Authorization=${this.token}`, 'event_action', undefined, undefined, undefined, {
                closeTimeout: 3600000
            });
        }
        this.client.onerror = (error) => {
            if (onError) {
                onError(error);
            }
        };
        this.client.onopen = () => {
            const defaultSeq = 'server-client-seq';
            const message = dhl_1.dhlmixer.KerfuAction.create({
                seq: defaultSeq,
                action: dhl_1.dhlmixer.Action.Authentication,
                authenticationData: dhl_1.dhlmixer.KerfuAuthenticationData.create({
                    userId,
                    isCustomerService,
                    platformType: 'Web',
                    appId: this.app.appId
                })
            });
            const buffer = dhl_1.dhlmixer.KerfuAction.encode(message).finish();
            this.client.send(buffer);
            if (onOpen) {
                onOpen();
            }
        };
        this.client.onclose = () => {
            if (onClose) {
                onClose();
            }
        };
        this.client.onmessage = (res) => {
            const resData = res.data;
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const bufferData = event.target.result;
                const response = dhl_1.dhlmixer.KerfuEvent.decode(new Buffer(bufferData)).toJSON();
                console.log('get response in fileReader: ', response);
                if (response && response.event === 'MessagePosted') {
                    const responseData = response.messagePostedData || {};
                    this.getHistoryMessages(responseData, onMessage);
                }
            };
            fileReader.readAsArrayBuffer(resData);
        };
    }
    getHistoryMessages(params, callback) {
        axios_1.default.get(`${config_1.restfulAddr}/v1/message_history`, {
            params,
            headers: {
                Authorization: this.token
            },
            responseType: 'arraybuffer',
            transformResponse: resData => resData
        }).then((res) => {
            const resData = res.data;
            const buffer = new Buffer(resData);
            const response = dhl_1.dhlmixer.KerfuMessageList.decode(buffer).toJSON();
            const message = response && response.messages && response.messages[0];
            const responseMessage = message && message.response && message.response.message || '';
            const messageType = message && message.response && message.response.messageContentType || 'text';
            console.log('get res in getHistoryMessages: ', response);
            if (callback) {
                callback(responseMessage, messageType.toLowerCase(), message);
            }
        });
    }
    send(params, callback) {
        util_1.fieldValidate(params, ['message', 'messageContentType', 'forceHandleManually']);
        const { message, messageContentType, forceHandleManually } = params;
        const dateTime = new Date().getTime();
        if (message) {
            const MessageType = dhl_1.dhlmixer.KerfuMessage;
            const messageData = {
                appId: this.app.appId,
                userId: this.user.userId,
                agentId: this.agent.agentId,
                agentName: this.agent.agentName,
                messageId: 0,
                sessionId: 0,
                messageType: dhl_1.dhlmixer.KerfuMessageType.Request,
                platformType: 'kerfu_web',
                userName: this.user.userName || this.user.userId,
                timestamp: dateTime,
                request: dhl_1.dhlmixer.DHLMixerRequestData.create({
                    message,
                    messageContentType,
                    forceHandleManually,
                    dhlRequestType: dhl_1.dhl.DHLRequestType.Normal,
                    reqId: `customer-request-${dateTime}`
                })
            };
            const paramsMessage = MessageType.create(messageData);
            const buffer = MessageType.encode(paramsMessage).finish();
            axios_1.default.post(`${config_1.restfulAddr}/v1/kerfu_messages`, buffer, {
                headers: {
                    accept: 'application/protobuf',
                    'content-type': 'application/protobuf',
                    Authorization: this.token
                },
                responseType: 'arraybuffer',
                transformRequest: (reqData, headers) => reqData,
                transformResponse: resData => resData
            }).then((res) => {
                const responseBuffer = res.data;
                if (res.status === 200 && responseBuffer) {
                    const resData = new Buffer(responseBuffer);
                    const responseData = dhl_1.dhlmixer.KerfuResponse.decode(resData).toJSON();
                    const messageType = responseData.message && responseData.message.response && responseData.message.response.messageContentType || 'text';
                    const responseMessage = responseData.message && responseData.message.response && responseData.message.response.dhlScript && responseData.message.response.dhlScript.message || '';
                    console.log('get responseData after send: ', responseData);
                    callback(responseMessage, messageType.toLowerCase(), res.data);
                }
            });
        }
    }
    static uploadImage(file, callback) {
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            axios_1.default.post(`${config_1.restfulAddr}/v1/resources`, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((res) => {
                callback(res.data);
            });
        }
        else {
            throw Error(('File is missing.'));
        }
    }
}
exports.DHL = DHL;
__export(require("./../static/js/dhl"));
if (window) {
    window.DHL = DHL;
    window.dhl = dhl_1.dhl;
    window.dhlmixer = dhl_1.dhlmixer;
}
//# sourceMappingURL=index.js.map