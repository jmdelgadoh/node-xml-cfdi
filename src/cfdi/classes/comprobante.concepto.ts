import {
    ComprobanteConceptoACuentaTerceros,
    ComprobanteConceptoComplementoConcepto,
    ComprobanteConceptoCuentaPredial,
    ComprobanteConceptoImpuestos,
    ComprobanteConceptoInformacionAduanera,
    ComprobanteConceptoParte,
    XmlTags
} from './index';
import {ClaveProdServType, ClaveUnidadType} from '../catalog/types';
import {ObjetoImpEnum} from '../catalog/enums';
import {
    AttributesComprobanteConceptoElement,
    ComprobanteConceptoACuentaTercerosElement,
    ComprobanteConceptoCuentaPredialElement,
    ComprobanteConceptoImpuestosElement,
    ComprobanteConceptoInformacionAduaneraElement,
    ComprobanteConceptoParteElement,
} from '../types';
import {sanitizeValues} from '../../utils';
import {Element} from 'xml-js';
import {XmlAttribute} from '../../annotations';

export class ComprobanteConcepto extends XmlTags {
    public Impuestos?: ComprobanteConceptoImpuestos;
    public ACuentaTerceros?: ComprobanteConceptoACuentaTerceros;
    public InformacionAduanera: ComprobanteConceptoInformacionAduanera[];
    public CuentaPredial: ComprobanteConceptoCuentaPredial[];
    // public ComplementoConcepto?: ComprobanteConceptoComplementoConcepto;
    public Parte: ComprobanteConceptoParte[];

    @XmlAttribute()
    public ClaveProdServ: ClaveProdServType;

    @XmlAttribute()
    public NoIdentificacion?: string;

    @XmlAttribute()
    public Cantidad: string;

    @XmlAttribute()
    public ClaveUnidad: ClaveUnidadType;

    @XmlAttribute()
    public Unidad?: string;

    @XmlAttribute()
    public Descripcion: string;

    @XmlAttribute()
    public ValorUnitario: string;

    @XmlAttribute()
    public Importe: string;

    @XmlAttribute()
    public Descuento?: string;

    @XmlAttribute()
    public ObjetoImp: ObjetoImpEnum;

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
}
