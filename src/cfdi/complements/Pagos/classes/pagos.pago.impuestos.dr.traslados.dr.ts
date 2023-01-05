import { XMLAttribute, XMLElement } from "../../../../xml-decorator";
import {
    CFDI_NAME_SPACE_PAGO,
    ComprobanteComplementoPagosPagoImpuestosDrTrasladosDrElement,
    ImpuestoEnum,
    TipoFactorEnum
} from "../../../index";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'TrasladoDR'
})
export class PagosPagoImpuestosDRTrasladosDR {
    @XMLAttribute({name: 'BaseDR', required: true})
    public BaseDR: string;

    @XMLAttribute({name: 'ImpuestoDR', required: true})
    public ImpuestoDR: ImpuestoEnum;

    @XMLAttribute({name: 'TipoFactorDR', required: true})
    public TipoFactorDR: TipoFactorEnum;

    @XMLAttribute({name: 'TasaOCuotaDR'})
    public TasaOCuotaDR?: string;

    @XMLAttribute({name: 'ImporteDR'})
    public ImporteDR?: string;

    constructor(params: ComprobanteComplementoPagosPagoImpuestosDrTrasladosDrElement) {
        this.BaseDR = params.BaseDR;
        this.ImpuestoDR = params.ImpuestoDR;
        this.TipoFactorDR = params.TipoFactorDR;
        this.TasaOCuotaDR = params.TasaOCuotaDR;
        this.ImporteDR = params.ImporteDR;
    }
}
