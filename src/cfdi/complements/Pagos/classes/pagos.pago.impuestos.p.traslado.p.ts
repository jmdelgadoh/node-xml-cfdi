import { XMLAttribute, XMLElement } from "../../../../xml-decorator";
import {
    CFDI_NAME_SPACE_PAGO,
    ComprobanteComplementoPagosPagoImpuestosPTrasladoPElement,
    ImpuestoEnum,
    TipoFactorEnum
} from "../../..";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'TrasladoP'
})
export class PagosPagoImpuestosPTrasladoP {
    @XMLAttribute({name: 'BaseP', required: true})
    public BaseP: string;

    @XMLAttribute({name: 'ImpuestoP', required: true})
    public ImpuestoP: ImpuestoEnum;

    @XMLAttribute({name: 'TipoFactorP', required: true})
    public TipoFactorP: TipoFactorEnum;

    @XMLAttribute({name: 'TasaOCuotaP'})
    public TasaOCuotaP?: string;

    @XMLAttribute({name: 'ImporteP'})
    public ImporteP?: string;

    constructor(params: ComprobanteComplementoPagosPagoImpuestosPTrasladoPElement) {
        this.BaseP = params.BaseP;
        this.ImpuestoP = params.ImpuestoP;
        this.TipoFactorP = params.TipoFactorP;
        this.TasaOCuotaP = params.TasaOCuotaP;
        this.ImporteP = params.ImporteP;
    }
}
