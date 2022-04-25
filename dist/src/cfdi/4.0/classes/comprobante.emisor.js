"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteEmisor = void 0;
class ComprobanteEmisor {
    _Rfc;
    _Nombre;
    _RegimenFiscal;
    _FacAtrAdquirente;
    get FacAtrAdquirente() {
        return this._FacAtrAdquirente;
    }
    set FacAtrAdquirente(value) {
        this._FacAtrAdquirente = value;
    }
    get RegimenFiscal() {
        return this._RegimenFiscal;
    }
    set RegimenFiscal(value) {
        this._RegimenFiscal = value;
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
exports.ComprobanteEmisor = ComprobanteEmisor;
