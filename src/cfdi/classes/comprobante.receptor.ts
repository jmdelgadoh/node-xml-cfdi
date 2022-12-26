import {PaisEnum, RegimenFiscalEnum, UsoCfdiEnum} from '../catalog/enums';
import {CodigoPostalType} from '../catalog/types';
import {AttributesComprobanteReceptorElement} from '../types';
import {sanitizeValues} from '../../utils';
import { XMLAttribute } from "../../xml-decorator";

export class ComprobanteReceptor {
    @XMLAttribute({ name: 'Rfc' })
    public Rfc: string;

    @XMLAttribute({ name: 'Nombre' })
    public Nombre: string;

    @XMLAttribute({ name: 'DomicilioFiscalReceptor' })
    public DomicilioFiscalReceptor: CodigoPostalType;

    @XMLAttribute({ name: 'ResidenciaFiscal' })
    public ResidenciaFiscal?: PaisEnum;

    @XMLAttribute({ name: 'NumRegIdTrib' })
    public NumRegIdTrib?: string;

    @XMLAttribute({ name: 'RegimenFiscalReceptor' })
    public RegimenFiscalReceptor: RegimenFiscalEnum;

    @XMLAttribute({ name: 'UsoCFDI' })
    public UsoCFDI: UsoCfdiEnum;

    constructor(params: AttributesComprobanteReceptorElement) {
        this.Rfc = sanitizeValues(params.Rfc).toUpperCase();
        this.Nombre = sanitizeValues(params.Nombre);
        this.DomicilioFiscalReceptor = params.DomicilioFiscalReceptor;
        this.ResidenciaFiscal = params.ResidenciaFiscal;
        this.NumRegIdTrib = params.NumRegIdTrib;
        this.RegimenFiscalReceptor = params.RegimenFiscalReceptor;
        this.UsoCFDI = params.UsoCFDI;
    }
}
