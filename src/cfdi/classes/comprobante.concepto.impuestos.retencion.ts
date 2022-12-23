import {ImpuestoEnum, TipoFactorEnum} from '../catalog/enums';
import {AttributesComprobanteConceptoImpuestosRetencionesRetencionElement} from '../types';
import {XmlAttribute} from '../../annotations';

export class ComprobanteConceptoImpuestosRetencion {
    @XmlAttribute()
    public Base: string;

    @XmlAttribute()
    public Impuesto: ImpuestoEnum;

    @XmlAttribute()
    public TipoFactor: TipoFactorEnum;

    @XmlAttribute()
    public TasaOCuota: string;

    @XmlAttribute()
    public Importe: string;

    constructor(params: AttributesComprobanteConceptoImpuestosRetencionesRetencionElement) {
        this.Attributes = params
    }

    set Attributes(params: AttributesComprobanteConceptoImpuestosRetencionesRetencionElement) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }

    get Attributes(): AttributesComprobanteConceptoImpuestosRetencionesRetencionElement {
        return {
            Base: this.Base,
            Impuesto: this.Impuesto,
            TipoFactor: this.TipoFactor,
            TasaOCuota: this.TasaOCuota,
            Importe: this.Importe
        }
    }
}
