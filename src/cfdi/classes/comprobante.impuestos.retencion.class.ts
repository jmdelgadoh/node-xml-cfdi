import { AttributesComprobanteImpuestosRetencionesRetencionElement, CFDI_NAME_SPACE, ImpuestoEnum } from '..';
import { XMLAttribute, XMLElement } from "../../xml-decorator";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Retencion',
})
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
