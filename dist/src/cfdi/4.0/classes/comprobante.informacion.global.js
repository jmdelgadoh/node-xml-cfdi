"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteInformacionGlobal = void 0;
class ComprobanteInformacionGlobal {
    _Periodicidad;
    _Meses;
    _Año;
    set AttributesInformacionGlobal(params) {
        this.Periodicidad = params.Periodicidad;
        this.Meses = params.Meses;
        this.Año = params.Año;
    }
    get AttributesInformacionGlobal() {
        return {
            Periodicidad: this.Periodicidad,
            Meses: this.Meses,
            Año: this.Año
        };
    }
    get Año() {
        return this._Año;
    }
    set Año(value) {
        this._Año = value;
    }
    get Meses() {
        return this._Meses;
    }
    set Meses(value) {
        this._Meses = value;
    }
    get Periodicidad() {
        return this._Periodicidad;
    }
    set Periodicidad(value) {
        this._Periodicidad = value;
    }
}
exports.ComprobanteInformacionGlobal = ComprobanteInformacionGlobal;
