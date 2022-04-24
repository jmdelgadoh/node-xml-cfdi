import { ComprobanteImpuestosRetencion, ComprobanteImpuestosTraslado } from './';

export class ComprobanteImpuestos {
    private _Retenciones: ComprobanteImpuestosRetencion[];
    private _Traslados: ComprobanteImpuestosTraslado[];
    private _TotalImpuestosRetenidos: number;
    private _TotalImpuestosRetenidosSpecified: boolean;
    private _TotalImpuestosTrasladados: number;
    private _TotalImpuestosTrasladadosSpecified: boolean;

    get TotalImpuestosTrasladadosSpecified(): boolean {
        return this._TotalImpuestosTrasladadosSpecified;
    }

    set TotalImpuestosTrasladadosSpecified(value: boolean) {
        this._TotalImpuestosTrasladadosSpecified = value;
    }

    get TotalImpuestosTrasladados(): number {
        return this._TotalImpuestosTrasladados;
    }

    set TotalImpuestosTrasladados(value: number) {
        this._TotalImpuestosTrasladados = value;
    }

    get TotalImpuestosRetenidosSpecified(): boolean {
        return this._TotalImpuestosRetenidosSpecified;
    }

    set TotalImpuestosRetenidosSpecified(value: boolean) {
        this._TotalImpuestosRetenidosSpecified = value;
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
