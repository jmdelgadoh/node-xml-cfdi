import {
    ComprobanteImpuestosRetencion,
    ComprobanteImpuestosTraslado
} from './';
import {
    AttributesComprobanteImpuestosElement,
    AttributesComprobanteImpuestosRetencionesRetencionElement,
    AttributesComprobanteImpuestosTrasladosTrasladoElement
} from '../types';

export class ComprobanteImpuestos {
    private _Traslados: ComprobanteImpuestosTraslado[];
    private _Retenciones: ComprobanteImpuestosRetencion[];
    private _TotalImpuestosRetenidos?: string;
    private _TotalImpuestosTrasladados?: string;

    constructor(params: AttributesComprobanteImpuestosElement = {}) {
        this.AttributesImpuestos = params;
        this.Retenciones = [];
        this.Traslados = [];
    }

    public retencion(params: AttributesComprobanteImpuestosRetencionesRetencionElement) {
        this.Retenciones.push(new ComprobanteImpuestosRetencion(params))
    }

    public traslado(params: AttributesComprobanteImpuestosTrasladosTrasladoElement) {
        this.Traslados.push(new ComprobanteImpuestosTraslado(params))
    }

    set AttributesImpuestos(params: AttributesComprobanteImpuestosElement) {
        this.TotalImpuestosTrasladados = params.TotalImpuestosTrasladados;
        this.TotalImpuestosRetenidos = params.TotalImpuestosRetenidos;
    }

    get AttributesImpuestos(): AttributesComprobanteImpuestosElement {
        return {
            TotalImpuestosTrasladados: this.TotalImpuestosTrasladados,
            TotalImpuestosRetenidos: this.TotalImpuestosRetenidos,
        }
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
