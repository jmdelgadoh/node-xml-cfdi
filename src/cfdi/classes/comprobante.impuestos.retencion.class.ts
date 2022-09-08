import {ImpuestoEnum} from '../catalog/enums';
import {AttributesComprobanteImpuestosRetencionesRetencionElement} from '../types';
import {XmlAttribute, XmlElement} from '../../annotations';
import {CFDI_NAME_SPACE} from "../index";

@XmlElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Retencion'
})
export class ComprobanteImpuestosRetencion {
    @XmlAttribute()
    public Impuesto: ImpuestoEnum;

    @XmlAttribute()
    public Importe: string;

    constructor(params: AttributesComprobanteImpuestosRetencionesRetencionElement) {
        this.Attributes = params;
    }

    set Attributes(params: AttributesComprobanteImpuestosRetencionesRetencionElement) {
        this.Importe = params.Importe;
        this.Impuesto = params.Impuesto;
    }

    get Attributes(): AttributesComprobanteImpuestosRetencionesRetencionElement {
        return {
            Impuesto: this.Impuesto,
            Importe: this.Importe,
        }
    }
}
