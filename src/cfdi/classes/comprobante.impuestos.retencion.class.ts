import { ImpuestoEnum } from '../catalog/enums';
import { AttributesComprobanteImpuestosRetencionesRetencionElement } from '../types';
import { XMLAttribute, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from '../index';

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Retenciones',
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
