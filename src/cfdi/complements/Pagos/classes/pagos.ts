import { XMLAttribute, XMLChild, XMLElement } from "../../../../xml-decorator";
import { CFDI_NAME_SPACE_PAGO, ComprobanteComplementoPagosTotalesElement } from "../../../";
import { PagosTotales, PagosPago } from ".";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'Pagos',
    xmlns: [
        {namespace: CFDI_NAME_SPACE_PAGO, value: 'http://www.sat.gob.mx/Pagos20'}
    ],
    schemaLocation: ['http://www.sat.gob.mx/Pagos20', 'http://www.sat.gob.mx/sitio_internet/cfd/Pagos/Pagos20.xsd']
})
export class Pagos {
    @XMLAttribute({name: 'Version', required: true})
    public Version: string;

    @XMLChild({
        namespace: CFDI_NAME_SPACE_PAGO,
        name: 'Totales',
        required: true
    })
    public Totales: PagosTotales;

    @XMLChild({
        namespace: CFDI_NAME_SPACE_PAGO,
        noImplicitStructure: true,
        required: true,
        name: 'Pago',
    })
    public Pago: PagosPago[];


    constructor(params: ComprobanteComplementoPagosTotalesElement) {
        this.Version = '2.0';
        this.Pago = [];
        this.Totales = new PagosTotales(params)
    }
}
