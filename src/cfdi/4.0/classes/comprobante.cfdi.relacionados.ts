import { TipoRelacionEnum } from '../catalog/enums';
import { ComprobanteCfdiRelacionadosCfdiRelacionado } from './';
import { AttributesComprobanteCfdiRelacionadosElement } from '../types';


export class ComprobanteCfdiRelacionados {
    private _CfdiRelacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[]
    private _TipoRelacion: TipoRelacionEnum;

    constructor(params: AttributesComprobanteCfdiRelacionadosElement) {
        this.Attributes = params
        this.CfdiRelacionado = [];
    }

    set Attributes(params: AttributesComprobanteCfdiRelacionadosElement) {
        this.TipoRelacion = params.TipoRelacion;
    }

    get Attributes(): AttributesComprobanteCfdiRelacionadosElement {
        return {
            TipoRelacion: this.TipoRelacion,
        }
    }

    get TipoRelacion(): TipoRelacionEnum {
        return this._TipoRelacion;
    }

    set TipoRelacion(value: TipoRelacionEnum) {
        this._TipoRelacion = value;
    }

    get CfdiRelacionado(): ComprobanteCfdiRelacionadosCfdiRelacionado[] {
        return this._CfdiRelacionado;
    }

    set CfdiRelacionado(value: ComprobanteCfdiRelacionadosCfdiRelacionado[]) {
        this._CfdiRelacionado = value;
    }
}
