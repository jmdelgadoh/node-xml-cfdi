"use strict";
exports.__esModule = true;
exports.ComprobanteCfdiRelacionados = void 0;
var ComprobanteCfdiRelacionados = /** @class */ (function () {
    function ComprobanteCfdiRelacionados() {
    }
    Object.defineProperty(ComprobanteCfdiRelacionados.prototype, "TipoRelacion", {
        get: function () {
            return this._TipoRelacion;
        },
        set: function (value) {
            this._TipoRelacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComprobanteCfdiRelacionados.prototype, "CfdiRelacionado", {
        get: function () {
            return this._CfdiRelacionado;
        },
        set: function (value) {
            this._CfdiRelacionado = value;
        },
        enumerable: false,
        configurable: true
    });
    return ComprobanteCfdiRelacionados;
}());
exports.ComprobanteCfdiRelacionados = ComprobanteCfdiRelacionados;
