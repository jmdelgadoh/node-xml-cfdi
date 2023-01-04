import { AttributesComprobanteConceptoCuentaPredialElement, CFDI_NAME_SPACE } from '..';
import { XMLAttribute, XMLElement } from "../../xml-decorator";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'CuentaPredial',
})
export class ComprobanteConceptoCuentaPredial {
    @XMLAttribute({name: 'Numero'})
    public Numero: string;

    constructor(params: AttributesComprobanteConceptoCuentaPredialElement) {
        this.Numero = params.Numero;
    }
}
