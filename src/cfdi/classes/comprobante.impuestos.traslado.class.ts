import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';
import {
    AttributesComprobanteImpuestosTrasladosTrasladoElement
} from '../types';
import { XmlAttribute } from '../../annotations';

export class ComprobanteImpuestosTraslado {
    @XmlAttribute({required: true})
    public Base: string;

    @XmlAttribute({required: true})
    public Impuesto: ImpuestoEnum;

    @XmlAttribute({required: true})
    public TipoFactor: TipoFactorEnum;

    @XmlAttribute({required: false})
    public TasaOCuota?: string;

    @XmlAttribute({required: false})
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
