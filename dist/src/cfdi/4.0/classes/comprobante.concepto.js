"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobanteConcepto = void 0;
const _1 = require("./");
class ComprobanteConcepto extends _1.XmlTags {
    _Impuestos;
    _ACuentaTerceros;
    _InformacionAduanera;
    _CuentaPredial;
    // private _ComplementoConcepto: ComprobanteConceptoComplementoConcepto;
    _Parte;
    _ClaveProdServ;
    _NoIdentificacion;
    _Cantidad;
    _ClaveUnidad;
    _Unidad;
    _Descripcion;
    _ValorUnitario;
    _Importe;
    _Descuento;
    _ObjetoImp;
    constructor(params) {
        super();
        this.AttributesConcepto = params;
        this.Impuestos = new _1.ComprobanteConceptoImpuestos();
        this.InformacionAduanera = [];
        this.CuentaPredial = [];
        this.Parte = [];
    }
    parte(params) {
        return new _1.ComprobanteConceptoParte(params);
    }
    agregarParte(parte) {
        this.Parte.push(parte);
    }
    cuentaPredial(params) {
        this.CuentaPredial.push(new _1.ComprobanteConceptoCuentaPredial(params));
    }
    informacionAduanera(params) {
        this.InformacionAduanera.push(new _1.ComprobanteConceptoInformacionAduanera(params));
    }
    aCuentaTerceros(params) {
        this.ACuentaTerceros = new _1.ComprobanteConceptoACuentaTerceros(params);
    }
    get AttributesConcepto() {
        return {
            ...this.getAttributes(),
            ClaveProdServ: this.ClaveProdServ,
            NoIdentificacion: this.NoIdentificacion,
            Cantidad: this.Cantidad,
            ClaveUnidad: this.ClaveUnidad,
            Unidad: this.Unidad,
            Descripcion: this.Descripcion,
            ValorUnitario: this.ValorUnitario,
            Importe: this.Importe,
            Descuento: this.Descuento,
            ObjetoImp: this.ObjetoImp,
        };
    }
    set AttributesConcepto(params) {
        this.ClaveProdServ = params.ClaveProdServ;
        this.NoIdentificacion = params.NoIdentificacion;
        this.Cantidad = params.Cantidad;
        this.ClaveUnidad = params.ClaveUnidad;
        this.Unidad = params.Unidad;
        this.Descripcion = params.Descripcion;
        this.ValorUnitario = params.ValorUnitario;
        this.Importe = params.Importe;
        this.Descuento = params.Descuento;
        this.ObjetoImp = params.ObjetoImp;
    }
    get ObjetoImp() {
        return this._ObjetoImp;
    }
    set ObjetoImp(value) {
        this._ObjetoImp = value;
    }
    get Descuento() {
        return this._Descuento;
    }
    set Descuento(value) {
        this._Descuento = value;
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
    get ClaveUnidad() {
        return this._ClaveUnidad;
    }
    set ClaveUnidad(value) {
        this._ClaveUnidad = value;
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
    get Parte() {
        return this._Parte;
    }
    set Parte(value) {
        this._Parte = value;
    }
    get CuentaPredial() {
        return this._CuentaPredial;
    }
    set CuentaPredial(value) {
        this._CuentaPredial = value;
    }
    get InformacionAduanera() {
        return this._InformacionAduanera;
    }
    set InformacionAduanera(value) {
        this._InformacionAduanera = value;
    }
    get ACuentaTerceros() {
        return this._ACuentaTerceros;
    }
    set ACuentaTerceros(value) {
        this._ACuentaTerceros = value;
    }
    get Impuestos() {
        return this._Impuestos;
    }
    set Impuestos(value) {
        this._Impuestos = value;
    }
}
exports.ComprobanteConcepto = ComprobanteConcepto;
