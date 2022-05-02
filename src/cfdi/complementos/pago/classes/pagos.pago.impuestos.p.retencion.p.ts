import { ImpuestoEnum } from '../../../catalog/enums';

export class PagosPagoImpuestosPRetencionP {
    private _ImpuestoP: ImpuestoEnum;
    private _ImporteP: number;
    
    get ImporteP(): number {
        return this._ImporteP;
    }

    set ImporteP(value: number) {
        this._ImporteP = value;
    }

    get ImpuestoP(): ImpuestoEnum {
        return this._ImpuestoP;
    }

    set ImpuestoP(value: ImpuestoEnum) {
        this._ImpuestoP = value;
    }
}
