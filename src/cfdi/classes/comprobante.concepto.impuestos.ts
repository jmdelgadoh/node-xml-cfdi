import { ComprobanteConceptoImpuestosRetencion, ComprobanteConceptoImpuestosTraslado } from "./index";
import { Element } from 'xml-js';
import {
    ComprobanteConceptoImpuestosRetencionesElement,
    ComprobanteConceptoImpuestosRetencionesRetencionElement,
    ComprobanteConceptoImpuestosTrasladosElement,
    ComprobanteImpuestosTrasladosTrasladoElement
} from '../types';
import {XmlElement} from "../../annotations";
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Impuestos'
})
export class ComprobanteConceptoImpuestos {
    public Traslados: ComprobanteConceptoImpuestosTraslado[];
    public Retenciones: ComprobanteConceptoImpuestosRetencion[];

    constructor() {
        this.Retenciones = [];
        this.Traslados = [];
    }

    get Elements(): Element[] {
        const elements: Element[] = [];

        if (this.Traslados.length) {
            const trasladosElement = {
                type: 'element',
                name: 'cfdi:Traslados',
                elements: []
            } as ComprobanteConceptoImpuestosTrasladosElement;

            for (const trasladosValue of this.Traslados) {
                const element: ComprobanteImpuestosTrasladosTrasladoElement = {
                    type: 'element',
                    name: 'cfdi:Traslado',
                    attributes: trasladosValue.Attributes
                }
                trasladosElement.elements?.push(element)
            }

            elements?.push(trasladosElement);
        }

        if (this.Retenciones.length) {
            const retencionesElement = {
                type: 'element',
                name: 'cfdi:Retenciones',
                elements: []
            } as ComprobanteConceptoImpuestosRetencionesElement;

            for (const retencionesValue of this.Retenciones) {
                const element: ComprobanteConceptoImpuestosRetencionesRetencionElement = {
                    type: 'element',
                    name: 'cfdi:Retencion',
                    attributes: retencionesValue.Attributes
                }
                retencionesElement.elements?.push(element)
            }

            elements?.push(retencionesElement);
        }

        return elements;
    }
}
