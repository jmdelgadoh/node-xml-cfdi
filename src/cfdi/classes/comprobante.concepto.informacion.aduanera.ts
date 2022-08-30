import { AttributesComprobanteConceptoInformacionAduaneraElement } from '../types';
import { XmlAttribute } from '../../annotations';

export class ComprobanteConceptoInformacionAduanera {
    @XmlAttribute({required: true})
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
