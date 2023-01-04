import { AttributesComprobanteConceptoACuentaTercerosElement, CFDI_NAME_SPACE, RegimenFiscalEnum } from '..';
import { sanitizeValues } from '../../utils';
import { XMLAttribute, XMLElement } from "../../xml-decorator";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'ACuentaTerceros',
})
export class ComprobanteConceptoACuentaTerceros {
    @XMLAttribute({name: 'RfcACuentaTerceros'})
    public RfcACuentaTerceros: string;

    @XMLAttribute({name: 'NombreACuentaTerceros'})
    public NombreACuentaTerceros: string;

    @XMLAttribute({name: 'RegimenFiscalACuentaTerceros'})
    public RegimenFiscalACuentaTerceros: RegimenFiscalEnum;

    @XMLAttribute({name: 'DomicilioFiscalACuentaTerceros'})
    public DomicilioFiscalACuentaTerceros: string;

    constructor(params: AttributesComprobanteConceptoACuentaTercerosElement) {
        this.RfcACuentaTerceros = sanitizeValues(params.RfcACuentaTerceros);
        this.NombreACuentaTerceros = sanitizeValues(params.NombreACuentaTerceros);
        this.RegimenFiscalACuentaTerceros = params.RegimenFiscalACuentaTerceros;
        this.DomicilioFiscalACuentaTerceros = params.DomicilioFiscalACuentaTerceros;
    }
}
