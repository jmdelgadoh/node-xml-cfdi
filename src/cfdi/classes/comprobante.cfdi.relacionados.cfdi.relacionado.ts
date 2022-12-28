import { AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement } from '../types';
import { XMLAttribute, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from '../index';

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
