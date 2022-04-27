import {
    ComprobanteImpuestosRetencion,
    ComprobanteImpuestosTraslado
} from './';
import {
    AttributesComprobanteImpuestosElement,
    ComprobanteImpuestosRetencionesElement,
    ComprobanteImpuestosRetencionesRetencionElement,
    ComprobanteImpuestosTrasladosElement,
    ComprobanteImpuestosTrasladosTrasladoElement,
} from '../types';
import { Element } from 'xml-js';

export class ComprobanteImpuestos {
    private _Traslados: ComprobanteImpuestosTraslado[];
    private _Retenciones: ComprobanteImpuestosRetencion[];
    private _TotalImpuestosRetenidos?: string;
    private _TotalImpuestosTrasladados?: string;

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

    get TotalImpuestosTrasladados(): string | undefined {
        return this._TotalImpuestosTrasladados;
    }

    set TotalImpuestosTrasladados(value: string | undefined) {
        this._TotalImpuestosTrasladados = value;
    }

    get TotalImpuestosRetenidos(): string | undefined {
        return this._TotalImpuestosRetenidos;
    }

    set TotalImpuestosRetenidos(value: string | undefined) {
        this._TotalImpuestosRetenidos = value;
    }

    get Traslados(): ComprobanteImpuestosTraslado[] {
        return this._Traslados;
    }

    set Traslados(value: ComprobanteImpuestosTraslado[]) {
        this._Traslados = value;
    }

    get Retenciones(): ComprobanteImpuestosRetencion[] {
        return this._Retenciones;
    }

    set Retenciones(value: ComprobanteImpuestosRetencion[]) {
        this._Retenciones = value;
    }
}
