import { AttributesComprobanteConceptoInformacionAduaneraElement } from '../types';
import { XMLAttribute } from "../../xml-decorator/annotations/XMLAttribute";

export class ComprobanteConceptoInformacionAduanera {
    @XMLAttribute({name: 'NumeroPedimento'})
    public NumeroPedimento: string;

    constructor(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.NumeroPedimento = params.NumeroPedimento;
    }
}
