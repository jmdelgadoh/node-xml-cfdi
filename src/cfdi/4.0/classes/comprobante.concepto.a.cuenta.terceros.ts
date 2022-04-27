import { RegimenFiscalEnum } from '../catalog/enums';
import { AttributesComprobanteConceptoACuentaTercerosElement } from '../types';
import { sanitizeValues } from '../../utils';

export class ComprobanteConceptoACuentaTerceros {
    private _RfcACuentaTerceros: string;
    private _NombreACuentaTerceros: string;
    private _RegimenFiscalACuentaTerceros: RegimenFiscalEnum;
    private _DomicilioFiscalACuentaTerceros: string;

    constructor(params: AttributesComprobanteConceptoACuentaTercerosElement) {
        this.Attributes = params
    }

    set Attributes(params: AttributesComprobanteConceptoACuentaTercerosElement) {
        this.RfcACuentaTerceros = sanitizeValues(params.RfcACuentaTerceros).toUpperCase();
        this.NombreACuentaTerceros = sanitizeValues(params.NombreACuentaTerceros);
        this.RegimenFiscalACuentaTerceros = params.RegimenFiscalACuentaTerceros;
        this.DomicilioFiscalACuentaTerceros = params.DomicilioFiscalACuentaTerceros;
    }

    get Attributes(): AttributesComprobanteConceptoACuentaTercerosElement {
        return {
            RfcACuentaTerceros: this.RfcACuentaTerceros,
            NombreACuentaTerceros: this.NombreACuentaTerceros,
            RegimenFiscalACuentaTerceros: this.RegimenFiscalACuentaTerceros,
            DomicilioFiscalACuentaTerceros: this.DomicilioFiscalACuentaTerceros,
        }
    }


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
