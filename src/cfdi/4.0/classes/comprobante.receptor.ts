import { PaisEnum, RegimenFiscalEnum, UsoCfdiEnum } from '../catalog/enums';
import { CodigoPostalType } from '../catalog/types';
import { AttributesComprobanteReceptorElement } from '../types';

export class ComprobanteReceptor {
    private _Rfc: string;
    private _Nombre: string;
    private _DomicilioFiscalReceptor: CodigoPostalType;
    private _ResidenciaFiscal?: PaisEnum;
    private _NumRegIdTrib?: string;
    private _RegimenFiscalReceptor: RegimenFiscalEnum;
    private _UsoCFDI: UsoCfdiEnum;

    constructor(params: AttributesComprobanteReceptorElement) {
        this.AttributesReceptor = params;
    }

    set AttributesReceptor(params: AttributesComprobanteReceptorElement) {
        this.Rfc = params.Rfc;
        this.Nombre = params.Nombre;
        this.DomicilioFiscalReceptor = params.DomicilioFiscalReceptor;
        this.ResidenciaFiscal = params.ResidenciaFiscal;
        this.NumRegIdTrib = params.NumRegIdTrib;
        this.RegimenFiscalReceptor = params.RegimenFiscalReceptor;
        this.UsoCFDI = params.UsoCFDI;
    }

    get AttributesReceptor(): AttributesComprobanteReceptorElement {
        return {
            Rfc: this.Rfc,
            Nombre: this.Nombre,
            DomicilioFiscalReceptor: this.DomicilioFiscalReceptor,
            ResidenciaFiscal: this.ResidenciaFiscal,
            NumRegIdTrib: this.NumRegIdTrib,
            RegimenFiscalReceptor: this.RegimenFiscalReceptor,
            UsoCFDI: this.UsoCFDI,
        }
    }

    get UsoCFDI(): UsoCfdiEnum {
        return this._UsoCFDI;
    }

    set UsoCFDI(value: UsoCfdiEnum) {
        this._UsoCFDI = value;
    }

    get RegimenFiscalReceptor(): RegimenFiscalEnum {
        return this._RegimenFiscalReceptor;
    }

    set RegimenFiscalReceptor(value: RegimenFiscalEnum) {
        this._RegimenFiscalReceptor = value;
    }

    get NumRegIdTrib(): string | undefined {
        return this._NumRegIdTrib;
    }

    set NumRegIdTrib(value: string | undefined) {
        this._NumRegIdTrib = value;
    }

    get ResidenciaFiscal(): PaisEnum | undefined {
        return this._ResidenciaFiscal;
    }

    set ResidenciaFiscal(value: PaisEnum | undefined) {
        this._ResidenciaFiscal = value;
    }

    get DomicilioFiscalReceptor(): string {
        return this._DomicilioFiscalReceptor;
    }

    set DomicilioFiscalReceptor(value: string) {
        this._DomicilioFiscalReceptor = value;
    }

    get Nombre(): string {
        return this._Nombre;
    }

    set Nombre(value: string) {
        this._Nombre = value;
    }

    get Rfc(): string {
        return this._Rfc;
    }

    set Rfc(value: string) {
        this._Rfc = value;
    }
}
