"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteImpuestos = void 0;
class ComprobanteImpuestos {
    _Retenciones;
    _Traslados;
    _TotalImpuestosRetenidos;
    _TotalImpuestosTrasladados;
    get TotalImpuestosTrasladados() {
        return this._TotalImpuestosTrasladados;
    }
    set TotalImpuestosTrasladados(value) {
        this._TotalImpuestosTrasladados = value;
    }
    get TotalImpuestosRetenidos() {
        return this._TotalImpuestosRetenidos;
    }
    set TotalImpuestosRetenidos(value) {
        this._TotalImpuestosRetenidos = value;
    }
    get Traslados() {
        return this._Traslados;
    }
    set Traslados(value) {
        this._Traslados = value;
    }
    get Retenciones() {
        return this._Retenciones;
    }
    set Retenciones(value) {
        this._Retenciones = value;
    }
}
exports.ComprobanteImpuestos = ComprobanteImpuestos;
