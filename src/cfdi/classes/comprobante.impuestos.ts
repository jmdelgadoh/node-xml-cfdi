import { ComprobanteImpuestosRetencion, ComprobanteImpuestosTraslado } from './index';
import { AttributesComprobanteImpuestosElement, } from '../types';
import { XMLAttribute, XMLChild } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from "../index";

export class ComprobanteImpuestos {
    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Traslados'
    })
    public Traslados: ComprobanteImpuestosTraslado[];

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'Retenciones'
    })
    public Retenciones: ComprobanteImpuestosRetencion[];

    @XMLAttribute({name: 'TotalImpuestosRetenidos'})
    public TotalImpuestosRetenidos?: string;

    @XMLAttribute({name: 'TotalImpuestosTrasladados'})
    public TotalImpuestosTrasladados?: string;

    constructor(params: AttributesComprobanteImpuestosElement = {}) {
        this.TotalImpuestosTrasladados = params.TotalImpuestosTrasladados;
        this.TotalImpuestosRetenidos = params.TotalImpuestosRetenidos;
        this.Retenciones = [];
        this.Traslados = [];
    }
}
