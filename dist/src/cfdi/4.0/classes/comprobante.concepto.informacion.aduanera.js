"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConceptoInformacionAduanera = void 0;
class ComprobanteConceptoInformacionAduanera {
    _NumeroPedimento;
    constructor(params) {
        this.AttributesInformacionAduanera = params;
    }
    set AttributesInformacionAduanera(params) {
        this.NumeroPedimento = params.NumeroPedimento;
    }
    get AttributesInformacionAduanera() {
        return {
            NumeroPedimento: this.NumeroPedimento,
        };
    }
    get NumeroPedimento() {
        return this._NumeroPedimento;
    }
    set NumeroPedimento(value) {
        this._NumeroPedimento = value;
    }
}
exports.ComprobanteConceptoInformacionAduanera = ComprobanteConceptoInformacionAduanera;
