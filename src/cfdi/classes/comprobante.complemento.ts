import { XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from "..";
import { Pagos } from "../complements";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Complemento'
})
export class ComprobanteComplemento {
    pagos?: Pagos
}
