"use strict";
exports.__esModule = true;
exports.Comprobante = void 0;
var Comprobante = /** @class */ (function () {
    function Comprobante() {
        this.Version = "4.0";
    }
    Object.defineProperty(Comprobante.prototype, "Confirmacion", {
        get: function () {
            return this._Confirmacion;
        },
        set: function (value) {
            this._Confirmacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "LugarExpedicion", {
        get: function () {
            return this._LugarExpedicion;
        },
        set: function (value) {
            this._LugarExpedicion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "MetodoPagoSpecified", {
        get: function () {
            return this._MetodoPagoSpecified;
        },
        set: function (value) {
            this._MetodoPagoSpecified = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "MetodoPago", {
        get: function () {
            return this._MetodoPago;
        },
        set: function (value) {
            this._MetodoPago = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Exportacion", {
        get: function () {
            return this._Exportacion;
        },
        set: function (value) {
            this._Exportacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "TipoDeComprobante", {
        get: function () {
            return this._TipoDeComprobante;
        },
        set: function (value) {
            this._TipoDeComprobante = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Total", {
        get: function () {
            return this._Total;
        },
        set: function (value) {
            this._Total = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "TipoCambioSpecified", {
        get: function () {
            return this._TipoCambioSpecified;
        },
        set: function (value) {
            this._TipoCambioSpecified = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "TipoCambio", {
        get: function () {
            return this._TipoCambio;
        },
        set: function (value) {
            this._TipoCambio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Moneda", {
        get: function () {
            return this._Moneda;
        },
        set: function (value) {
            this._Moneda = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "DescuentoSpecified", {
        get: function () {
            return this._DescuentoSpecified;
        },
        set: function (value) {
            this._DescuentoSpecified = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Descuento", {
        get: function () {
            return this._Descuento;
        },
        set: function (value) {
            this._Descuento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "SubTotal", {
        get: function () {
            return this._SubTotal;
        },
        set: function (value) {
            this._SubTotal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "CondicionesDePago", {
        get: function () {
            return this._CondicionesDePago;
        },
        set: function (value) {
            this._CondicionesDePago = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Certificado", {
        get: function () {
            return this._Certificado;
        },
        set: function (value) {
            this._Certificado = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "NoCertificado", {
        get: function () {
            return this._NoCertificado;
        },
        set: function (value) {
            this._NoCertificado = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "FormaPagoSpecified", {
        get: function () {
            return this._FormaPagoSpecified;
        },
        set: function (value) {
            this._FormaPagoSpecified = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "FormaPago", {
        get: function () {
            return this._FormaPago;
        },
        set: function (value) {
            this._FormaPago = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Sello", {
        get: function () {
            return this._Sello;
        },
        set: function (value) {
            this._Sello = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Fecha", {
        get: function () {
            return this._Fecha;
        },
        set: function (value) {
            this._Fecha = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Folio", {
        get: function () {
            return this._Folio;
        },
        set: function (value) {
            this._Folio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Serie", {
        get: function () {
            return this._Serie;
        },
        set: function (value) {
            this._Serie = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Version", {
        get: function () {
            return this._Version;
        },
        set: function (value) {
            this._Version = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Impuestos", {
        get: function () {
            return this._Impuestos;
        },
        set: function (value) {
            this._Impuestos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Conceptos", {
        get: function () {
            return this._Conceptos;
        },
        set: function (value) {
            this._Conceptos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Receptor", {
        get: function () {
            return this._Receptor;
        },
        set: function (value) {
            this._Receptor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "Emisor", {
        get: function () {
            return this._Emisor;
        },
        set: function (value) {
            this._Emisor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "CfdiRelacionados", {
        get: function () {
            return this._CfdiRelacionados;
        },
        set: function (value) {
            this._CfdiRelacionados = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comprobante.prototype, "InformacionGlobal", {
        get: function () {
            return this._InformacionGlobal;
        },
        set: function (value) {
            this._InformacionGlobal = value;
        },
        enumerable: false,
        configurable: true
    });
    return Comprobante;
}());
exports.Comprobante = Comprobante;
