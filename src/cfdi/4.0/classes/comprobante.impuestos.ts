import { ComprobanteImpuestosRetencion, ComprobanteImpuestosTraslado } from './';

export class ComprobanteImpuestos {
    private _Retenciones: ComprobanteImpuestosRetencion[];
    private _Traslados: ComprobanteImpuestosTraslado[];
    private _TotalImpuestosRetenidos: number;
    private _TotalImpuestosTrasladados: number;

    get TotalImpuestosTrasladados(): number {
        return this._TotalImpuestosTrasladados;
    }

    set TotalImpuestosTrasladados(value: number) {
        this._TotalImpuestosTrasladados = value;
    }

    get TotalImpuestosRetenidos(): number {
        return this._TotalImpuestosRetenidos;
    }

    set TotalImpuestosRetenidos(value: number) {
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
