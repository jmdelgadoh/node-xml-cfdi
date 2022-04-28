import { RegimenFiscalEnum } from '../catalog/enums';
import { AttributesComprobanteEmisorElement } from '../types';
import { sanitizeValues } from '../../../utils';

export class ComprobanteEmisor {
    private _Rfc: string;
    private _Nombre: string;
    private _RegimenFiscal: RegimenFiscalEnum;
    private _FacAtrAdquirente?: string;

    constructor(params: AttributesComprobanteEmisorElement) {
        this.Attributes = params;
    }

    set Attributes(params: AttributesComprobanteEmisorElement) {
        this.Rfc = params.Rfc;
        this.Nombre = params.Nombre;
        this.RegimenFiscal = params.RegimenFiscal;
        this.FacAtrAdquirente = params.FacAtrAdquirente;
    }

    get Attributes(): AttributesComprobanteEmisorElement {
        return {
            Rfc: sanitizeValues(this.Rfc).toUpperCase(),
            Nombre: sanitizeValues(this.Nombre),
            RegimenFiscal: this.RegimenFiscal,
            FacAtrAdquirente: this.FacAtrAdquirente
        }
    }

    get FacAtrAdquirente(): string | undefined {
        return this._FacAtrAdquirente;
    }

    set FacAtrAdquirente(value: string | undefined) {
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
