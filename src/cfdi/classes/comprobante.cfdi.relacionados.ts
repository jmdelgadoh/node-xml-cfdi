import { TipoRelacionEnum } from '../catalog/enums';
import { ComprobanteCfdiRelacionadosCfdiRelacionado } from './index';
import { AttributesComprobanteCfdiRelacionadosElement } from '../types';
import { XMLAttribute } from "../../xml-decorator/annotations/XMLAttribute";
import { XMLChild } from "../../xml-decorator/annotations/XMLChild";
import { CFDI_NAME_SPACE } from "../index";


export class ComprobanteCfdiRelacionados {
    @XMLAttribute({name: 'TipoRelacion'})
    public TipoRelacion: TipoRelacionEnum;

    @XMLChild({
        namespace: CFDI_NAME_SPACE,
        name: 'CfdiRelacionado',
    })
    public CfdiRelacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[];


    constructor(params: AttributesComprobanteCfdiRelacionadosElement, relacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[] = []) {
        this.TipoRelacion = params.TipoRelacion;
        this.CfdiRelacionado = relacionado;
    }
}
