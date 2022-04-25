import { Element } from 'xml-js';
import { TipoRelacionEnum } from '../catalog/enums';

export type AttributesComprobanteCfdiRelacionadosElement = {
    /*
    * Atributo requerido para indicar la clave de la relación que existe entre éste que se está generando y el o los
    * CFDI previos
    * */
    TipoRelacion: TipoRelacionEnum;
}

export type AttributesComprobanteCfdiRelacionadosConCfdiRelacionadoElement = AttributesComprobanteCfdiRelacionadosElement & {
    /*
    * Atributo requerido para registrar el folio fiscal (UUID) de los CFDIs relacionados con el presente comprobante
    * */
    CfdiRelacionado: string[];
}

export type ComprobanteCfdiRelacionadosElement = {
    type: 'element',
    name: 'cfdi:CfdiRelacionados',
    attributes?: AttributesComprobanteCfdiRelacionadosElement,
} & Element
