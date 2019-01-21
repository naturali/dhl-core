"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dhl_1 = require("./../static/js/dhl");
const defaultAgentName = 'DHL-agent';
class DHL {
    constructor(agent) {
        this.agent = Object.assign({}, agent);
    }
    verify(app) {
        console.log('get verify app: ', app);
        const MessageType = dhl_1.dhlmixer.AuthenticationParams;
        const message = MessageType.create(app);
        const buffer = MessageType.encode(message).finish();
    }
}
exports.DHL = DHL;
//# sourceMappingURL=index.js.map