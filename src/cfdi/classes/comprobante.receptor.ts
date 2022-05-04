import { PaisEnum, RegimenFiscalEnum, UsoCfdiEnum } from '../catalog/enums';
import { CodigoPostalType } from '../catalog/types';
import { AttributesComprobanteReceptorElement } from '../types';
import { sanitizeValues } from '../../utils';
import { XMLAttribute, XMLElement } from '../../annotations';

@XMLElement({
    namespace: 'cfdi',
    name: 'Receptor'
})
export class ComprobanteReceptor {
    @XMLAttribute()
    public Rfc: string;

    @XMLAttribute()
    public Nombre: string;

    @XMLAttribute()
    public DomicilioFiscalReceptor: CodigoPostalType;

    @XMLAttribute()
    public ResidenciaFiscal?: PaisEnum;

    @XMLAttribute()
    public NumRegIdTrib?: string;

    @XMLAttribute()
    public RegimenFiscalReceptor: RegimenFiscalEnum;

    @XMLAttribute()
    public UsoCFDI: UsoCfdiEnum;

    constructor(params: AttributesComprobanteReceptorElement) {
        this.Attributes = params;
    }

    set Attributes(params: AttributesComprobanteReceptorElement) {
        this.Rfc = sanitizeValues(params.Rfc).toUpperCase();
        this.Nombre = sanitizeValues(params.Nombre);
        this.DomicilioFiscalReceptor = params.DomicilioFiscalReceptor;
        this.ResidenciaFiscal = params.ResidenciaFiscal;
        this.NumRegIdTrib = params.NumRegIdTrib;
        this.RegimenFiscalReceptor = params.RegimenFiscalReceptor;
        this.UsoCFDI = params.UsoCFDI;
    }

    get Attributes(): AttributesComprobanteReceptorElement {
        return {
            Rfc: this.Rfc,
            Nombre: this.Nombre,
            DomicilioFiscalReceptor: this.DomicilioFiscalReceptor,
            ResidenciaFiscal: this.ResidenciaFiscal,
            NumRegIdTrib: this.NumRegIdTrib,
            RegimenFiscalReceptor: this.RegimenFiscalReceptor,
            UsoCFDI: this.UsoCFDI,
        }
    }
}
