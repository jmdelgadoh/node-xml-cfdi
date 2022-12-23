import { CodigoPostalType } from '../catalog/types';
import { ExportacionEnum, FormaPagoEnum, MetodoPagoEnum, MonedaEnum, TipoComprobanteEnum } from '../catalog/enums';
import {
    ComprobanteCfdiRelacionados,
    ComprobanteCfdiRelacionadosCfdiRelacionado,
    ComprobanteConcepto,
    ComprobanteEmisor,
    ComprobanteImpuestos,
    ComprobanteInformacionGlobal,
    ComprobanteReceptor
} from './index';
import {
    AttributesComprobanteCfdiRelacionadosConCfdiRelacionadoElement,
    AttributesComprobanteElement,
} from '../types';
import { CFDI_NAME_SPACE } from "..";
import { XMLElement } from "../../xml-decorator/annotations/XMLElement";
import { XMLChild } from "../../xml-decorator/annotations/XMLChild";
import { XMLAttribute } from "../../xml-decorator/annotations/XMLAttribute";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Comprobante',
})
export class Comprobante {
    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'InformacionGlobal'
    })
    public InformacionGlobal?: ComprobanteInformacionGlobal;

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'CfdiRelacionados'
    })
    public CfdiRelacionados: ComprobanteCfdiRelacionados[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Emisor'
    })
    public Emisor: ComprobanteEmisor;

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Receptor'
    })
    public Receptor: ComprobanteReceptor;

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Conceptos'
    })
    public Conceptos: ComprobanteConcepto[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Impuestos'
    })
    public Impuestos?: ComprobanteImpuestos;
    // public Complemento: ComprobanteComplemento;
    // public Addenda: ComprobanteAddenda{

    @XMLAttribute({name: 'Version'})
    public Version: string;

    @XMLAttribute({name: 'Serie'})
    public Serie?: string;

    @XMLAttribute({name: 'Folio'})
    public Folio?: string;

    @XMLAttribute({name: 'Fecha'})
    public Fecha: string;

    @XMLAttribute({name: 'Sello'})
    public Sello?: string;

    @XMLAttribute({name: 'FormaPago'})
    public FormaPago?: FormaPagoEnum;

    @XMLAttribute({name: 'NoCertificado'})
    public NoCertificado?: string;

    @XMLAttribute({name: 'Certificado'})
    public Certificado?: string;

    @XMLAttribute({name: 'CondicionesDePago'})
    public CondicionesDePago?: string;

    @XMLAttribute({name: 'SubTotal'})
    public SubTotal: string;

    @XMLAttribute({name: 'Descuento'})
    public Descuento?: string;

    @XMLAttribute({name: 'Moneda'})
    public Moneda: MonedaEnum;

    @XMLAttribute({name: 'TipoCambio'})
    public TipoCambio?: string;

    @XMLAttribute({name: 'Total'})
    public Total: string;

    @XMLAttribute({name: 'TipoDeComprobante'})
    public TipoDeComprobante: TipoComprobanteEnum;

    @XMLAttribute({name: 'Exportacion'})
    public Exportacion: ExportacionEnum;

    @XMLAttribute({name: 'MetodoPago'})
    public MetodoPago?: MetodoPagoEnum;

    @XMLAttribute({name: 'LugarExpedicion'})
    public LugarExpedicion: CodigoPostalType;

    @XMLAttribute({name: 'Confirmacion'})
    public Confirmacion?: string;

    public constructor(params: AttributesComprobanteElement) {
        this.Conceptos = [];
        this.CfdiRelacionados = [];
        this.Version = params.Version;
        this.Serie = params.Serie;
        this.Folio = params.Folio;
        this.Fecha = params.Fecha;
        this.Sello = params.Sello;
        this.FormaPago = params.FormaPago;
        this.NoCertificado = params.NoCertificado;
        this.Certificado = params.Certificado;
        this.CondicionesDePago = params.CondicionesDePago;
        this.SubTotal = params.SubTotal;
        this.Descuento = params.Descuento;
        this.Moneda = params.Moneda;
        this.TipoCambio = params.TipoCambio;
        this.Total = params.Total;
        this.TipoDeComprobante = params.TipoDeComprobante;
        this.Exportacion = params.Exportacion;
        this.MetodoPago = params.MetodoPago;
        this.LugarExpedicion = params.LugarExpedicion;
        this.Confirmacion = params.Confirmacion;
    }

    private generarCfdiRelacionados(params: AttributesComprobanteCfdiRelacionadosConCfdiRelacionadoElement): ComprobanteCfdiRelacionados {
        if (params.CfdiRelacionado?.length) {
            const cfdiRelacionados = this.generarCfdiRelacionado(params.CfdiRelacionado);
            return new ComprobanteCfdiRelacionados(params, cfdiRelacionados);
        }
        return new ComprobanteCfdiRelacionados(params);
    }

    private generarCfdiRelacionado(params: string[]): ComprobanteCfdiRelacionadosCfdiRelacionado[] {
        return params.map((UUID) => new ComprobanteCfdiRelacionadosCfdiRelacionado({UUID}))
    }
}
