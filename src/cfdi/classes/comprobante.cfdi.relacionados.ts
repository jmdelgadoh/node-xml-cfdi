import { AttributesComprobanteCfdiRelacionadosElement, CFDI_NAME_SPACE, TipoRelacionEnum } from '..';
import { ComprobanteCfdiRelacionadosCfdiRelacionado } from '.';
import { XMLAttribute, XMLChild, XMLElement } from "../../xml-decorator";

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
        noImplicitStructure: true
    })
    public CfdiRelacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[];


    constructor(params: AttributesComprobanteCfdiRelacionadosElement, relacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[] = []) {
        this.TipoRelacion = params.TipoRelacion;
        this.CfdiRelacionado = relacionado;
    }
}
