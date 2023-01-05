import { XMLChild, XMLElement } from "../../../../xml-decorator";
import {
    CFDI_NAME_SPACE,
    CFDI_NAME_SPACE_PAGO,
    PagosPagoImpuestosDRRetencionesDR,
    PagosPagoImpuestosDRTrasladosDR
} from "../../..";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'ImpuestosDR'
})
export class PagosPagoImpuestosDR {
    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'RetencionesDR'
    })
    public RetencionesDR: PagosPagoImpuestosDRRetencionesDR[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'TrasladosDR'
    })
    public TrasladosDR: PagosPagoImpuestosDRTrasladosDR[];

    constructor() {
        this.RetencionesDR = [];
        this.TrasladosDR = [];
    }
}
