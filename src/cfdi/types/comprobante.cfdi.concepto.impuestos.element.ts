import { Element } from 'xml-js';

export type ComprobanteConceptoImpuestosElement = {
    type: 'element',
    name: 'cfdi:Impuestos',
} & Element

export type ComprobanteConceptoImpuestosTrasladosElement = {
    type: 'element',
    name: 'cfdi:Traslados',
} & Element

export type ComprobanteConceptoImpuestosRetencionesElement = {
    type: 'element',
    name: 'cfdi:Retenciones',
} & Element
