import { ImpuestoEnum, TipoFactorEnum } from '../../../catalog/enums';

export class PagosPagoDoctoRelacionadoImpuestosDRRetencionDR {
    private _BaseDR: number;
    private _ImpuestoDR: ImpuestoEnum;
    private _TipoFactorDR: TipoFactorEnum;
    private _TasaOCuotaDR: number;
    private _ImporteDR: number;

    get ImporteDR(): number {
        return this._ImporteDR;
    }

    set ImporteDR(value: number) {
        this._ImporteDR = value;
    }

    get TasaOCuotaDR(): number {
        return this._TasaOCuotaDR;
    }

    set TasaOCuotaDR(value: number) {
        this._TasaOCuotaDR = value;
    }

    get TipoFactorDR(): TipoFactorEnum {
        return this._TipoFactorDR;
    }

    set TipoFactorDR(value: TipoFactorEnum) {
        this._TipoFactorDR = value;
    }

    get ImpuestoDR(): ImpuestoEnum {
        return this._ImpuestoDR;
    }

    set ImpuestoDR(value: ImpuestoEnum) {
        this._ImpuestoDR = value;
    }

    get BaseDR(): number {
        return this._BaseDR;
    }

    set BaseDR(value: number) {
        this._BaseDR = value;
    }
}
