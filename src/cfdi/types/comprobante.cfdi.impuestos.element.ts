import { Element } from 'xml-js';

export type AttributesComprobanteImpuestosElement = {
    /*
    * Atributo condicional para expresar el total de los impuestos retenidos que se desprenden de los conceptos
    * expresados en el comprobante fiscal digital por Internet. No se permiten valores negativos. Es requerido cuando
    * en los conceptos se registren impuestos retenidos.
    * */
    TotalImpuestosRetenidos?: string;
    /*
    * Atributo condicional para expresar el total de los impuestos trasladados que se desprenden de los conceptos
    * expresados en el comprobante fiscal digital por Internet. No se permiten valores negativos. Es requerido cuando
    * en los conceptos se registren impuestos trasladados.
    * */
    TotalImpuestosTrasladados?: string;
}

export type ComprobanteImpuestosElement = {
    type: 'element',
    name: 'cfdi:Impuestos',
    attributes?: AttributesComprobanteImpuestosElement,
} & Element

export type ComprobanteImpuestosTrasladosElement = {
    type: 'element',
    name: 'cfdi:Traslados',
} & Element

export type ComprobanteImpuestosRetencionesElement = {
    type: 'element',
    name: 'cfdi:Retenciones',
} & Element
