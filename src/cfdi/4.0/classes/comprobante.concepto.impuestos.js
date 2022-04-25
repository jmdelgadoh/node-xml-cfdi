"use strict";
exports.__esModule = true;
exports.ComprobanteConceptoImpuestos = void 0;
var ComprobanteConceptoImpuestos = /** @class */ (function () {
    function ComprobanteConceptoImpuestos() {
    }
    Object.defineProperty(ComprobanteConceptoImpuestos.prototype, "Retenciones", {
        get: function () {
            return this._Retenciones;
        },
        set: function (value) {
            this._Retenciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteConceptoImpuestos.prototype, "Traslados", {
        get: function () {
            return this._Traslados;
        },
        set: function (value) {
            this._Traslados = value;
        },
        enumerable: false,
        configurable: true
    });
    return ComprobanteConceptoImpuestos;
}());
exports.ComprobanteConceptoImpuestos = ComprobanteConceptoImpuestos;
