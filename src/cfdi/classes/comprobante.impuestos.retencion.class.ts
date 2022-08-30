import { ImpuestoEnum } from '../catalog/enums';
import {
    AttributesComprobanteImpuestosRetencionesRetencionElement
} from '../types';
import { XmlAttribute } from '../../annotations';

export class ComprobanteImpuestosRetencion {
    @XmlAttribute({required: true})
    public Impuesto: ImpuestoEnum;

    @XmlAttribute({required: true})
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
