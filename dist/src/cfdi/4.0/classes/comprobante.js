"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comprobante = void 0;
const _1 = require("./");
class Comprobante extends _1.XmlTags {
    _InformacionGlobal;
    _CfdiRelacionados;
    _Emisor;
    _Receptor;
    _Conceptos;
    _Impuestos;
    // private _Complemento: ComprobanteComplemento;
    // private _Addenda: ComprobanteAddenda;
    _Version;
    _Serie;
    _Folio;
    _Fecha;
    _Sello;
    _FormaPago;
    _NoCertificado;
    _Certificado;
    _CondicionesDePago;
    _SubTotal;
    _Descuento;
    _Moneda;
    _TipoCambio;
    _Total;
    _TipoDeComprobante;
    _Exportacion;
    _MetodoPago;
    _LugarExpedicion;
    _Confirmacion;
    constructor() {
        super();
        this.Version = '4.0';
        this.addAttributes('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
        this.addAttributes('xmlns:cfdi', 'http://www.sat.gob.mx/cfd/4');
        this.addAttributes('xsi:schemaLocation', 'http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd');
    }
    set AttributesComprobante(params) {
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
    get AttributesComprobante() {
        return {
            ...this.getAttributes(),
            Version: this.Version,
            Serie: this.Serie,
            Folio: this.Folio,
            Fecha: this.Fecha,
            Sello: this.Sello,
            FormaPago: this.FormaPago,
            NoCertificado: this.NoCertificado,
            Certificado: this.Certificado,
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
        };
    }
    get Confirmacion() {
        return this._Confirmacion;
    }
    set Confirmacion(value) {
        this._Confirmacion = value;
    }
    get LugarExpedicion() {
        return this._LugarExpedicion;
    }
    set LugarExpedicion(value) {
        this._LugarExpedicion = value;
    }
    get MetodoPago() {
        return this._MetodoPago;
    }
    set MetodoPago(value) {
        this._MetodoPago = value;
    }
    get Exportacion() {
        return this._Exportacion;
    }
    set Exportacion(value) {
        this._Exportacion = value;
    }
    get TipoDeComprobante() {
        return this._TipoDeComprobante;
    }
    set TipoDeComprobante(value) {
        this._TipoDeComprobante = value;
    }
    get Total() {
        return this._Total;
    }
    set Total(value) {
        this._Total = value;
    }
    get TipoCambio() {
        return this._TipoCambio;
    }
    set TipoCambio(value) {
        this._TipoCambio = value;
    }
    get Moneda() {
        return this._Moneda;
    }
    set Moneda(value) {
        this._Moneda = value;
    }
    get Descuento() {
        return this._Descuento;
    }
    set Descuento(value) {
        this._Descuento = value;
    }
    get SubTotal() {
        return this._SubTotal;
    }
    set SubTotal(value) {
        this._SubTotal = value;
    }
    get CondicionesDePago() {
        return this._CondicionesDePago;
    }
    set CondicionesDePago(value) {
        this._CondicionesDePago = value;
    }
    get Certificado() {
        return this._Certificado;
    }
    set Certificado(value) {
        this._Certificado = value;
    }
    get NoCertificado() {
        return this._NoCertificado;
    }
    set NoCertificado(value) {
        this._NoCertificado = value;
    }
    get FormaPago() {
        return this._FormaPago;
    }
    set FormaPago(value) {
        this._FormaPago = value;
    }
    get Sello() {
        return this._Sello;
    }
    set Sello(value) {
        this._Sello = value;
    }
    get Fecha() {
        return this._Fecha;
    }
    set Fecha(value) {
        this._Fecha = value;
    }
    get Folio() {
        return this._Folio;
    }
    set Folio(value) {
        this._Folio = value;
    }
    get Serie() {
        return this._Serie;
    }
    set Serie(value) {
        this._Serie = value;
    }
    get Version() {
        return this._Version;
    }
    set Version(value) {
        this._Version = value;
    }
    get Impuestos() {
        return this._Impuestos;
    }
    set Impuestos(value) {
        this._Impuestos = value;
    }
    get Conceptos() {
        return this._Conceptos;
    }
    set Conceptos(value) {
        this._Conceptos = value;
    }
    get Receptor() {
        return this._Receptor;
    }
    set Receptor(value) {
        this._Receptor = value;
    }
    get Emisor() {
        return this._Emisor;
    }
    set Emisor(value) {
        this._Emisor = value;
    }
    get CfdiRelacionados() {
        return this._CfdiRelacionados;
    }
    set CfdiRelacionados(value) {
        this._CfdiRelacionados = value;
    }
    get InformacionGlobal() {
        return this._InformacionGlobal;
    }
    set InformacionGlobal(value) {
        this._InformacionGlobal = value;
    }
}
exports.Comprobante = Comprobante;
