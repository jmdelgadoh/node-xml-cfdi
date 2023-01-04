import { XMLAttribute, XMLElement } from "../../../../xml-decorator";
import { CFDI_NAME_SPACE_PAGO, ComprobanteComplementoPagosTotalesElement } from "../../..";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'Totales',
})
export class PagosTotales {
    @XMLAttribute({name: 'TotalRetencionesIVA'})
    public TotalRetencionesIVA?: string;

    @XMLAttribute({name: 'TotalRetencionesISR'})
    public TotalRetencionesISR?: string;

    @XMLAttribute({name: 'TotalRetencionesIEPS'})
    public TotalRetencionesIEPS?: string;

    @XMLAttribute({name: 'TotalTrasladosBaseIVA16'})
    public TotalTrasladosBaseIVA16?: string;

    @XMLAttribute({name: 'TotalTrasladosImpuestoIVA16'})
    public TotalTrasladosImpuestoIVA16?: string;

    @XMLAttribute({name: 'TotalTrasladosBaseIVA8'})
    public TotalTrasladosBaseIVA8?: string;

    @XMLAttribute({name: 'TotalTrasladosImpuestoIVA8'})
    public TotalTrasladosImpuestoIVA8?: string;

    @XMLAttribute({name: 'TotalTrasladosBaseIVA0'})
    public TotalTrasladosBaseIVA0?: string;

    @XMLAttribute({name: 'TotalTrasladosImpuestoIVA0'})
    public TotalTrasladosImpuestoIVA0?: string;

    @XMLAttribute({name: 'TotalTrasladosBaseIVAExento'})
    public TotalTrasladosBaseIVAExento?: string;

    @XMLAttribute({name: 'TotalTrasladosBaseIVAExento', required: true})
    public MontoTotalPagos: string;

    constructor(params: ComprobanteComplementoPagosTotalesElement) {
        this.TotalRetencionesIVA = params.TotalRetencionesIVA;
        this.TotalRetencionesISR = params.TotalRetencionesISR;
        this.TotalRetencionesIEPS = params.TotalRetencionesIEPS;
        this.TotalTrasladosBaseIVA16 = params.TotalTrasladosBaseIVA16;
        this.TotalTrasladosImpuestoIVA16 = params.TotalTrasladosImpuestoIVA16;
        this.TotalTrasladosBaseIVA8 = params.TotalTrasladosBaseIVA8;
        this.TotalTrasladosImpuestoIVA8 = params.TotalTrasladosImpuestoIVA8;
        this.TotalTrasladosBaseIVA0 = params.TotalTrasladosBaseIVA0;
        this.TotalTrasladosImpuestoIVA0 = params.TotalTrasladosImpuestoIVA0;
        this.TotalTrasladosBaseIVAExento = params.TotalTrasladosBaseIVAExento;
        this.MontoTotalPagos = params.MontoTotalPagos;
    }

}
