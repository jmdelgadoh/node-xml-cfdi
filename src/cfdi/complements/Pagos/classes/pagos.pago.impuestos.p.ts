import { XMLChild, XMLElement } from "../../../../xml-decorator";
import {
    CFDI_NAME_SPACE,
    CFDI_NAME_SPACE_PAGO,
    PagosPagoImpuestosPRetencionP,
    PagosPagoImpuestosPTrasladoP
} from "../../..";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'ImpuestosP'
})
export class PagosPagoImpuestosP {
    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'RetencionesP'
    })
    public RetencionesP: PagosPagoImpuestosPRetencionP[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'TrasladosP'
    })
    public TrasladosP: PagosPagoImpuestosPTrasladoP[];

    constructor() {
        this.TrasladosP = [];
        this.RetencionesP = [];
    }
}
