"use strict";
exports.__esModule = true;
exports.ComprobanteImpuestosRetencion = void 0;
var ComprobanteImpuestosRetencion = /** @class */ (function () {
    function ComprobanteImpuestosRetencion() {
    }
    Object.defineProperty(ComprobanteImpuestosRetencion.prototype, "Importe", {
        get: function () {
            return this._Importe;
        },
        set: function (value) {
            this._Importe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteImpuestosRetencion.prototype, "Impuesto", {
        get: function () {
            return this._Impuesto;
        },
        set: function (value) {
            this._Impuesto = value;
        },
        enumerable: false,
        configurable: true
    });
    return ComprobanteImpuestosRetencion;
}());
exports.ComprobanteImpuestosRetencion = ComprobanteImpuestosRetencion;
