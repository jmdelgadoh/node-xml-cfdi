import {TipoRelacionEnum} from '../catalog/enums';
import {ComprobanteCfdiRelacionadosCfdiRelacionado} from './index';
import {
    AttributesComprobanteCfdiRelacionadosElement,
    ComprobanteCfdiRelacionadosCfdiRelacionadoElement
} from '../types';
import {Element} from 'xml-js';
import {XmlAttribute, XmlElement} from '../../annotations';
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'CfdiRelacionados'
})
export class ComprobanteCfdiRelacionados {
    @XmlAttribute()
    public TipoRelacion: TipoRelacionEnum;

    public CfdiRelacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[];


    constructor(params: AttributesComprobanteCfdiRelacionadosElement, relacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[] = []) {
        this.Attributes = params
        this.CfdiRelacionado = relacionado;
    }

    set Attributes(params: AttributesComprobanteCfdiRelacionadosElement) {
        this.TipoRelacion = params.TipoRelacion;
    }

    get Attributes(): AttributesComprobanteCfdiRelacionadosElement {
        return {
            TipoRelacion: this.TipoRelacion,
        }
    }

    get Elements(): Element[] {
        const elements: Element[] = []

        for (const cfdiRelacionadoValue of this.CfdiRelacionado) {
            elements.push({
                type: 'element',
                name: 'cfdi:CfdiRelacionado',
                attributes: cfdiRelacionadoValue.Attributes,
            } as ComprobanteCfdiRelacionadosCfdiRelacionadoElement);
        }

        return elements;
    }
}
