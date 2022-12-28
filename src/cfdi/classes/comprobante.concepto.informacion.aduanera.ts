import { AttributesComprobanteConceptoInformacionAduaneraElement } from '../types';
import { XMLAttribute, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from '../index';

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'InformacionAduanera',
})
export class ComprobanteConceptoInformacionAduanera {
    @XMLAttribute({name: 'NumeroPedimento'})
    public NumeroPedimento: string;

    constructor(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.NumeroPedimento = params.NumeroPedimento;
    }
}
