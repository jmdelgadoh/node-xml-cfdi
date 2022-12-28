import {ImpuestoEnum, TipoFactorEnum} from '../catalog/enums';
import {AttributesComprobanteConceptoImpuestosRetencionesRetencionElement} from '../types';
import { XMLAttribute, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from '../index';

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Retenciones',
})
export class ComprobanteConceptoImpuestosRetencion {
    @XMLAttribute({ name: 'Base' })
    public Base: string;

    @XMLAttribute({ name: 'Impuesto' })
    public Impuesto: ImpuestoEnum;

    @XMLAttribute({ name: 'TipoFactor' })
    public TipoFactor: TipoFactorEnum;

    @XMLAttribute({ name: 'TasaOCuota' })
    public TasaOCuota: string;

    @XMLAttribute({ name: 'Importe' })
    public Importe: string;

    constructor(params: AttributesComprobanteConceptoImpuestosRetencionesRetencionElement) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }
}
