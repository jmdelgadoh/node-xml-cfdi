"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConceptoImpuestosTraslado = void 0;
class ComprobanteConceptoImpuestosTraslado {
    _Base;
    _Impuesto;
    _TipoFactor;
    _TasaOCuota;
    _Importe;
    constructor(params) {
        this.AttributesConceptoImpuestosTraslado = params;
    }
    set AttributesConceptoImpuestosTraslado(params) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }
    get AttributesConceptoImpuestosTraslado() {
        return {
            Base: this.Base,
            Impuesto: this.Impuesto,
            TipoFactor: this.TipoFactor,
            TasaOCuota: this.TasaOCuota,
            Importe: this.Importe
        };
    }
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
    get Impuesto() {
        return this._Impuesto;
    }
    set Impuesto(value) {
        this._Impuesto = value;
    }
    get TipoFactor() {
        return this._TipoFactor;
    }
    set TipoFactor(value) {
        this._TipoFactor = value;
    }
    get Base() {
        return this._Base;
    }
    set Base(value) {
        this._Base = value;
    }
}
exports.ComprobanteConceptoImpuestosTraslado = ComprobanteConceptoImpuestosTraslado;