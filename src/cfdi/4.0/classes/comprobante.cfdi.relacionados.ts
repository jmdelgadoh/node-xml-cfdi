import { TipoRelacionEnum } from '../enums';
import { ComprobanteCfdiRelacionadosCfdiRelacionado } from './';

export class ComprobanteCfdiRelacionados {
    private _CfdiRelacionado: ComprobanteCfdiRelacionadosCfdiRelacionado[]
    private _TipoRelacion: TipoRelacionEnum;

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
