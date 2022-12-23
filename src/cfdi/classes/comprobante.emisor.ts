import {RegimenFiscalEnum} from '../catalog/enums';
import {AttributesComprobanteEmisorElement} from '../types';
import {sanitizeValues} from '../../utils';
import {XmlAttribute} from '../../annotations';

export class ComprobanteEmisor {
    @XmlAttribute()
    public Rfc: string;

    @XmlAttribute()
    public Nombre: string;

    @XmlAttribute()
    public RegimenFiscal: RegimenFiscalEnum;

    @XmlAttribute()
    public FacAtrAdquirente?: string;

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
}
