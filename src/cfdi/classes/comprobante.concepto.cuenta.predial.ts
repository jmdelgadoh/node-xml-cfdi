import { AttributesComprobanteConceptoCuentaPredialElement } from '../types';
import { XMLAttribute } from "../../xml-decorator";

export class ComprobanteConceptoCuentaPredial {
    @XMLAttribute({name: 'Numero'})
    public Numero: string;

    constructor(params: AttributesComprobanteConceptoCuentaPredialElement) {
        this.Numero = params.Numero;
    }
}
