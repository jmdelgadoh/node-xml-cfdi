import { AttributesComprobanteConceptoCuentaPredialElement } from '../types';
import { XmlAttribute } from '../../annotations';

export class ComprobanteConceptoCuentaPredial {
    @XmlAttribute({required: true})
    public Numero: string;

    constructor(params: AttributesComprobanteConceptoCuentaPredialElement) {
        this.Attributes = params
    }

    set Attributes(params: AttributesComprobanteConceptoCuentaPredialElement) {
        this.Numero = params.Numero;
    }

    get Attributes(): AttributesComprobanteConceptoCuentaPredialElement {
        return {
            Numero: this.Numero,
        }
    }
}
