"use strict";
exports.__esModule = true;
exports.ComprobanteImpuestos = void 0;
var ComprobanteImpuestos = /** @class */ (function () {
    function ComprobanteImpuestos() {
    }
    Object.defineProperty(ComprobanteImpuestos.prototype, "TotalImpuestosTrasladadosSpecified", {
        get: function () {
            return this._TotalImpuestosTrasladadosSpecified;
        },
        set: function (value) {
            this._TotalImpuestosTrasladadosSpecified = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteImpuestos.prototype, "TotalImpuestosTrasladados", {
        get: function () {
            return this._TotalImpuestosTrasladados;
        },
        set: function (value) {
            this._TotalImpuestosTrasladados = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteImpuestos.prototype, "TotalImpuestosRetenidosSpecified", {
        get: function () {
            return this._TotalImpuestosRetenidosSpecified;
        },
        set: function (value) {
            this._TotalImpuestosRetenidosSpecified = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteImpuestos.prototype, "TotalImpuestosRetenidos", {
        get: function () {
            return this._TotalImpuestosRetenidos;
        },
        set: function (value) {
            this._TotalImpuestosRetenidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteImpuestos.prototype, "Traslados", {
        get: function () {
            return this._Traslados;
        },
        set: function (value) {
            this._Traslados = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteImpuestos.prototype, "Retenciones", {
        get: function () {
            return this._Retenciones;
        },
        set: function (value) {
            this._Retenciones = value;
        },
        enumerable: false,
        configurable: true
    });
    return ComprobanteImpuestos;
}());
exports.ComprobanteImpuestos = ComprobanteImpuestos;
