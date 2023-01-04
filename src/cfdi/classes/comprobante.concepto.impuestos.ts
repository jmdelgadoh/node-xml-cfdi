import { ComprobanteConceptoImpuestosRetencion, ComprobanteConceptoImpuestosTraslado } from ".";
import { XMLChild, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from "..";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Impuestos',
})
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
