import {
    ComprobanteConceptoACuentaTerceros,
    ComprobanteConceptoCuentaPredial,
    ComprobanteConceptoImpuestos,
    ComprobanteConceptoInformacionAduanera,
    ComprobanteConceptoParte,
    XmlTags
} from './';
import { ClaveProdServType, ClaveUnidadType } from '../catalog/types';
import { ObjetoImpEnum } from '../catalog/enums';
import {
    AttributesComprobanteConceptoACuentaTercerosElement,
    AttributesComprobanteConceptoCuentaPredialElement,
    AttributesComprobanteConceptoElement,
    AttributesComprobanteConceptoInformacionAduaneraElement,
} from '../types';

export class ComprobanteConcepto extends XmlTags {
    private _Impuestos: ComprobanteConceptoImpuestos;
    private _ACuentaTerceros?: ComprobanteConceptoACuentaTerceros;
    private _InformacionAduanera: ComprobanteConceptoInformacionAduanera[];
    private _CuentaPredial: ComprobanteConceptoCuentaPredial[];
    // private _ComplementoConcepto: ComprobanteConceptoComplementoConcepto;
    private _Parte: ComprobanteConceptoParte[];
    private _ClaveProdServ: ClaveProdServType;
    private _NoIdentificacion?: string;
    private _Cantidad: string;
    private _ClaveUnidad: ClaveUnidadType;
    private _Unidad?: string;
    private _Descripcion: string;
    private _ValorUnitario: string;
    private _Importe: string;
    private _Descuento?: string;
    private _ObjetoImp: ObjetoImpEnum;

    constructor(params: AttributesComprobanteConceptoElement) {
        super();
        this.AttributesConcepto = params;
        this.Impuestos = new ComprobanteConceptoImpuestos();
        this.InformacionAduanera = [];
        this.CuentaPredial = [];
        this.Parte = [];
    }

    public parte(parte: ComprobanteConceptoParte) {
        this.Parte.push(parte)
    }

    public cuentaPredial(params: AttributesComprobanteConceptoCuentaPredialElement) {
        this.CuentaPredial.push(new ComprobanteConceptoCuentaPredial(params))
    }

    public informacionAduanera(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.InformacionAduanera.push(new ComprobanteConceptoInformacionAduanera(params))
    }

    public aCuentaTerceros(params: AttributesComprobanteConceptoACuentaTercerosElement) {
        this.ACuentaTerceros = new ComprobanteConceptoACuentaTerceros(params);
    }

    get AttributesConcepto(): AttributesComprobanteConceptoElement {
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
        }
    }

    set AttributesConcepto(params: AttributesComprobanteConceptoElement) {
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

    get ObjetoImp(): ObjetoImpEnum {
        return this._ObjetoImp;
    }

    set ObjetoImp(value: ObjetoImpEnum) {
        this._ObjetoImp = value;
    }

    get Descuento(): string | undefined {
        return this._Descuento;
    }

    set Descuento(value: string | undefined) {
        this._Descuento = value;
    }

    get Importe(): string {
        return this._Importe;
    }

    set Importe(value: string) {
        this._Importe = value;
    }

    get ValorUnitario(): string {
        return this._ValorUnitario;
    }

    set ValorUnitario(value: string) {
        this._ValorUnitario = value;
    }

    get Descripcion(): string {
        return this._Descripcion;
    }

    set Descripcion(value: string) {
        this._Descripcion = value;
    }

    get Unidad(): string | undefined {
        return this._Unidad;
    }

    set Unidad(value: string | undefined) {
        this._Unidad = value;
    }

    get ClaveUnidad(): ClaveUnidadType {
        return this._ClaveUnidad;
    }

    set ClaveUnidad(value: ClaveUnidadType) {
        this._ClaveUnidad = value;
    }

    get Cantidad(): string {
        return this._Cantidad;
    }

    set Cantidad(value: string) {
        this._Cantidad = value;
    }

    get NoIdentificacion(): string | undefined {
        return this._NoIdentificacion;
    }

    set NoIdentificacion(value: string | undefined) {
        this._NoIdentificacion = value;
    }

    get ClaveProdServ(): ClaveProdServType {
        return this._ClaveProdServ;
    }

    set ClaveProdServ(value: ClaveProdServType) {
        this._ClaveProdServ = value;
    }

    get Parte(): ComprobanteConceptoParte[] {
        return this._Parte;
    }

    set Parte(value: ComprobanteConceptoParte[]) {
        this._Parte = value;
    }

    get CuentaPredial(): ComprobanteConceptoCuentaPredial[] {
        return this._CuentaPredial;
    }

    set CuentaPredial(value: ComprobanteConceptoCuentaPredial[]) {
        this._CuentaPredial = value;
    }

    get InformacionAduanera(): ComprobanteConceptoInformacionAduanera[] {
        return this._InformacionAduanera;
    }

    set InformacionAduanera(value: ComprobanteConceptoInformacionAduanera[]) {
        this._InformacionAduanera = value;
    }

    get ACuentaTerceros(): ComprobanteConceptoACuentaTerceros | undefined {
        return this._ACuentaTerceros;
    }

    set ACuentaTerceros(value: ComprobanteConceptoACuentaTerceros | undefined) {
        this._ACuentaTerceros = value;
    }

    get Impuestos(): ComprobanteConceptoImpuestos {
        return this._Impuestos;
    }

    set Impuestos(value: ComprobanteConceptoImpuestos) {
        this._Impuestos = value;
    }
}
