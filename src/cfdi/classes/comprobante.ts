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
    ComprobanteConceptoACuentaTercerosElement,
    ComprobanteConceptoCuentaPredialElement,
    ComprobanteConceptoElement,
    ComprobanteConceptoImpuestosElement,
    ComprobanteConceptoImpuestosRetencionesElement,
    ComprobanteConceptoImpuestosRetencionesRetencionElement,
    ComprobanteConceptoImpuestosTrasladosElement,
    ComprobanteConceptoImpuestosTrasladosTrasladoElement,
    ComprobanteConceptoInformacionAduaneraElement,
    ComprobanteConceptoParteElement,
    ComprobanteConceptosElement,
    ComprobanteEmisorElement,
    ComprobanteInformacionGlobalElement,
    ComprobanteReceptorElement,
} from '../types';

export class Comprobante extends XmlTags {
    private _InformacionGlobal?: ComprobanteInformacionGlobal;
    private _CfdiRelacionados: ComprobanteCfdiRelacionados[];
    private _Emisor: ComprobanteEmisor;
    private _Receptor: ComprobanteReceptor;
    private _Conceptos: ComprobanteConcepto[];
    private _Impuestos?: ComprobanteImpuestos;
    // private _Complemento: ComprobanteComplemento;
    // private _Addenda: ComprobanteAddenda;
    private _Version: string;
    private _Serie?: string;
    private _Folio?: string;
    private _Fecha: string;
    private _Sello?: string;
    private _FormaPago?: FormaPagoEnum;
    private _NoCertificado?: string;
    private _Certificado?: string;
    private _CondicionesDePago?: string;
    private _SubTotal: string;
    private _Descuento?: string;
    private _Moneda: MonedaEnum;
    private _TipoCambio?: string;
    private _Total: string;
    private _TipoDeComprobante: TipoComprobanteEnum;
    private _Exportacion: ExportacionEnum;
    private _MetodoPago?: MetodoPagoEnum;
    private _LugarExpedicion: CodigoPostalType;
    private _Confirmacion?: string;

    public constructor(params: AttributesComprobanteElement) {
        super();
        this.Conceptos = [];
        this.CfdiRelacionados = [];
        this.Attributes = params;
        this.addAttributes('xmlns:cfdi', 'http://www.sat.gob.mx/cfd/4');
        this.addAttributes('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
        this.addAttributes('xsi:schemaLocation', 'http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd');
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

    get Confirmacion(): string | undefined {
        return this._Confirmacion;
    }

    set Confirmacion(value: string | undefined) {
        this._Confirmacion = value;
    }

    get LugarExpedicion(): CodigoPostalType {
        return this._LugarExpedicion;
    }

    set LugarExpedicion(value: CodigoPostalType) {
        this._LugarExpedicion = value;
    }

    get MetodoPago(): MetodoPagoEnum | undefined {
        return this._MetodoPago;
    }

    set MetodoPago(value: MetodoPagoEnum | undefined) {
        this._MetodoPago = value;
    }

    get Exportacion(): ExportacionEnum {
        return this._Exportacion;
    }

    set Exportacion(value: ExportacionEnum) {
        this._Exportacion = value;
    }

    get TipoDeComprobante(): TipoComprobanteEnum {
        return this._TipoDeComprobante;
    }

    set TipoDeComprobante(value: TipoComprobanteEnum) {
        this._TipoDeComprobante = value;
    }

    get Total(): string {
        return this._Total;
    }

    set Total(value: string) {
        this._Total = value;
    }

    get TipoCambio(): string | undefined {
        return this._TipoCambio;
    }

    set TipoCambio(value: string | undefined) {
        this._TipoCambio = value;
    }

    get Moneda(): MonedaEnum {
        return this._Moneda;
    }

    set Moneda(value: MonedaEnum) {
        this._Moneda = value;
    }

    get Descuento(): string | undefined {
        return this._Descuento;
    }

    set Descuento(value: string | undefined) {
        this._Descuento = value;
    }

    get SubTotal(): string {
        return this._SubTotal;
    }

    set SubTotal(value: string) {
        this._SubTotal = value;
    }

    get CondicionesDePago(): string | undefined {
        return this._CondicionesDePago;
    }

    set CondicionesDePago(value: string | undefined) {
        this._CondicionesDePago = value;
    }

    get Certificado(): string | undefined {
        return this._Certificado;
    }

    set Certificado(value: string | undefined) {
        this._Certificado = value;
    }

    get NoCertificado(): string | undefined {
        return this._NoCertificado;
    }

    set NoCertificado(value: string | undefined) {
        this._NoCertificado = value;
    }

    get FormaPago(): FormaPagoEnum | undefined {
        return this._FormaPago;
    }

    set FormaPago(value: FormaPagoEnum | undefined) {
        this._FormaPago = value;
    }

    get Sello(): string | undefined {
        return this._Sello;
    }

    set Sello(value: string | undefined) {
        this._Sello = value;
    }

    get Fecha(): string {
        return this._Fecha;
    }

    set Fecha(value: string) {
        this._Fecha = value;
    }

    get Folio(): string | undefined {
        return this._Folio;
    }

    set Folio(value: string | undefined) {
        this._Folio = value;
    }

    get Serie(): string | undefined {
        return this._Serie;
    }

    set Serie(value: string | undefined) {
        this._Serie = value;
    }

    get Version(): string {
        return this._Version;
    }

    set Version(value: string) {
        this._Version = value;
    }

    get Impuestos(): ComprobanteImpuestos | undefined {
        return this._Impuestos;
    }

    set Impuestos(value: ComprobanteImpuestos | undefined) {
        this._Impuestos = value;
    }

    get Conceptos(): ComprobanteConcepto[] {
        return this._Conceptos;
    }

    set Conceptos(value: ComprobanteConcepto[]) {
        this._Conceptos = value;
    }

    get Receptor(): ComprobanteReceptor {
        return this._Receptor;
    }

    set Receptor(value: ComprobanteReceptor) {
        this._Receptor = value;
    }

    get Emisor(): ComprobanteEmisor {
        return this._Emisor;
    }

    set Emisor(value: ComprobanteEmisor) {
        this._Emisor = value;
    }

    get CfdiRelacionados(): ComprobanteCfdiRelacionados[] {
        return this._CfdiRelacionados;
    }

    set CfdiRelacionados(value: ComprobanteCfdiRelacionados[]) {
        this._CfdiRelacionados = value;
    }

    get InformacionGlobal(): ComprobanteInformacionGlobal | undefined {
        return this._InformacionGlobal;
    }

    set InformacionGlobal(value: ComprobanteInformacionGlobal | undefined) {
        this._InformacionGlobal = value;
    }

    private generarCfdiRelacionados(params: AttributesComprobanteCfdiRelacionadosConCfdiRelacionadoElement): ComprobanteCfdiRelacionados {
        const cfdiRelacionados = new ComprobanteCfdiRelacionados(params);
        if (params.CfdiRelacionado?.length) {
            cfdiRelacionados.CfdiRelacionado = this.generarCfdiRelacionado(params.CfdiRelacionado);
        }
        return cfdiRelacionados;
    }

    private generarCfdiRelacionado(params: string[]): ComprobanteCfdiRelacionadosCfdiRelacionado[] {
        return params.map((UUID) => new ComprobanteCfdiRelacionadosCfdiRelacionado({UUID}))
    }
}
