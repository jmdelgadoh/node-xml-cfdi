import { AttributesComprobanteConceptoCuentaPredialElement } from '../types';

export class ComprobanteConceptoCuentaPredial {
    private _Numero: string;

    constructor(params: AttributesComprobanteConceptoCuentaPredialElement) {
        this.AttributesCuentaPredial = params
    }

    set AttributesCuentaPredial(params: AttributesComprobanteConceptoCuentaPredialElement) {
        this.Numero = params.Numero;
    }

    get AttributesCuentaPredial(): AttributesComprobanteConceptoCuentaPredialElement {
        return {
            Numero: this.Numero,
        }
    }

    get Numero(): string {
        return this._Numero;
    }

    set Numero(value: string) {
        this._Numero = value;
    }
}
