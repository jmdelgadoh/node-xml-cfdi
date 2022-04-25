import { ComprobanteConceptoParteInformacionAduanera } from './';
import { ClaveProdServType } from '../catalog/types';

export class ComprobanteConceptoParte {
    private _InformacionAduanera: ComprobanteConceptoParteInformacionAduanera[];
    private _ClaveProdServ: ClaveProdServType;
    private _NoIdentificacion: string;
    private _Cantidad: number;
    private _Unidad: string;
    private _Descripcion: string;
    private _ValorUnitario: number;
    private _Importe: number;

    get Importe(): number {
        return this._Importe;
    }

    set Importe(value: number) {
        this._Importe = value;
    }

    get ValorUnitario(): number {
        return this._ValorUnitario;
    }

    set ValorUnitario(value: number) {
        this._ValorUnitario = value;
    }

    get Descripcion(): string {
        return this._Descripcion;
    }

    set Descripcion(value: string) {
        this._Descripcion = value;
    }

    get Unidad(): string {
        return this._Unidad;
    }

    set Unidad(value: string) {
        this._Unidad = value;
    }

    get Cantidad(): number {
        return this._Cantidad;
    }

    set Cantidad(value: number) {
        this._Cantidad = value;
    }

    get NoIdentificacion(): string {
        return this._NoIdentificacion;
    }

    set NoIdentificacion(value: string) {
        this._NoIdentificacion = value;
    }

    get ClaveProdServ(): ClaveProdServType {
        return this._ClaveProdServ;
    }

    set ClaveProdServ(value: ClaveProdServType) {
        this._ClaveProdServ = value;
    }

    get InformacionAduanera(): ComprobanteConceptoParteInformacionAduanera[] {
        return this._InformacionAduanera;
    }

    set InformacionAduanera(value: ComprobanteConceptoParteInformacionAduanera[]) {
        this._InformacionAduanera = value;
    }
}
