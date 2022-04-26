import {
    AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement
} from '../types';

export class ComprobanteCfdiRelacionadosCfdiRelacionado {
    private _UUID: string;

    constructor(params: AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement) {
        this.AttributesCfdiRelacionadosCfdiRelacionado = params;
    }

    set AttributesCfdiRelacionadosCfdiRelacionado(params: AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement) {
        this.UUID = params.UUID;
    }

    get AttributesCfdiRelacionadosCfdiRelacionado(): AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement {
        return {
            UUID: this.UUID,
        }
    }

    get UUID(): string {
        return this._UUID;
    }

    set UUID(value: string) {
        this._UUID = value;
    }
}
