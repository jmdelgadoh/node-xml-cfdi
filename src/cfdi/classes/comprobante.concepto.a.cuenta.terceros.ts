import {RegimenFiscalEnum} from '../catalog/enums';
import {AttributesComprobanteConceptoACuentaTercerosElement} from '../types';
import {sanitizeValues} from '../../utils';
import {XmlAttribute} from '../../annotations';

export class ComprobanteConceptoACuentaTerceros {
    @XmlAttribute()
    public RfcACuentaTerceros: string;

    @XmlAttribute()
    public NombreACuentaTerceros: string;

    @XmlAttribute()
    public RegimenFiscalACuentaTerceros: RegimenFiscalEnum;

    @XmlAttribute()
    public DomicilioFiscalACuentaTerceros: string;

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
}
