import {AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement} from '../types';
import {XmlAttribute, XmlElement} from '../../annotations';
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'CfdiRelacionado'
})
export class ComprobanteCfdiRelacionadosCfdiRelacionado {
    @XmlAttribute()
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
