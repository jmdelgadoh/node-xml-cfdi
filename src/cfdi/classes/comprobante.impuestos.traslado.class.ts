import {ImpuestoEnum, TipoFactorEnum} from '../catalog/enums';
import {AttributesComprobanteImpuestosTrasladosTrasladoElement} from '../types';
import {XmlAttribute, XmlElement} from '../../annotations';
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Traslado'
})
export class ComprobanteImpuestosTraslado {
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

    constructor(params: AttributesComprobanteImpuestosTrasladosTrasladoElement) {
        this.Attributes = params;
    }

    set Attributes(params: AttributesComprobanteImpuestosTrasladosTrasladoElement) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }

    get Attributes(): AttributesComprobanteImpuestosTrasladosTrasladoElement {
        return {
            Base: this.Base,
            Impuesto: this.Impuesto,
            TipoFactor: this.TipoFactor,
            TasaOCuota: this.TasaOCuota,
            Importe: this.Importe,
        }
    }
}
