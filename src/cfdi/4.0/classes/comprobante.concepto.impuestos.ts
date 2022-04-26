import { ComprobanteConceptoImpuestosRetencion, ComprobanteConceptoImpuestosTraslado } from ".";
import {
    AttributesComprobanteConceptoImpuestosRetencionesRetencionElement,
    AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement
} from '../types';

export class ComprobanteConceptoImpuestos {
    private _Traslados: ComprobanteConceptoImpuestosTraslado[];
    private _Retenciones: ComprobanteConceptoImpuestosRetencion[];

    constructor() {
        this.Retenciones = [];
        this.Traslados = [];
    }

    public retencion(params: AttributesComprobanteConceptoImpuestosRetencionesRetencionElement) {
        this.Retenciones.push(new ComprobanteConceptoImpuestosRetencion(params))
    }

    public traslado(params: AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement) {
        this.Traslados.push(new ComprobanteConceptoImpuestosTraslado(params))
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
