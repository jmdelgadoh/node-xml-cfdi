import { ComprobanteImpuestosRetencion, ComprobanteImpuestosTraslado } from './index';
import { AttributesComprobanteImpuestosElement, } from '../types';
import { XMLAttribute } from "../../xml-decorator/annotations/XMLAttribute";
import { XMLChild } from "../../xml-decorator/annotations/XMLChild";
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
