import { ImpuestoEnum } from '../enums';

export class ComprobanteImpuestosRetencion {
    private _Impuesto: ImpuestoEnum;
    private _Importe: number;

    get Importe(): number {
        return this._Importe;
    }

    set Importe(value: number) {
        this._Importe = value;
    }

    get Impuesto(): ImpuestoEnum {
        return this._Impuesto;
    }

    set Impuesto(value: ImpuestoEnum) {
        this._Impuesto = value;
    }
}
