import { RegimenFiscalEnum } from '../catalog/enums';
import { AttributesComprobanteConceptoACuentaTercerosElement } from '../types';
import { sanitizeValues } from '../../utils';
import { XMLAttribute } from "../../xml-decorator";

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
