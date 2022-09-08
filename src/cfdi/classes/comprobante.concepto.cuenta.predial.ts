import {AttributesComprobanteConceptoCuentaPredialElement} from '../types';
import {XmlAttribute, XmlElement} from '../../annotations';
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'CuentaPredial'
})
export class ComprobanteConceptoCuentaPredial {
    @XmlAttribute()
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
