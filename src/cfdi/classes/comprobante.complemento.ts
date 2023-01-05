import { XMLChild, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE, CFDI_NAME_SPACE_PAGO } from "..";
import { Pagos } from "../complements";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Complemento'
})
export class ComprobanteComplemento {
    @XMLChild({
        namespace: CFDI_NAME_SPACE_PAGO,
        name: 'Pagos'
    })
    Pagos?: Pagos
}
