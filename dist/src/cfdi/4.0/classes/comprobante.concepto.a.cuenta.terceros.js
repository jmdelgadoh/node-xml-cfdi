"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConceptoACuentaTerceros = void 0;
class ComprobanteConceptoACuentaTerceros {
    _RfcACuentaTerceros;
    _NombreACuentaTerceros;
    _RegimenFiscalACuentaTerceros;
    _DomicilioFiscalACuentaTerceros;
    constructor(params) {
        this.AttributesACuentaTerceros = params;
    }
    set AttributesACuentaTerceros(params) {
        this.RfcACuentaTerceros = params.RfcACuentaTerceros;
        this.NombreACuentaTerceros = params.NombreACuentaTerceros;
        this.RegimenFiscalACuentaTerceros = params.RegimenFiscalACuentaTerceros;
        this.DomicilioFiscalACuentaTerceros = params.DomicilioFiscalACuentaTerceros;
    }
    get AttributesACuentaTerceros() {
        return {
            RfcACuentaTerceros: this.RfcACuentaTerceros,
            NombreACuentaTerceros: this.NombreACuentaTerceros,
            RegimenFiscalACuentaTerceros: this.RegimenFiscalACuentaTerceros,
            DomicilioFiscalACuentaTerceros: this.DomicilioFiscalACuentaTerceros,
        };
    }
    get DomicilioFiscalACuentaTerceros() {
        return this._DomicilioFiscalACuentaTerceros;
    }
    set DomicilioFiscalACuentaTerceros(value) {
        this._DomicilioFiscalACuentaTerceros = value;
    }
    get RegimenFiscalACuentaTerceros() {
        return this._RegimenFiscalACuentaTerceros;
    }
    set RegimenFiscalACuentaTerceros(value) {
        this._RegimenFiscalACuentaTerceros = value;
    }
    get NombreACuentaTerceros() {
        return this._NombreACuentaTerceros;
    }
    set NombreACuentaTerceros(value) {
        this._NombreACuentaTerceros = value;
    }
    get RfcACuentaTerceros() {
        return this._RfcACuentaTerceros;
    }
    set RfcACuentaTerceros(value) {
        this._RfcACuentaTerceros = value;
    }
}
exports.ComprobanteConceptoACuentaTerceros = ComprobanteConceptoACuentaTerceros;
