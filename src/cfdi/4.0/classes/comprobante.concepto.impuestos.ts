import { ComprobanteConceptoImpuestosRetencion, ComprobanteConceptoImpuestosTraslado } from ".";

export class ComprobanteConceptoImpuestos {
    private _Traslados: ComprobanteConceptoImpuestosTraslado[];
    private _Retenciones: ComprobanteConceptoImpuestosRetencion[];

    constructor() {
        this.Retenciones = [];
        this.Traslados = [];
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
