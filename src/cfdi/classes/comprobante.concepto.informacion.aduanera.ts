import { AttributesComprobanteConceptoInformacionAduaneraElement, CFDI_NAME_SPACE } from '..';
import { XMLAttribute, XMLElement } from "../../xml-decorator";

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
