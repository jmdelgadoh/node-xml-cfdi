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
    AttributesComprobanteConceptoElement,
    ComprobanteConceptoACuentaTercerosElement,
    ComprobanteConceptoCuentaPredialElement,
    ComprobanteConceptoImpuestosElement,
    ComprobanteConceptoImpuestosRetencionesElement,
    ComprobanteConceptoImpuestosRetencionesRetencionElement,
    ComprobanteConceptoImpuestosTrasladosElement,
    ComprobanteConceptoImpuestosTrasladosTrasladoElement,
    ComprobanteConceptoInformacionAduaneraElement,
    ComprobanteConceptoParteElement,
} from '../types';
import { sanitizeValues } from '../../utils';
import { Element } from 'xml-js';

export class ComprobanteConcepto extends XmlTags {
    private _Impuestos?: ComprobanteConceptoImpuestos;
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
        this.Attributes = params;
        this.Parte = [];
        this.CuentaPredial = [];
        this.InformacionAduanera = [];
        this.Impuestos = new ComprobanteConceptoImpuestos();
    }

    get Attributes(): AttributesComprobanteConceptoElement {
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

    set Attributes(params: AttributesComprobanteConceptoElement) {
        this.ClaveProdServ = params.ClaveProdServ;
        this.NoIdentificacion = params.NoIdentificacion;
        this.Cantidad = params.Cantidad;
        this.ClaveUnidad = params.ClaveUnidad;
        this.Unidad = params.Unidad;
        this.Descripcion = sanitizeValues(params.Descripcion);
        this.ValorUnitario = params.ValorUnitario;
        this.Importe = params.Importe;
        this.Descuento = params.Descuento;
        this.ObjetoImp = params.ObjetoImp;
    }

    get Elements(): Element[] {
        const elements: Element[] = [];

        if (this?.Impuestos) {
            elements.push({
                type: 'element',
                name: 'cfdi:Impuestos',
                elements: this.Impuestos.Elements
            } as ComprobanteConceptoImpuestosElement);
        }

        if (this?.ACuentaTerceros) {
            elements?.push({
                type: 'element',
                name: 'cfdi:ACuentaTerceros',
                attributes: this.ACuentaTerceros.Attributes
            } as ComprobanteConceptoACuentaTercerosElement)
        }

        for (const informacionAduaneraValue of this.InformacionAduanera) {
            elements?.push({
                type: 'element',
                name: 'cfdi:InformacionAduanera',
                attributes: informacionAduaneraValue.Attributes
            } as ComprobanteConceptoInformacionAduaneraElement)
        }

        for (const cuentaPredialValue of this.CuentaPredial) {
            elements?.push({
                type: 'element',
                name: 'cfdi:CuentaPredial',
                attributes: cuentaPredialValue.Attributes
            } as ComprobanteConceptoCuentaPredialElement)
        }

        for (const parteValue of this.Parte) {
            elements.push({
                type: 'element',
                name: 'cfdi:Parte',
                attributes: parteValue.Attributes,
                elements: parteValue.Elements
            } as ComprobanteConceptoParteElement)
        }

        return elements;
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

    get Impuestos(): ComprobanteConceptoImpuestos | undefined {
        return this._Impuestos;
    }

    set Impuestos(value: ComprobanteConceptoImpuestos | undefined) {
        this._Impuestos = value;
    }
}
