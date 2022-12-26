import { ComprobanteConceptoParteInformacionAduanera } from './index';
import { ClaveProdServType } from '../catalog/types';
import { AttributesComprobanteConceptoParteElement } from '../types';
import { sanitizeValues } from '../../utils';
import { XMLAttribute, XMLChild } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from "../index";

export class ComprobanteConceptoParte {
    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'InformacionAduanera'
    })
    public InformacionAduanera: ComprobanteConceptoParteInformacionAduanera[];

    @XMLAttribute({name: 'ClaveProdServ'})
    public ClaveProdServ: ClaveProdServType;

    @XMLAttribute({name: 'NoIdentificacion'})
    public NoIdentificacion?: string;

    @XMLAttribute({name: 'Cantidad'})
    public Cantidad: string;

    @XMLAttribute({name: 'Unidad'})
    public Unidad?: string;

    @XMLAttribute({name: 'Descripcion'})
    public Descripcion: string;

    @XMLAttribute({name: 'ValorUnitario'})
    public ValorUnitario?: string;

    @XMLAttribute({name: 'Importe'})
    public Importe?: string;

    constructor(params: AttributesComprobanteConceptoParteElement) {
        this.ClaveProdServ = params.ClaveProdServ;
        this.NoIdentificacion = params.NoIdentificacion;
        this.Cantidad = params.Cantidad;
        this.Unidad = params.Unidad;
        this.Descripcion = sanitizeValues(params.Descripcion);
        this.ValorUnitario = params.ValorUnitario;
        this.Importe = params.Importe;
        this.InformacionAduanera = [];
    }
}
