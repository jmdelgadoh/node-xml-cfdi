import { XMLChild, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE, CFDI_NAME_SPACE_IEDU } from "..";
import { Iedu } from "../complements";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'ComplementoConcepto'
})
export class ComprobanteConceptoComplementoConcepto {
    @XMLChild({
        namespace: CFDI_NAME_SPACE_IEDU,
        name: 'instEducativas',
    })
    iedu?: Iedu
}
