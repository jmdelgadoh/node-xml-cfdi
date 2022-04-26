import { AttributesComprobanteConceptoInformacionAduaneraElement } from '../types';

export class ComprobanteConceptoInformacionAduanera {
    private _NumeroPedimento: string;

    constructor(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.AttributesInformacionAduanera = params
    }

    set AttributesInformacionAduanera(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.NumeroPedimento = params.NumeroPedimento;
    }

    get AttributesInformacionAduanera(): AttributesComprobanteConceptoInformacionAduaneraElement {
        return {
            NumeroPedimento: this.NumeroPedimento,
        }
    }

    get NumeroPedimento(): string {
        return this._NumeroPedimento;
    }

    set NumeroPedimento(value: string) {
        this._NumeroPedimento = value;
    }
}
