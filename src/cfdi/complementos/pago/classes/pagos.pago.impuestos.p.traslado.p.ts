import { ImpuestoEnum, TipoFactorEnum } from '../../../catalog/enums';

export class PagosPagoImpuestosPTrasladoP {
    private _BaseP: number;
    private _ImpuestoP: ImpuestoEnum;
    private _TipoFactorP: TipoFactorEnum;
    private _TasaOCuotaP: number;
    private _ImporteP: number;

    get ImporteP(): number {
        return this._ImporteP;
    }

    set ImporteP(value: number) {
        this._ImporteP = value;
    }

    get TasaOCuotaP(): number {
        return this._TasaOCuotaP;
    }

    set TasaOCuotaP(value: number) {
        this._TasaOCuotaP = value;
    }

    get TipoFactorP(): TipoFactorEnum {
        return this._TipoFactorP;
    }

    set TipoFactorP(value: TipoFactorEnum) {
        this._TipoFactorP = value;
    }

    get ImpuestoP(): ImpuestoEnum {
        return this._ImpuestoP;
    }

    set ImpuestoP(value: ImpuestoEnum) {
        this._ImpuestoP = value;
    }

    get BaseP(): number {
        return this._BaseP;
    }

    set BaseP(value: number) {
        this._BaseP = value;
    }
}
