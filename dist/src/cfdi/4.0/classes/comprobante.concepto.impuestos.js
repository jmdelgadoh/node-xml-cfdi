"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConceptoImpuestos = void 0;
class ComprobanteConceptoImpuestos {
    _Traslados;
    _Retenciones;
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
