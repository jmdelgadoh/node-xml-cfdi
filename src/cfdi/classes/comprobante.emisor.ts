import { RegimenFiscalEnum } from '../catalog/enums';
import { AttributesComprobanteEmisorElement } from '../types';
import { sanitizeValues } from '../../utils';
import { XMLAttribute } from "../../xml-decorator";

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
