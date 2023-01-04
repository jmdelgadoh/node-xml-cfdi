import { XMLChild, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE, CFDI_NAME_SPACE_IEDU } from "../index";
import { ConceptoComplementoIEDU } from "../complements/ConceptoComplementoIEDU";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'ComplementoConcepto'
})
export class ComprobanteConceptoComplementoConcepto {
    @XMLChild({
        namespace: CFDI_NAME_SPACE_IEDU,
        name: 'instEducativas',
    })
    iedu?: ConceptoComplementoIEDU
}
