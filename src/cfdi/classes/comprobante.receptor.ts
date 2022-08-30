import { PaisEnum, RegimenFiscalEnum, UsoCfdiEnum } from '../catalog/enums';
import { CodigoPostalType } from '../catalog/types';
import { AttributesComprobanteReceptorElement } from '../types';
import { sanitizeValues } from '../../utils';
import { XmlAttribute } from '../../annotations';

export class ComprobanteReceptor {
    @XmlAttribute({required: true})
    public Rfc: string;

    @XmlAttribute({required: true})
    public Nombre: string;

    @XmlAttribute({required: true})
    public DomicilioFiscalReceptor: CodigoPostalType;

    @XmlAttribute({required: false})
    public ResidenciaFiscal?: PaisEnum;

    @XmlAttribute({required: false})
    public NumRegIdTrib?: string;

    @XmlAttribute({required: true})
    public RegimenFiscalReceptor: RegimenFiscalEnum;

    @XmlAttribute({required: true})
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
