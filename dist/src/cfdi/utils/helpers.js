"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeValues = void 0;
const sanitizeValues = (value) => {
    let text = value;
    text = text.split('&').join('&amp;');
    text = text.split('"').join('&quot;');
    text = text.split('<').join('&lt;');
    text = text.split('>').join('&gt;');
    text = text.split("'").join('&apos;');
    return text;
};
exports.sanitizeValues = sanitizeValues;
