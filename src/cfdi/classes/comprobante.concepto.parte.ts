import { ComprobanteConceptoParteInformacionAduanera } from '.';
import { AttributesComprobanteConceptoParteElement, CFDI_NAME_SPACE, ClaveProdServType } from '..';
import { sanitizeValues } from '../../utils';
import { XMLAttribute, XMLChild, XMLElement } from "../../xml-decorator";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'Parte',
})
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
