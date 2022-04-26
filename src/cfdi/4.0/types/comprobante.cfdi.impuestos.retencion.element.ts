import { Element } from 'xml-js';
import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';

export type AttributesComprobanteImpuestosRetencionesRetencionElement = {
    /*
    * Atributo requerido para señalar la clave del tipo de impuesto retenido.
    * */
    Impuesto: ImpuestoEnum;
    /*
    * Atributo requerido para señalar el monto del impuesto retenido. No se permiten valores negativos.
    * */
    Importe: string;
}

export type ComprobanteImpuestosRetencionesRetencionElement = {
    type: 'element',
    name: 'cfdi:Retencion',
    attributes?: AttributesComprobanteImpuestosRetencionesRetencionElement,
} & Element
