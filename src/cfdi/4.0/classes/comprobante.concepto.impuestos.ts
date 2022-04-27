import { ComprobanteConceptoImpuestosRetencion, ComprobanteConceptoImpuestosTraslado } from ".";
import { Element } from 'xml-js';
import {
    ComprobanteConceptoImpuestosRetencionesElement,
    ComprobanteConceptoImpuestosRetencionesRetencionElement,
    ComprobanteConceptoImpuestosTrasladosElement,
    ComprobanteImpuestosTrasladosTrasladoElement
} from '../types';

export class ComprobanteConceptoImpuestos {
    private _Traslados: ComprobanteConceptoImpuestosTraslado[];
    private _Retenciones: ComprobanteConceptoImpuestosRetencion[];

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

    get Retenciones(): ComprobanteConceptoImpuestosRetencion[] {
        return this._Retenciones;
    }

    set Retenciones(value: ComprobanteConceptoImpuestosRetencion[]) {
        this._Retenciones = value;
    }

    get Traslados(): ComprobanteConceptoImpuestosTraslado[] {
        return this._Traslados;
    }

    set Traslados(value: ComprobanteConceptoImpuestosTraslado[]) {
        this._Traslados = value;
    }
}
