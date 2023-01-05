import { XMLAttribute, XMLElement } from "../../../../xml-decorator";
import {
    CFDI_NAME_SPACE_PAGO,
    ComprobanteComplementoPagosPagoImpuestosPRetencionPElement,
    ImpuestoEnum
} from "../../..";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'RetencionP'
})
export class PagosPagoImpuestosPRetencionP {
    @XMLAttribute({name: 'ImpuestoP', required: true})
    public ImpuestoP: ImpuestoEnum;

    @XMLAttribute({name: 'ImporteP', required: true})
    public ImporteP: string;

    constructor(params: ComprobanteComplementoPagosPagoImpuestosPRetencionPElement) {
        this.ImpuestoP = params.ImpuestoP;
        this.ImporteP = params.ImporteP;
    }
}
