import {
    PagosPagoDoctoRelacionadoImpuestosDRRetencionDR,
    PagosPagoDoctoRelacionadoImpuestosDRTrasladoDR
} from '.';

export class PagosPagoDoctoRelacionadoImpuestosDR {
    private _RetencionesDR: PagosPagoDoctoRelacionadoImpuestosDRRetencionDR[];
    private _TrasladosDR: PagosPagoDoctoRelacionadoImpuestosDRTrasladoDR[];

    constructor() {
        this.RetencionesDR = [];
        this.TrasladosDR = [];
    }

    get TrasladosDR(): PagosPagoDoctoRelacionadoImpuestosDRTrasladoDR[] {
        return this._TrasladosDR;
    }

    set TrasladosDR(value: PagosPagoDoctoRelacionadoImpuestosDRTrasladoDR[]) {
        this._TrasladosDR = value;
    }

    get RetencionesDR(): PagosPagoDoctoRelacionadoImpuestosDRRetencionDR[] {
        return this._RetencionesDR;
    }

    set RetencionesDR(value: PagosPagoDoctoRelacionadoImpuestosDRRetencionDR[]) {
        this._RetencionesDR = value;
    }
}
