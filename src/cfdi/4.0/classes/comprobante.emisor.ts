import { RegimenFiscalEnum } from '../enums';

export class ComprobanteEmisor {
    private _Rfc: string;
    private _Nombre: string;
    private _RegimenFiscal: RegimenFiscalEnum;
    private _FacAtrAdquirente: string;

    get FacAtrAdquirente(): string {
        return this._FacAtrAdquirente;
    }

    set FacAtrAdquirente(value: string) {
        this._FacAtrAdquirente = value;
    }

    get RegimenFiscal(): RegimenFiscalEnum {
        return this._RegimenFiscal;
    }

    set RegimenFiscal(value: RegimenFiscalEnum) {
        this._RegimenFiscal = value;
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
