"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteCfdiRelacionadosCfdiRelacionado = void 0;
class ComprobanteCfdiRelacionadosCfdiRelacionado {
    _UUID;
    constructor(params) {
        this.AttributesCfdiRelacionadosCfdiRelacionado = params;
    }
    set AttributesCfdiRelacionadosCfdiRelacionado(params) {
        this.UUID = params.UUID;
    }
    get AttributesCfdiRelacionadosCfdiRelacionado() {
        return {
            UUID: this.UUID,
        };
    }
    get UUID() {
        return this._UUID;
    }
    set UUID(value) {
        this._UUID = value;
    }
}
exports.ComprobanteCfdiRelacionadosCfdiRelacionado = ComprobanteCfdiRelacionadosCfdiRelacionado;
