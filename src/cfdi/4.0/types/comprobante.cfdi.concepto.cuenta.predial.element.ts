import { Element } from 'xml-js';

export type AttributesComprobanteConceptoCuentaPredialElement = {
    /*
    * Atributo requerido para precisar el número de la cuenta predial del inmueble cubierto por el presente concepto, o
    * bien para incorporar los datos de identificación del certificado de participación inmobiliaria no amortizable,
    * tratándose de arrendamiento.
    * */
    Numero: string;
}

export type ComprobanteConceptoCuentaPredialElement = {
    type: 'element',
    name: 'cfdi:CuentaPredial',
    attributes?: AttributesComprobanteConceptoCuentaPredialElement,
} & Element
