"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteCfdiRelacionados = void 0;
class ComprobanteCfdiRelacionados {
    _CfdiRelacionado;
    _TipoRelacion;
    set AttributesCfdiRelacionados(params) {
        this.TipoRelacion = params.TipoRelacion;
    }
    get AttributesCfdiRelacionados() {
        return {
            TipoRelacion: this.TipoRelacion,
        };
    }
    get TipoRelacion() {
        return this._TipoRelacion;
    }
    set TipoRelacion(value) {
        this._TipoRelacion = value;
    }
    get CfdiRelacionado() {
        return this._CfdiRelacionado;
    }
    set CfdiRelacionado(value) {
        this._CfdiRelacionado = value;
    }
}
exports.ComprobanteCfdiRelacionados = ComprobanteCfdiRelacionados;
