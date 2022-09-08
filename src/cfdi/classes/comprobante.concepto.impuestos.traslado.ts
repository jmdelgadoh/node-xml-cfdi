import {ImpuestoEnum, TipoFactorEnum} from '../catalog/enums';
import {AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement} from '../types';
import {XmlAttribute, XmlElement} from '../../annotations';
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Traslado'
})
export class ComprobanteConceptoImpuestosTraslado {
    @XmlAttribute()
    public Base: string;

    @XmlAttribute()
    public Impuesto: ImpuestoEnum;

    @XmlAttribute()
    public TipoFactor: TipoFactorEnum;

    @XmlAttribute()
    public TasaOCuota?: string;

    @XmlAttribute()
    public Importe?: string;

    constructor(params: AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement) {
        this.Attributes = params
    }

    set Attributes(params: AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }

    get Attributes(): AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement {
        return {
            Base: this.Base,
            Impuesto: this.Impuesto,
            TipoFactor: this.TipoFactor,
            TasaOCuota: this.TasaOCuota,
            Importe: this.Importe
        }
    }
}
