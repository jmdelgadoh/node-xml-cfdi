import { XMLAttribute, XMLElement } from "../../../../xml-decorator";
import { CFDI_NAME_SPACE_PAGO, ImpuestoEnum, TipoFactorEnum } from "../../..";
import {
    ComprobanteComplementoPagosPagoImpuestosDrRetencionesDrElement
} from "..";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'RetencionDR'
})
export class PagosPagoImpuestosDRRetencionesDR {
    @XMLAttribute({name: 'BaseDR', required: true})
    public BaseDR: string;

    @XMLAttribute({name: 'ImpuestoDR', required: true})
    public ImpuestoDR: ImpuestoEnum;

    @XMLAttribute({name: 'TipoFactorDR', required: true})
    public TipoFactorDR: TipoFactorEnum;

    @XMLAttribute({name: 'TasaOCuotaDR', required: true})
    public TasaOCuotaDR: string;

    @XMLAttribute({name: 'ImporteDR', required: true})
    public ImporteDR: string;

    constructor(params: ComprobanteComplementoPagosPagoImpuestosDrRetencionesDrElement) {
        this.BaseDR = params.BaseDR;
        this.ImpuestoDR = params.ImpuestoDR;
        this.TipoFactorDR = params.TipoFactorDR;
        this.TasaOCuotaDR = params.TasaOCuotaDR;
        this.ImporteDR = params.ImporteDR;
    }
}
