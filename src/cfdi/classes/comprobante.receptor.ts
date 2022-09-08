import {PaisEnum, RegimenFiscalEnum, UsoCfdiEnum} from '../catalog/enums';
import {CodigoPostalType} from '../catalog/types';
import {AttributesComprobanteReceptorElement} from '../types';
import {sanitizeValues} from '../../utils';
import {XmlAttribute, XmlElement} from '../../annotations';
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Receptor'
})
export class ComprobanteReceptor {
    @XmlAttribute()
    public Rfc: string;

    @XmlAttribute()
    public Nombre: string;

    @XmlAttribute()
    public DomicilioFiscalReceptor: CodigoPostalType;

    @XmlAttribute()
    public ResidenciaFiscal?: PaisEnum;

    @XmlAttribute()
    public NumRegIdTrib?: string;

    @XmlAttribute()
    public RegimenFiscalReceptor: RegimenFiscalEnum;

    @XmlAttribute()
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
