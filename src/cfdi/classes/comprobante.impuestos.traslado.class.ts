import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';
import { AttributesComprobanteImpuestosTrasladosTrasladoElement } from '../types';
import { XMLAttribute } from "../../xml-decorator/annotations/XMLAttribute";

export class ComprobanteImpuestosTraslado {
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

    constructor(params: AttributesComprobanteImpuestosTrasladosTrasladoElement) {
        this.Base = params.Base;
        this.Impuesto = params.Impuesto;
        this.TipoFactor = params.TipoFactor;
        this.TasaOCuota = params.TasaOCuota;
        this.Importe = params.Importe;
    }
}
