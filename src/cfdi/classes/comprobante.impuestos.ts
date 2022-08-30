import {
    ComprobanteImpuestosRetencion,
    ComprobanteImpuestosTraslado
} from './index';
import {
    AttributesComprobanteImpuestosElement,
    ComprobanteImpuestosRetencionesElement,
    ComprobanteImpuestosRetencionesRetencionElement,
    ComprobanteImpuestosTrasladosElement,
    ComprobanteImpuestosTrasladosTrasladoElement,
} from '../types';
import { Element } from 'xml-js';

export class ComprobanteImpuestos {
    public Traslados: ComprobanteImpuestosTraslado[];
    public Retenciones: ComprobanteImpuestosRetencion[];
    public TotalImpuestosRetenidos?: string;
    public TotalImpuestosTrasladados?: string;

    constructor(params: AttributesComprobanteImpuestosElement = {}) {
        this.Attributes = params;
        this.Retenciones = [];
        this.Traslados = [];
    }

    set Attributes(params: AttributesComprobanteImpuestosElement) {
        this.TotalImpuestosTrasladados = params.TotalImpuestosTrasladados;
        this.TotalImpuestosRetenidos = params.TotalImpuestosRetenidos;
    }

    get Attributes(): AttributesComprobanteImpuestosElement {
        return {
            TotalImpuestosRetenidos: this.TotalImpuestosRetenidos,
            TotalImpuestosTrasladados: this.TotalImpuestosTrasladados,
        }
    }

    get Elements(): Element[] {
        const elements: Element[] = [];

        if (this.Retenciones.length) {
            const retencioElement = {
                type: 'element',
                name: 'cfdi:Retenciones',
                elements: []
            } as ComprobanteImpuestosRetencionesElement;

            for (const retencionValue of this.Retenciones) {
                const element: ComprobanteImpuestosRetencionesRetencionElement = {
                    type: 'element',
                    name: 'cfdi:Retencion',
                    attributes: retencionValue.Attributes
                }
                retencioElement.elements?.push(element)
            }

            elements.push(retencioElement)
        }

        if (this.Traslados.length) {
            const trasladosElement = {
                type: 'element',
                name: 'cfdi:Traslados',
                elements: []
            } as ComprobanteImpuestosTrasladosElement;

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

        return elements;
    }
}
