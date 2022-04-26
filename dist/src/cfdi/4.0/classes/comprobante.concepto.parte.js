"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConceptoParte = void 0;
const _1 = require("./");
class ComprobanteConceptoParte {
    _InformacionAduanera;
    _ClaveProdServ;
    _NoIdentificacion;
    _Cantidad;
    _Unidad;
    _Descripcion;
    _ValorUnitario;
    _Importe;
    constructor(params) {
        this.AttributesParte = params;
        this.InformacionAduanera = [];
    }
    informacionAduanera(params) {
        this.InformacionAduanera.push(new _1.ComprobanteConceptoParteInformacionAduanera(params));
    }
    set AttributesParte(params) {
        this.ClaveProdServ = params.ClaveProdServ;
        this.NoIdentificacion = params.NoIdentificacion;
        this.Cantidad = params.Cantidad;
        this.Unidad = params.Unidad;
        this.Descripcion = params.Descripcion;
        this.ValorUnitario = params.ValorUnitario;
        this.Importe = params.Importe;
    }
    get AttributesParte() {
        return {
            ClaveProdServ: this.ClaveProdServ,
            NoIdentificacion: this.NoIdentificacion,
            Cantidad: this.Cantidad,
            Unidad: this.Unidad,
            Descripcion: this.Descripcion,
            ValorUnitario: this.ValorUnitario,
            Importe: this.Importe,
        };
    }
    get Importe() {
        return this._Importe;
    }
    set Importe(value) {
        this._Importe = value;
    }
    get ValorUnitario() {
        return this._ValorUnitario;
    }
    set ValorUnitario(value) {
        this._ValorUnitario = value;
    }
    get Descripcion() {
        return this._Descripcion;
    }
    set Descripcion(value) {
        this._Descripcion = value;
    }
    get Unidad() {
        return this._Unidad;
    }
    set Unidad(value) {
        this._Unidad = value;
    }
    get Cantidad() {
        return this._Cantidad;
    }
    set Cantidad(value) {
        this._Cantidad = value;
    }
    get NoIdentificacion() {
        return this._NoIdentificacion;
    }
    set NoIdentificacion(value) {
        this._NoIdentificacion = value;
    }
    get ClaveProdServ() {
        return this._ClaveProdServ;
    }
    set ClaveProdServ(value) {
        this._ClaveProdServ = value;
    }
    get InformacionAduanera() {
        return this._InformacionAduanera;
    }
    set InformacionAduanera(value) {
        this._InformacionAduanera = value;
    }
}
exports.ComprobanteConceptoParte = ComprobanteConceptoParte;
