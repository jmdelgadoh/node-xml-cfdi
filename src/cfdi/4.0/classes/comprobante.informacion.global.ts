import { MesesEnum, PeriodicidadEnum } from '../enums';

export class ComprobanteInformacionGlobal {
    private _Periodicidad: PeriodicidadEnum;
    private _Meses: MesesEnum;
    private _Anio: string;

    get Anio(): string {
        return this._Anio;
    }

    set Anio(value: string) {
        this._Anio = value;
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
