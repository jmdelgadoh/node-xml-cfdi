import {
    AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement,
    CFDI_NAME_SPACE,
    ImpuestoEnum,
    TipoFactorEnum
} from '..';
import { XMLAttribute, XMLElement } from "../../xml-decorator";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Traslado',
})
export class ComprobanteConceptoImpuestosTraslado {
    @XMLAttribute({name: 'Base'})
    public Base: string;

    @XMLAttribute({name: 'Impuesto'})
    public Impuesto: ImpuestoEnum;

    @XMLAttribute({name: 'TipoFactor'})
    public TipoFactor: TipoFactorEnum;

    @XMLAttribute({name: 'TasaOCuota'})
    public TasaOCuota?: string;

    @XMLAttribute({name: 'Importe'})
    public Importe?: string;

    constructor(params: AttributesComprobanteConceptoImpuestosTrasladosTrasladoElement) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }
}
