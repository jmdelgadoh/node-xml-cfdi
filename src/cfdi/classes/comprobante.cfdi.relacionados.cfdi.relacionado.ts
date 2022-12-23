import { AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement } from '../types';
import { XMLAttribute } from "../../xml-decorator/annotations/XMLAttribute";

export class ComprobanteCfdiRelacionadosCfdiRelacionado {
    @XMLAttribute({name: 'UUID'})
    public UUID: string;

    constructor(params: AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement) {
        this.UUID = params.UUID;
    }
}
