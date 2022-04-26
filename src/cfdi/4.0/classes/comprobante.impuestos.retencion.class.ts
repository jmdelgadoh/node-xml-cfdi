import { ImpuestoEnum } from '../catalog/enums';
import {
    AttributesComprobanteImpuestosRetencionesRetencionElement
} from '../types';

export class ComprobanteImpuestosRetencion {
    private _Impuesto: ImpuestoEnum;
    private _Importe: string;

    constructor(params: AttributesComprobanteImpuestosRetencionesRetencionElement) {
        this.AttributesImpuestosRetencion = params;
    }

    set AttributesImpuestosRetencion(params: AttributesComprobanteImpuestosRetencionesRetencionElement) {
        this.Importe = params.Importe;
        this.Impuesto = params.Impuesto;
    }

    get AttributesImpuestosRetencion(): AttributesComprobanteImpuestosRetencionesRetencionElement {
        return {
            Importe: this.Importe,
            Impuesto: this.Impuesto,
        }
    }

    get Importe(): string {
        return this._Importe;
    }

    set Importe(value: string) {
        this._Importe = value;
    }

    get Impuesto(): ImpuestoEnum {
        return this._Impuesto;
    }

    set Impuesto(value: ImpuestoEnum) {
        this._Impuesto = value;
    }
}
