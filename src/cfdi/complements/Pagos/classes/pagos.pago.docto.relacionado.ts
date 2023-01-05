import { XMLAttribute, XMLChild, XMLElement } from "../../../../xml-decorator";
import { CFDI_NAME_SPACE_PAGO, MonedaEnum, ObjetoImpEnum } from "../../..";
import { ComprobanteComplementoPagoDoctoRelacionadoElement } from "..";
import { PagosPagoImpuestosDR } from "./pagos.pago.impuestos.dr";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'DoctoRelacionado'
})
export class PagosPagoDoctoRelacionado {
    @XMLAttribute({name: 'IdDocumento', required: true})
    public IdDocumento: string;

    @XMLAttribute({name: 'Serie'})
    public Serie?: string;

    @XMLAttribute({name: 'Folio'})
    public Folio?: string;

    @XMLAttribute({name: 'MonedaDR', required: true})
    public MonedaDR: MonedaEnum;

    @XMLAttribute({name: 'EquivalenciaDR'})
    public EquivalenciaDR?: string;

    @XMLAttribute({name: 'NumParcialidad', required: true})
    public NumParcialidad: string;

    @XMLAttribute({name: 'ImpSaldoAnt', required: true})
    public ImpSaldoAnt: string;

    @XMLAttribute({name: 'ImpPagado', required: true})
    public ImpPagado: string;

    @XMLAttribute({name: 'ImpSaldoInsoluto', required: true})
    public ImpSaldoInsoluto: string;

    @XMLAttribute({name: 'ObjetoImpDR', required: true})
    public ObjetoImpDR: ObjetoImpEnum;

    @XMLChild({
        namespace: CFDI_NAME_SPACE_PAGO,
        name: 'ImpuestosDR',
    })
    public ImpuestosDR?: PagosPagoImpuestosDR;

    constructor(params: ComprobanteComplementoPagoDoctoRelacionadoElement) {
        this.IdDocumento = params.IdDocumento;
        this.Serie = params.Serie;
        this.Folio = params.Folio;
        this.MonedaDR = params.MonedaDR;
        this.EquivalenciaDR = params.EquivalenciaDR;
        this.NumParcialidad = params.NumParcialidad;
        this.ImpSaldoAnt = params.ImpSaldoAnt;
        this.ImpPagado = params.ImpPagado;
        this.ImpSaldoInsoluto = params.ImpSaldoInsoluto;
        this.ObjetoImpDR = params.ObjetoImpDR;
    }
}
