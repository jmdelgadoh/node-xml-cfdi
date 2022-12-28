import { AttributesComprobanteConceptoCuentaPredialElement } from '../types';
import { XMLAttribute, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from '../index';

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
