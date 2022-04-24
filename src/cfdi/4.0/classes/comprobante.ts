import { CodigoPostalType } from '../types';
import { ExportacionEnum, FormaPagoEnum, MetodoPagoEnum, MonedaEnum, TipoComprobanteEnum } from '../enums';
import {
    ComprobanteCfdiRelacionados,
    ComprobanteConcepto,
    ComprobanteEmisor, ComprobanteImpuestos,
    ComprobanteInformacionGlobal,
    ComprobanteReceptor
} from './';

export class Comprobante {
    private _InformacionGlobal: ComprobanteInformacionGlobal;
    private _CfdiRelacionados: ComprobanteCfdiRelacionados[];
    private _Emisor: ComprobanteEmisor;
    private _Receptor: ComprobanteReceptor;
    private _Conceptos: ComprobanteConcepto[];
    private _Impuestos: ComprobanteImpuestos;
    // private _Complemento: ComprobanteComplemento;
    // private _Addenda: ComprobanteAddenda;
    private _Version: string;
    private _Serie: string;
    private _Folio: string;
    private _Fecha: Date;
    private _Sello: string;
    private _FormaPago: FormaPagoEnum;
    private _FormaPagoSpecified: boolean;
    private _NoCertificado: string;
    private _Certificado: string;
    private _CondicionesDePago: string;
    private _SubTotal: number;
    private _Descuento: number;
    private _DescuentoSpecified: boolean;
    private _Moneda: MonedaEnum;
    private _TipoCambio: number;
    private _TipoCambioSpecified: boolean;
    private _Total: number;
    private _TipoDeComprobante: TipoComprobanteEnum;
    private _Exportacion: ExportacionEnum;
    private _MetodoPago: MetodoPagoEnum;
    private _MetodoPagoSpecified: boolean;
    private _LugarExpedicion: CodigoPostalType;
    private _Confirmacion: string;

    public Comprobante() {
        this.Version = "4.0";
    }

    get Confirmacion(): string {
        return this._Confirmacion;
    }

    set Confirmacion(value: string) {
        this._Confirmacion = value;
    }

    get LugarExpedicion(): CodigoPostalType {
        return this._LugarExpedicion;
    }

    set LugarExpedicion(value: CodigoPostalType) {
        this._LugarExpedicion = value;
    }

    get MetodoPagoSpecified(): boolean {
        return this._MetodoPagoSpecified;
    }

    set MetodoPagoSpecified(value: boolean) {
        this._MetodoPagoSpecified = value;
    }

    get MetodoPago(): MetodoPagoEnum {
        return this._MetodoPago;
    }

    set MetodoPago(value: MetodoPagoEnum) {
        this._MetodoPago = value;
    }

    get Exportacion(): ExportacionEnum {
        return this._Exportacion;
    }

    set Exportacion(value: ExportacionEnum) {
        this._Exportacion = value;
    }

    get TipoDeComprobante(): TipoComprobanteEnum {
        return this._TipoDeComprobante;
    }

    set TipoDeComprobante(value: TipoComprobanteEnum) {
        this._TipoDeComprobante = value;
    }

    get Total(): number {
        return this._Total;
    }

    set Total(value: number) {
        this._Total = value;
    }

    get TipoCambioSpecified(): boolean {
        return this._TipoCambioSpecified;
    }

    set TipoCambioSpecified(value: boolean) {
        this._TipoCambioSpecified = value;
    }

    get TipoCambio(): number {
        return this._TipoCambio;
    }

    set TipoCambio(value: number) {
        this._TipoCambio = value;
    }

    get Moneda(): MonedaEnum {
        return this._Moneda;
    }

    set Moneda(value: MonedaEnum) {
        this._Moneda = value;
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

    get SubTotal(): number {
        return this._SubTotal;
    }

    set SubTotal(value: number) {
        this._SubTotal = value;
    }

    get CondicionesDePago(): string {
        return this._CondicionesDePago;
    }

    set CondicionesDePago(value: string) {
        this._CondicionesDePago = value;
    }

    get Certificado(): string {
        return this._Certificado;
    }

    set Certificado(value: string) {
        this._Certificado = value;
    }

    get NoCertificado(): string {
        return this._NoCertificado;
    }

    set NoCertificado(value: string) {
        this._NoCertificado = value;
    }

    get FormaPagoSpecified(): boolean {
        return this._FormaPagoSpecified;
    }

    set FormaPagoSpecified(value: boolean) {
        this._FormaPagoSpecified = value;
    }

    get FormaPago(): FormaPagoEnum {
        return this._FormaPago;
    }

    set FormaPago(value: FormaPagoEnum) {
        this._FormaPago = value;
    }

    get Sello(): string {
        return this._Sello;
    }

    set Sello(value: string) {
        this._Sello = value;
    }

    get Fecha(): Date {
        return this._Fecha;
    }

    set Fecha(value: Date) {
        this._Fecha = value;
    }

    get Folio(): string {
        return this._Folio;
    }

    set Folio(value: string) {
        this._Folio = value;
    }

    get Serie(): string {
        return this._Serie;
    }

    set Serie(value: string) {
        this._Serie = value;
    }

    get Version(): string {
        return this._Version;
    }

    set Version(value: string) {
        this._Version = value;
    }

    get Impuestos(): ComprobanteImpuestos {
        return this._Impuestos;
    }

    set Impuestos(value: ComprobanteImpuestos) {
        this._Impuestos = value;
    }

    get Conceptos(): ComprobanteConcepto[] {
        return this._Conceptos;
    }

    set Conceptos(value: ComprobanteConcepto[]) {
        this._Conceptos = value;
    }

    get Receptor(): ComprobanteReceptor {
        return this._Receptor;
    }

    set Receptor(value: ComprobanteReceptor) {
        this._Receptor = value;
    }

    get Emisor(): ComprobanteEmisor {
        return this._Emisor;
    }

    set Emisor(value: ComprobanteEmisor) {
        this._Emisor = value;
    }

    get CfdiRelacionados(): ComprobanteCfdiRelacionados[] {
        return this._CfdiRelacionados;
    }

    set CfdiRelacionados(value: ComprobanteCfdiRelacionados[]) {
        this._CfdiRelacionados = value;
    }

    get InformacionGlobal(): ComprobanteInformacionGlobal {
        return this._InformacionGlobal;
    }

    set InformacionGlobal(value: ComprobanteInformacionGlobal) {
        this._InformacionGlobal = value;
    }
}
