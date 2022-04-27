import { AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement } from '../types';

export class ComprobanteCfdiRelacionadosCfdiRelacionado {
    private _UUID: string;

    constructor(params: AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement) {
        this.Attributes = params;
    }

    set Attributes(params: AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement) {
        this.UUID = params.UUID;
    }

    get Attributes(): AttributesComprobanteCfdiRelacionadosCfdiRelacionadoElement {
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
