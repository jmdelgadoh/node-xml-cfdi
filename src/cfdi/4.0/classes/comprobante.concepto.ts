import {
    ComprobanteConceptoACuentaTerceros,
    ComprobanteConceptoCuentaPredial,
    ComprobanteConceptoImpuestos,
    ComprobanteConceptoInformacionAduanera,
    ComprobanteConceptoParte
} from './';
import { ClaveProdServType, ClaveUnidadType } from '../types';
import { ObjetoImpEnum } from '../enums';

export class ComprobanteConcepto {
    private _Impuestos: ComprobanteConceptoImpuestos;
    private _ACuentaTerceros: ComprobanteConceptoACuentaTerceros;
    private _InformacionAduanera: ComprobanteConceptoInformacionAduanera[];
    private _CuentaPredial: ComprobanteConceptoCuentaPredial[];
    // private _ComplementoConcepto: ComprobanteConceptoComplementoConcepto;
    private _Parte: ComprobanteConceptoParte[];
    private _ClaveProdServ: ClaveProdServType;
    private _NoIdentificacion: string;
    private _Cantidad: number;
    private _ClaveUnidad: ClaveUnidadType;
    private _Unidad: string;
    private _Descripcion: string;
    private _ValorUnitario: number;
    private _Importe: number;
    private _Descuento: number;
    private _DescuentoSpecified: boolean;
    private _ObjetoImp: ObjetoImpEnum;

    get ObjetoImp(): ObjetoImpEnum {
        return this._ObjetoImp;
    }

    set ObjetoImp(value: ObjetoImpEnum) {
        this._ObjetoImp = value;
    }

    get DescuentoSpecified(): boolean {
        return this._DescuentoSpecified;
    }

    set DescuentoSpecified(value: boolean) {
        this._DescuentoSpecified = value;
    }

    get Descuento(): number {
        return this._Descuento;
    }

    set Descuento(value: number) {
        this._Descuento = value;
    }

    get Importe(): number {
        return this._Importe;
    }

    set Importe(value: number) {
        this._Importe = value;
    }

    get ValorUnitario(): number {
        return this._ValorUnitario;
    }

    set ValorUnitario(value: number) {
        this._ValorUnitario = value;
    }

    get Descripcion(): string {
        return this._Descripcion;
    }

    set Descripcion(value: string) {
        this._Descripcion = value;
    }

    get Unidad(): string {
        return this._Unidad;
    }

    set Unidad(value: string) {
        this._Unidad = value;
    }

    get ClaveUnidad(): ClaveUnidadType {
        return this._ClaveUnidad;
    }

    set ClaveUnidad(value: ClaveUnidadType) {
        this._ClaveUnidad = value;
    }

    get Cantidad(): number {
        return this._Cantidad;
    }

    set Cantidad(value: number) {
        this._Cantidad = value;
    }

    get NoIdentificacion(): string {
        return this._NoIdentificacion;
    }

    set NoIdentificacion(value: string) {
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

    get ACuentaTerceros(): ComprobanteConceptoACuentaTerceros {
        return this._ACuentaTerceros;
    }

    set ACuentaTerceros(value: ComprobanteConceptoACuentaTerceros) {
        this._ACuentaTerceros = value;
    }

    get Impuestos(): ComprobanteConceptoImpuestos {
        return this._Impuestos;
    }

    set Impuestos(value: ComprobanteConceptoImpuestos) {
        this._Impuestos = value;
    }
}
