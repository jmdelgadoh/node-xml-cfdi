import { TipoRelacionEnum } from '../catalog/enums';
import { ComprobanteCfdiRelacionadosCfdiRelacionado } from './index';
import {
    AttributesComprobanteCfdiRelacionadosElement,
    ComprobanteCfdiRelacionadosCfdiRelacionadoElement
} from '../types';
import { Element } from 'xml-js';


export class ComprobanteCfdiRelacionados {
    private _CfdiRelacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[]
    private _TipoRelacion: TipoRelacionEnum;

    constructor(params: AttributesComprobanteCfdiRelacionadosElement) {
        this.Attributes = params
        this.CfdiRelacionado = [];
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

    get TipoRelacion(): TipoRelacionEnum {
        return this._TipoRelacion;
    }

    set TipoRelacion(value: TipoRelacionEnum) {
        this._TipoRelacion = value;
    }

    get CfdiRelacionado(): ComprobanteCfdiRelacionadosCfdiRelacionado[] {
        return this._CfdiRelacionado;
    }

    set CfdiRelacionado(value: ComprobanteCfdiRelacionadosCfdiRelacionado[]) {
        this._CfdiRelacionado = value;
    }
}
