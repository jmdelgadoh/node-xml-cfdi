import { RegimenFiscalEnum } from '../catalog/enums';
import { AttributesComprobanteEmisorElement } from '../types';
import { sanitizeValues } from '../../utils';
import { XMLAttribute, XMLElement } from '../../annotations';

@XMLElement({
    namespace: 'cfdi',
    name: 'Emisor'
})
export class ComprobanteEmisor {
    @XMLAttribute()
    public Rfc: string;

    @XMLAttribute()
    public Nombre: string;

    @XMLAttribute()
    public RegimenFiscal: RegimenFiscalEnum;

    @XMLAttribute()
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
