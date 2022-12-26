import { ImpuestoEnum } from '../catalog/enums';
import { AttributesComprobanteImpuestosRetencionesRetencionElement } from '../types';
import { XMLAttribute } from "../../xml-decorator";

export class ComprobanteImpuestosRetencion {
    @XMLAttribute({name: 'Impuesto'})
    public Impuesto: ImpuestoEnum;

    @XMLAttribute({name: 'Importe'})
    public Importe: string;

    constructor(params: AttributesComprobanteImpuestosRetencionesRetencionElement) {
        this.Importe = params.Importe;
        this.Impuesto = params.Impuesto;
    }
}
