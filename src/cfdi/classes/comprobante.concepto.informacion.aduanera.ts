import { AttributesComprobanteConceptoInformacionAduaneraElement } from '../types';
import { XMLAttribute } from "../../xml-decorator";

export class ComprobanteConceptoInformacionAduanera {
    @XMLAttribute({name: 'NumeroPedimento'})
    public NumeroPedimento: string;

    constructor(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.NumeroPedimento = params.NumeroPedimento;
    }
}
