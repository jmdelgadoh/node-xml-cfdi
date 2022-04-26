"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteReceptor = void 0;
class ComprobanteReceptor {
    _Rfc;
    _Nombre;
    _DomicilioFiscalReceptor;
    _ResidenciaFiscal;
    _NumRegIdTrib;
    _RegimenFiscalReceptor;
    _UsoCFDI;
    constructor(params) {
        this.AttributesReceptor = params;
    }
    set AttributesReceptor(params) {
        this.Rfc = params.Rfc;
        this.Nombre = params.Nombre;
        this.DomicilioFiscalReceptor = params.DomicilioFiscalReceptor;
        this.ResidenciaFiscal = params.ResidenciaFiscal;
        this.NumRegIdTrib = params.NumRegIdTrib;
        this.RegimenFiscalReceptor = params.RegimenFiscalReceptor;
        this.UsoCFDI = params.UsoCFDI;
    }
    get AttributesReceptor() {
        return {
            Rfc: this.Rfc,
            Nombre: this.Nombre,
            DomicilioFiscalReceptor: this.DomicilioFiscalReceptor,
            ResidenciaFiscal: this.ResidenciaFiscal,
            NumRegIdTrib: this.NumRegIdTrib,
            RegimenFiscalReceptor: this.RegimenFiscalReceptor,
            UsoCFDI: this.UsoCFDI,
        };
    }
    get UsoCFDI() {
        return this._UsoCFDI;
    }
    set UsoCFDI(value) {
        this._UsoCFDI = value;
    }
    get RegimenFiscalReceptor() {
        return this._RegimenFiscalReceptor;
    }
    set RegimenFiscalReceptor(value) {
        this._RegimenFiscalReceptor = value;
    }
    get NumRegIdTrib() {
        return this._NumRegIdTrib;
    }
    set NumRegIdTrib(value) {
        this._NumRegIdTrib = value;
    }
    get ResidenciaFiscal() {
        return this._ResidenciaFiscal;
    }
    set ResidenciaFiscal(value) {
        this._ResidenciaFiscal = value;
    }
    get DomicilioFiscalReceptor() {
        return this._DomicilioFiscalReceptor;
    }
    set DomicilioFiscalReceptor(value) {
        this._DomicilioFiscalReceptor = value;
    }
    get Nombre() {
        return this._Nombre;
    }
    set Nombre(value) {
        this._Nombre = value;
    }
    get Rfc() {
        return this._Rfc;
    }
    set Rfc(value) {
        this._Rfc = value;
    }
}
exports.ComprobanteReceptor = ComprobanteReceptor;
