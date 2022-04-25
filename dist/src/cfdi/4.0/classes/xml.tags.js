"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlTags = void 0;
class XmlTags {
    attributes;
    constructor() {
        this.attributes = [];
    }
    getAttributes() {
        const attr = {};
        this.attributes.forEach(({ key, value }) => {
            attr[key] = value;
        });
        return attr;
    }
    addAttributes(key, value) {
        this.attributes.push({
            key, value
        });
    }
}
exports.XmlTags = XmlTags;
