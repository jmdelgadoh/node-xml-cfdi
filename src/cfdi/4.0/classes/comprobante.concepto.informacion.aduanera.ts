import { AttributesComprobanteConceptoInformacionAduaneraElement } from '../types';

export class ComprobanteConceptoInformacionAduanera {
    private _NumeroPedimento: string;

    constructor(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.Attributes = params
    }

    set Attributes(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.NumeroPedimento = params.NumeroPedimento;
    }

    get Attributes(): AttributesComprobanteConceptoInformacionAduaneraElement {
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
