import {AttributesComprobanteConceptoInformacionAduaneraElement} from '../types';
import {XmlAttribute, XmlElement} from '../../annotations';
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'InformacionAduanera'
})
export class ComprobanteConceptoInformacionAduanera {
    @XmlAttribute()
    public NumeroPedimento: string;

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
}
