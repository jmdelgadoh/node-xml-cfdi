import { ComprobanteConceptoImpuestosRetencion, ComprobanteConceptoImpuestosTraslado } from "./index";
import { XMLChild } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from "../index";

export class ComprobanteConceptoImpuestos {
    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Traslados'
    })
    public Traslados: ComprobanteConceptoImpuestosTraslado[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Retenciones'
    })
    public Retenciones: ComprobanteConceptoImpuestosRetencion[];

    constructor() {
        this.Retenciones = [];
        this.Traslados = [];
    }
}
