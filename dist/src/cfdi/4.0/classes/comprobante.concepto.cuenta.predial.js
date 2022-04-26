"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConceptoCuentaPredial = void 0;
class ComprobanteConceptoCuentaPredial {
    _Numero;
    constructor(params) {
        this.AttributesCuentaPredial = params;
    }
    set AttributesCuentaPredial(params) {
        this.Numero = params.Numero;
    }
    get AttributesCuentaPredial() {
        return {
            Numero: this.Numero,
        };
    }
    get Numero() {
        return this._Numero;
    }
    set Numero(value) {
        this._Numero = value;
    }
}
exports.ComprobanteConceptoCuentaPredial = ComprobanteConceptoCuentaPredial;
