import { AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement } from '../types';
import { XmlAttribute } from '../../annotations';

export class ComprobanteCfdiRelacionadosCfdiRelacionado {
    @XmlAttribute({required: true})
    public UUID: string;

    constructor(params: AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement) {
        this.Attributes = params;
    }

    set Attributes(params: AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement) {
        this.UUID = params.UUID;
    }

    get Attributes(): AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement {
        return {
            UUID: this.UUID,
        }
    }

}
