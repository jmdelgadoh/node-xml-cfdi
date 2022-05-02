import { PagosPagoImpuestosPTrasladoP, PagosPagoImpuestosPRetencionP } from './';

export class PagosPagoImpuestosP {
    private _RetencionesP: PagosPagoImpuestosPRetencionP[];
    private _TrasladosP: PagosPagoImpuestosPTrasladoP[];

    constructor() {
        this.RetencionesP = [];
        this.TrasladosP = [];
    }

    get TrasladosP(): PagosPagoImpuestosPTrasladoP[] {
        return this._TrasladosP;
    }

    set TrasladosP(value: PagosPagoImpuestosPTrasladoP[]) {
        this._TrasladosP = value;
    }

    get RetencionesP(): PagosPagoImpuestosPRetencionP[] {
        return this._RetencionesP;
    }

    set RetencionesP(value: PagosPagoImpuestosPRetencionP[]) {
        this._RetencionesP = value;
    }
}
