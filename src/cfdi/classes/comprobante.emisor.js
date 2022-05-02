"use strict";
exports.__esModule = true;
exports.ComprobanteEmisor = void 0;
var ComprobanteEmisor = /** @class */ (function () {
    function ComprobanteEmisor() {
    }
    Object.defineProperty(ComprobanteEmisor.prototype, "FacAtrAdquirente", {
        get: function () {
            return this._FacAtrAdquirente;
        },
        set: function (value) {
            this._FacAtrAdquirente = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteEmisor.prototype, "RegimenFiscal", {
        get: function () {
            return this._RegimenFiscal;
        },
        set: function (value) {
            this._RegimenFiscal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteEmisor.prototype, "Nombre", {
        get: function () {
            return this._Nombre;
        },
        set: function (value) {
            this._Nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteEmisor.prototype, "Rfc", {
        get: function () {
            return this._Rfc;
        },
        set: function (value) {
            this._Rfc = value;
        },
        enumerable: false,
        configurable: true
    });
    return ComprobanteEmisor;
}());
exports.ComprobanteEmisor = ComprobanteEmisor;
