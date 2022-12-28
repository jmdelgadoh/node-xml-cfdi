import { TipoRelacionEnum } from '../catalog/enums';
import { ComprobanteCfdiRelacionadosCfdiRelacionado } from './index';
import { AttributesComprobanteCfdiRelacionadosElement } from '../types';
import { XMLAttribute, XMLChild, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from "../index";

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'CfdiRelacionados',
})
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
