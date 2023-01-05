import { XMLAttribute, XMLChild, XMLElement } from "../../../../xml-decorator";
import {
    CFDI_NAME_SPACE_PAGO,
    ComprobanteComplementoPagoElement,
    FormaPagoEnum,
    MonedaEnum,
    PagosPagoDoctoRelacionado,
    PagosPagoImpuestosP,
    TipoCadenaPagoEnum
} from "../../../";

@XMLElement({
    namespace: CFDI_NAME_SPACE_PAGO,
    name: 'Pago'
})
export class PagosPago {
    @XMLAttribute({name: 'FechaPago', required: true})
    public FechaPago: string;

    @XMLAttribute({name: 'FormaDePagoP', required: true})
    public FormaDePagoP: FormaPagoEnum;

    @XMLAttribute({name: 'MonedaP', required: true})
    public MonedaP: MonedaEnum;

    @XMLAttribute({name: 'TipoCambioP'})
    public TipoCambioP?: string;

    @XMLAttribute({name: 'Monto', required: true})
    public Monto: string;

    @XMLAttribute({name: 'NumOperacion'})
    public NumOperacion?: string;

    @XMLAttribute({name: 'RfcEmisorCtaOrd'})
    public RfcEmisorCtaOrd?: string;

    @XMLAttribute({name: 'NomBancoOrdExt'})
    public NomBancoOrdExt?: string;

    @XMLAttribute({name: 'CtaOrdenante'})
    public CtaOrdenante?: string;

    @XMLAttribute({name: 'RfcEmisorCtaBen'})
    public RfcEmisorCtaBen?: string;

    @XMLAttribute({name: 'CtaBeneficiario'})
    public CtaBeneficiario?: string;

    @XMLAttribute({name: 'TipoCadPago'})
    public TipoCadPago?: TipoCadenaPagoEnum;

    @XMLAttribute({name: 'CertPago'})
    public CertPago?: string;

    @XMLAttribute({name: 'CadPago'})
    public CadPago?: string;

    @XMLAttribute({name: 'SelloPago'})
    public SelloPago?: string;

    @XMLChild({
        namespace: CFDI_NAME_SPACE_PAGO,
        noImplicitStructure: true,
        required: true,
        name: 'DoctoRelacionado',
    })
    public DoctoRelacionado: PagosPagoDoctoRelacionado[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE_PAGO,
        name: 'ImpuestosP',
    })
    public ImpuestosP?: PagosPagoImpuestosP;

    constructor(params: ComprobanteComplementoPagoElement) {
        this.FechaPago = params.FechaPago;
        this.FormaDePagoP = params.FormaDePagoP;
        this.MonedaP = params.MonedaP;
        this.TipoCambioP = params.TipoCambioP;
        this.Monto = params.Monto;
        this.NumOperacion = params.NumOperacion;
        this.RfcEmisorCtaOrd = params.RfcEmisorCtaOrd;
        this.NomBancoOrdExt = params.NomBancoOrdExt;
        this.CtaOrdenante = params.CtaOrdenante;
        this.RfcEmisorCtaBen = params.RfcEmisorCtaBen;
        this.CtaBeneficiario = params.CtaBeneficiario;
        this.TipoCadPago = params.TipoCadPago;
        this.CertPago = params.CertPago;
        this.CadPago = params.CadPago;
        this.SelloPago = params.SelloPago;
        this.DoctoRelacionado = [];
    }
}
