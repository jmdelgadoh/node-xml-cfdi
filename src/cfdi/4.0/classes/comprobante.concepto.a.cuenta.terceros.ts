import { RegimenFiscalEnum } from '../catalog/enums';

export class ComprobanteConceptoACuentaTerceros {
    private _RfcACuentaTerceros: string;
    private _NombreACuentaTerceros: string;
    private _RegimenFiscalACuentaTerceros: RegimenFiscalEnum;
    private _DomicilioFiscalACuentaTerceros: string;

    get DomicilioFiscalACuentaTerceros(): string {
        return this._DomicilioFiscalACuentaTerceros;
    }

    set DomicilioFiscalACuentaTerceros(value: string) {
        this._DomicilioFiscalACuentaTerceros = value;
    }

    get RegimenFiscalACuentaTerceros(): RegimenFiscalEnum {
        return this._RegimenFiscalACuentaTerceros;
    }

    set RegimenFiscalACuentaTerceros(value: RegimenFiscalEnum) {
        this._RegimenFiscalACuentaTerceros = value;
    }

    get NombreACuentaTerceros(): string {
        return this._NombreACuentaTerceros;
    }

    set NombreACuentaTerceros(value: string) {
        this._NombreACuentaTerceros = value;
    }

    get RfcACuentaTerceros(): string {
        return this._RfcACuentaTerceros;
    }

    set RfcACuentaTerceros(value: string) {
        this._RfcACuentaTerceros = value;
    }
}
