import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';
import { AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement } from '../types';
import { XmlAttribute } from '../../annotations';

export class ComprobanteConceptoImpuestosTraslado {
    @XmlAttribute({required: true})
    public Base: string;

    @XmlAttribute({required: true})
    public Impuesto: ImpuestoEnum;

    @XmlAttribute({required: true})
    public TipoFactor: TipoFactorEnum;

    @XmlAttribute({required: true})
    public TasaOCuota?: string;

    @XmlAttribute({required: true})
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
