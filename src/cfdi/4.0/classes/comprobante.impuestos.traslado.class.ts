import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';
import {
    AttributesComprobanteImpuestosTrasladosTrasladoElement
} from '../types';

export class ComprobanteImpuestosTraslado {
    private _Base: string;
    private _Impuesto: ImpuestoEnum;
    private _TipoFactor: TipoFactorEnum;
    private _TasaOCuota?: string;
    private _Importe?: string;

    constructor(params: AttributesComprobanteImpuestosTrasladosTrasladoElement) {
        this.AttributesImpuestosRetencion = params;
    }

    set AttributesImpuestosRetencion(params: AttributesComprobanteImpuestosTrasladosTrasladoElement) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }

    get AttributesImpuestosRetencion(): AttributesComprobanteImpuestosTrasladosTrasladoElement {
        return {
            Base: this.Base,
            Impuesto: this.Impuesto,
            TipoFactor: this.TipoFactor,
            TasaOCuota: this.TasaOCuota,
            Importe: this.Importe,
        }
    }

    get Importe(): string | undefined {
        return this._Importe;
    }

    set Importe(value: string | undefined) {
        this._Importe = value;
    }

    get TasaOCuota(): string | undefined {
        return this._TasaOCuota;
    }

    set TasaOCuota(value: string | undefined) {
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

    get Base(): string {
        return this._Base;
    }

    set Base(value: string) {
        this._Base = value;
    }
}
