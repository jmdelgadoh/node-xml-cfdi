"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConceptoImpuestosRetencion = void 0;
class ComprobanteConceptoImpuestosRetencion {
    _Base;
    _Impuesto;
    _TipoFactor;
    _TasaOCuota;
    _Importe;
    get Importe() {
        return this._Importe;
    }
    set Importe(value) {
        this._Importe = value;
    }
    get TasaOCuota() {
        return this._TasaOCuota;
    }
    set TasaOCuota(value) {
        this._TasaOCuota = value;
    }
    get TipoFactor() {
        return this._TipoFactor;
    }
    set TipoFactor(value) {
        this._TipoFactor = value;
    }
    get Impuesto() {
        return this._Impuesto;
    }
    set Impuesto(value) {
        this._Impuesto = value;
    }
    get Base() {
        return this._Base;
    }
    set Base(value) {
        this._Base = value;
    }
}
exports.ComprobanteConceptoImpuestosRetencion = ComprobanteConceptoImpuestosRetencion;
