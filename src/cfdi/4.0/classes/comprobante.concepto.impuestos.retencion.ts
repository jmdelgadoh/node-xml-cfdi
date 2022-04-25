import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';

export class ComprobanteConceptoImpuestosRetencion {
    private _Base: number;
    private _Impuesto: ImpuestoEnum;
    private _TipoFactor: TipoFactorEnum;
    private _TasaOCuota: number;
    private _Importe: number;

    get Importe(): number {
        return this._Importe;
    }

    set Importe(value: number) {
        this._Importe = value;
    }

    get TasaOCuota(): number {
        return this._TasaOCuota;
    }

    set TasaOCuota(value: number) {
        this._TasaOCuota = value;
    }

    get TipoFactor(): TipoFactorEnum {
        return this._TipoFactor;
    }

    set TipoFactor(value: TipoFactorEnum) {
        this._TipoFactor = value;
    }

    get Impuesto(): ImpuestoEnum {
        return this._Impuesto;
    }

    set Impuesto(value: ImpuestoEnum) {
        this._Impuesto = value;
    }

    get Base(): number {
        return this._Base;
    }

    set Base(value: number) {
        this._Base = value;
    }
}
