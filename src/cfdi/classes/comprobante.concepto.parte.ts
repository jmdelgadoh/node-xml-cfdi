import {ComprobanteConceptoParteInformacionAduanera} from './index';
import {ClaveProdServType} from '../catalog/types';
import {AttributesComprobanteConceptoParteElement, ComprobanteConceptoInformacionAduaneraElement} from '../types';
import {sanitizeValues} from '../../utils';
import {Element} from 'xml-js';
import {XmlAttribute} from '../../annotations';

export class ComprobanteConceptoParte {
    public InformacionAduanera: ComprobanteConceptoParteInformacionAduanera[];

    @XmlAttribute()
    public ClaveProdServ: ClaveProdServType;

    @XmlAttribute()
    public NoIdentificacion?: string;

    @XmlAttribute()
    public Cantidad: string;

    @XmlAttribute()
    public Unidad?: string;

    @XmlAttribute()
    public Descripcion: string;

    @XmlAttribute()
    public ValorUnitario?: string;

    @XmlAttribute()
    public Importe?: string;

    constructor(params: AttributesComprobanteConceptoParteElement) {
        this.Attributes = params;
        this.InformacionAduanera = [];
    }

    set Attributes(params: AttributesComprobanteConceptoParteElement) {
        this.ClaveProdServ = params.ClaveProdServ;
        this.NoIdentificacion = params.NoIdentificacion;
        this.Cantidad = params.Cantidad;
        this.Unidad = params.Unidad;
        this.Descripcion = sanitizeValues(params.Descripcion);
        this.ValorUnitario = params.ValorUnitario;
        this.Importe = params.Importe;
    }

    get Attributes(): AttributesComprobanteConceptoParteElement {
        return {
            ClaveProdServ: this.ClaveProdServ,
            NoIdentificacion: this.NoIdentificacion,
            Cantidad: this.Cantidad,
            Unidad: this.Unidad,
            Descripcion: this.Descripcion,
            ValorUnitario: this.ValorUnitario,
            Importe: this.Importe,
        }
    }

    get Elements(): Element[] {
        const elements: Element[] = [];

        for (const informacionAduaneraValue of this.InformacionAduanera) {
            elements?.push({
                type: 'element',
                name: 'cfdi:InformacionAduanera',
                attributes: informacionAduaneraValue.Attributes
            } as ComprobanteConceptoInformacionAduaneraElement)
        }

        return elements;
    }
}
