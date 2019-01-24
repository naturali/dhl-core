"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fieldValidate(target, fields) {
    fields.map((field) => {
        if (field && target[field] === undefined) {
            throw Error(`Field ${field} is missing.`);
        }
    });
}
exports.fieldValidate = fieldValidate;
//# sourceMappingURL=util.js.map