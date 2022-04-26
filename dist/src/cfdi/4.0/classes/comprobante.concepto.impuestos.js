"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConceptoImpuestos = void 0;
const _1 = require(".");
class ComprobanteConceptoImpuestos {
    _Traslados;
    _Retenciones;
    constructor() {
        this.Retenciones = [];
        this.Traslados = [];
    }
    retencion(params) {
        this.Retenciones.push(new _1.ComprobanteConceptoImpuestosRetencion(params));
    }
    traslado(params) {
        this.Traslados.push(new _1.ComprobanteConceptoImpuestosTraslado(params));
    }
    get Retenciones() {
        return this._Retenciones;
    }
    set Retenciones(value) {
        this._Retenciones = value;
    }
    get Traslados() {
        return this._Traslados;
    }
    set Traslados(value) {
        this._Traslados = value;
    }
}
exports.ComprobanteConceptoImpuestos = ComprobanteConceptoImpuestos;
