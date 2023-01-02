import {
    ComprobanteConceptoACuentaTerceros,
    ComprobanteConceptoComplementoConcepto,
    ComprobanteConceptoCuentaPredial,
    ComprobanteConceptoImpuestos,
    ComprobanteConceptoInformacionAduanera,
    ComprobanteConceptoParte
} from './index';
import { ClaveProdServType, ClaveUnidadType } from '../catalog';
import { ObjetoImpEnum } from '../catalog/enums';
import { AttributesComprobanteConceptoElement, } from '../types';
import { sanitizeValues } from '../../utils';
import { XMLAttribute, XMLChild, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from "../index";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Concepto'
})
export class ComprobanteConcepto {
    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Impuestos'
    })
    public Impuestos?: ComprobanteConceptoImpuestos;

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'ACuentaTerceros'
    })
    public ACuentaTerceros?: ComprobanteConceptoACuentaTerceros;

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'InformacionAduanera'
    })
    public InformacionAduanera: ComprobanteConceptoInformacionAduanera[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'CuentaPredial'
    })
    public CuentaPredial: ComprobanteConceptoCuentaPredial[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Parte'
    })
    public Parte: ComprobanteConceptoParte[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'ComplementoConcepto'
    })
    public ComplementoConcepto?: ComprobanteConceptoComplementoConcepto;

    @XMLAttribute({name: 'ClaveProdServ'})
    public ClaveProdServ: ClaveProdServType;

    @XMLAttribute({name: 'NoIdentificacion'})
    public NoIdentificacion?: string;

    @XMLAttribute({name: 'Cantidad'})
    public Cantidad: string;

    @XMLAttribute({name: 'ClaveUnidad'})
    public ClaveUnidad: ClaveUnidadType;

    @XMLAttribute({name: 'Unidad'})
    public Unidad?: string;

    @XMLAttribute({name: 'Descripcion'})
    public Descripcion: string;

    @XMLAttribute({name: 'ValorUnitario'})
    public ValorUnitario: string;

    @XMLAttribute({name: 'Importe'})
    public Importe: string;

    @XMLAttribute({name: 'Descuento'})
    public Descuento?: string;

    @XMLAttribute({name: 'ObjetoImp'})
    public ObjetoImp: ObjetoImpEnum;

    constructor(params: AttributesComprobanteConceptoElement) {
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
        this.Parte = [];
        this.CuentaPredial = [];
        this.InformacionAduanera = [];
        this.Impuestos = new ComprobanteConceptoImpuestos();
    }
}
