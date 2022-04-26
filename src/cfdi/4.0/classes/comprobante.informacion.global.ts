import { MesesEnum, PeriodicidadEnum } from '../catalog/enums';
import { AttributesComprobanteInformacionGlobalElement } from '../types';

export class ComprobanteInformacionGlobal {
    private _Periodicidad: PeriodicidadEnum;
    private _Meses: MesesEnum;
    private _Año: string;

    constructor(params: AttributesComprobanteInformacionGlobalElement) {
        this.AttributesInformacionGlobal = params;
    }

    set AttributesInformacionGlobal(params: AttributesComprobanteInformacionGlobalElement) {
        this.Periodicidad = params.Periodicidad;
        this.Meses = params.Meses;
        this.Año = params.Año;
    }

    get AttributesInformacionGlobal(): AttributesComprobanteInformacionGlobalElement {
        return {
            Periodicidad: this.Periodicidad,
            Meses: this.Meses,
            Año: this.Año
        }
    }

    get Año(): string {
        return this._Año;
    }

    set Año(value: string) {
        this._Año = value;
    }

    get Meses(): MesesEnum {
        return this._Meses;
    }

    set Meses(value: MesesEnum) {
        this._Meses = value;
    }

    get Periodicidad(): PeriodicidadEnum {
        return this._Periodicidad;
    }

    set Periodicidad(value: PeriodicidadEnum) {
        this._Periodicidad = value;
    }
}
