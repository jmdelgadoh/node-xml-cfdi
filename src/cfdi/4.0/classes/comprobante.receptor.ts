import { PaisEnum, RegimenFiscalEnum, UsoCfdiEnum } from '../enums';
import { CodigoPostalType } from '../types';

export class ComprobanteReceptor {
    private _Rfc: string;
    private _Nombre: string;
    private _DomicilioFiscalReceptor: CodigoPostalType;
    private _ResidenciaFiscal: PaisEnum;
    private _ResidenciaFiscalSpecified: boolean;
    private _NumRegIdTrib: string;
    private _RegimenFiscalReceptor: RegimenFiscalEnum;
    private _UsoCFDI: UsoCfdiEnum;

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

    get NumRegIdTrib(): string {
        return this._NumRegIdTrib;
    }

    set NumRegIdTrib(value: string) {
        this._NumRegIdTrib = value;
    }

    get ResidenciaFiscalSpecified(): boolean {
        return this._ResidenciaFiscalSpecified;
    }

    set ResidenciaFiscalSpecified(value: boolean) {
        this._ResidenciaFiscalSpecified = value;
    }

    get ResidenciaFiscal(): PaisEnum {
        return this._ResidenciaFiscal;
    }

    set ResidenciaFiscal(value: PaisEnum) {
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
