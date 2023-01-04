import { AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement, CFDI_NAME_SPACE } from '..';
import { XMLAttribute, XMLElement } from "../../xml-decorator";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'CfdiRelacionado',
})
export class ComprobanteCfdiRelacionadosCfdiRelacionado {
    @XMLAttribute({name: 'UUID'})
    public UUID: string;

    constructor(params: AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement) {
        this.UUID = params.UUID;
    }
}
