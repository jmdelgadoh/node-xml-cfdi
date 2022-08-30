import { Element } from 'xml-js';
import { CodigoPostalType } from '../catalog/types';
import { ExportacionEnum, FormaPagoEnum, MetodoPagoEnum, MonedaEnum, TipoComprobanteEnum } from '../catalog/enums';
import {
    ComprobanteCfdiRelacionados,
    ComprobanteCfdiRelacionadosCfdiRelacionado,
    ComprobanteConcepto,
    ComprobanteEmisor,
    ComprobanteImpuestos,
    ComprobanteInformacionGlobal,
    ComprobanteReceptor,
    XmlTags
} from './index';
import {
    AttributesComprobanteCfdiRelacionadosConCfdiRelacionadoElement,
    AttributesComprobanteElement,
    ComprobanteCfdiRelacionadosElement,
    ComprobanteConceptoElement,
    ComprobanteConceptoImpuestosElement,
    ComprobanteConceptosElement,
    ComprobanteEmisorElement,
    ComprobanteInformacionGlobalElement,
    ComprobanteReceptorElement,
} from '../types';
import { XmlAttribute } from '../../annotations';

export class Comprobante extends XmlTags {
    public InformacionGlobal?: ComprobanteInformacionGlobal;
    public CfdiRelacionados: ComprobanteCfdiRelacionados[];
    public Emisor: ComprobanteEmisor;
    public Receptor: ComprobanteReceptor;
    public Conceptos: ComprobanteConcepto[];
    public Impuestos?: ComprobanteImpuestos;
    // public Complemento: ComprobanteComplemento;
    // public Addenda: ComprobanteAddenda{

    @XmlAttribute({required: true})
    public Version: string;

    @XmlAttribute({required: false})
    public Serie?: string;

    @XmlAttribute({required: false})
    public Folio?: string;

    @XmlAttribute({required: true})
    public Fecha: string;

    @XmlAttribute({required: false})
    public Sello?: string;

    @XmlAttribute({required: false})
    public FormaPago?: FormaPagoEnum;

    @XmlAttribute({required: false})
    public NoCertificado?: string;

    @XmlAttribute({required: false})
    public Certificado?: string;

    @XmlAttribute({required: false})
    public CondicionesDePago?: string;

    @XmlAttribute({required: true})
    public SubTotal: string;

    @XmlAttribute({required: false})
    public Descuento?: string;

    @XmlAttribute({required: true})
    public Moneda: MonedaEnum;

    @XmlAttribute({required: false})
    public TipoCambio?: string;

    @XmlAttribute({required: true})
    public Total: string;

    @XmlAttribute({required: true})
    public TipoDeComprobante: TipoComprobanteEnum;

    @XmlAttribute({required: true})
    public Exportacion: ExportacionEnum;

    @XmlAttribute({required: false})
    public MetodoPago?: MetodoPagoEnum;

    @XmlAttribute({required: true})
    public LugarExpedicion: CodigoPostalType;

    @XmlAttribute({required: false})
    public Confirmacion?: string;

    public constructor(params: AttributesComprobanteElement) {
        super();
        this.Conceptos = [];
        this.CfdiRelacionados = [];
        this.Attributes = params;
        this.addAttributes('xmlns:cfdi', 'http://www.sat.gob.mx/cfd/4');
        this.addAttributes('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
        this.addAttributes('xsi:schemaLocation', 'http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/public internet/cfd/4/cfdv40.xsd');
    }

    get Elements(): Element[] {
        const elements: Element[] = [];

        if (this.InformacionGlobal) {
            elements?.push({
                type: 'element',
                name: 'cfdi:InformacionGlobal',
                attributes: this.InformacionGlobal.Attributes
            } as ComprobanteInformacionGlobalElement)
        }

        for (const cfdiRelacionadosValue of this.CfdiRelacionados) {
            elements?.push({
                type: 'element',
                name: 'cfdi:CfdiRelacionados',
                attributes: cfdiRelacionadosValue.Attributes,
                elements: cfdiRelacionadosValue.Elements
            } as ComprobanteCfdiRelacionadosElement)
        }

        if (this.Emisor) {
            elements.push({
                type: 'element',
                name: 'cfdi:Emisor',
                attributes: this.Emisor.Attributes
            } as ComprobanteEmisorElement)
        }

        if (this.Receptor) {
            elements.push({
                type: 'element',
                name: 'cfdi:Receptor',
                attributes: this.Receptor.Attributes
            } as ComprobanteReceptorElement)
        }

        if (this.Conceptos.length) {
            const conceptElements: ComprobanteConceptoElement[] = [];

            for (const conceptoValue of this.Conceptos) {
                conceptElements.push({
                    type: 'element',
                    name: 'cfdi:Concepto',
                    attributes: conceptoValue.Attributes,
                    elements: conceptoValue.Elements
                } as ComprobanteConceptoElement)
            }

            elements.push({
                type: 'element',
                name: 'cfdi:Conceptos',
                elements: conceptElements
            } as ComprobanteConceptosElement)
        }

        if (this.Impuestos) {
            elements.push({
                type: 'element',
                name: 'cfdi:Impuestos',
                attributes: this.Impuestos.Attributes,
                elements: this.Impuestos.Elements
            } as ComprobanteConceptoImpuestosElement);
        }

        return elements;
    }

    get Attributes(): AttributesComprobanteElement {
        return {
            ...this.getAttributes(),
            Version: this.Version,
            Serie: this.Serie,
            Folio: this.Folio,
            Fecha: this.Fecha,
            FormaPago: this.FormaPago,
            NoCertificado: this.NoCertificado,
            CondicionesDePago: this.CondicionesDePago,
            SubTotal: this.SubTotal,
            Descuento: this.Descuento,
            Moneda: this.Moneda,
            TipoCambio: this.TipoCambio,
            Total: this.Total,
            TipoDeComprobante: this.TipoDeComprobante,
            Exportacion: this.Exportacion,
            MetodoPago: this.MetodoPago,
            LugarExpedicion: this.LugarExpedicion,
            Confirmacion: this.Confirmacion,
            Sello: this.Sello,
            Certificado: this.Certificado,
        }
    }

    set Attributes(params: AttributesComprobanteElement) {
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
