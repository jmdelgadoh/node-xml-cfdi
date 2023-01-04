import { AttributesComprobanteEmisorElement, CFDI_NAME_SPACE, RegimenFiscalEnum } from '..';
import { sanitizeValues } from '../../utils';
import { XMLAttribute, XMLElement } from "../../xml-decorator";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Emisor',
})
export class ComprobanteEmisor {
    @XMLAttribute({name: 'Rfc'})
    public Rfc: string;

    @XMLAttribute({name: 'Nombre'})
    public Nombre: string;

    @XMLAttribute({name: 'RegimenFiscal'})
    public RegimenFiscal: RegimenFiscalEnum;

    @XMLAttribute({name: 'FacAtrAdquirente'})
    public FacAtrAdquirente?: string;

    constructor(params: AttributesComprobanteEmisorElement) {
        this.Rfc = sanitizeValues(params.Rfc).toUpperCase();
        this.Nombre = sanitizeValues(params.Nombre);
        this.RegimenFiscal = params.RegimenFiscal;
        this.FacAtrAdquirente = params.FacAtrAdquirente;
    }
}
