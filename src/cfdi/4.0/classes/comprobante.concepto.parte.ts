import { ComprobanteConceptoInformacionAduanera, ComprobanteConceptoParteInformacionAduanera } from './';
import { ClaveProdServType } from '../catalog/types';
import {
    AttributesComprobanteConceptoCuentaPredialElement,
    AttributesComprobanteConceptoInformacionAduaneraElement
} from '../types';
import { AttributesComprobanteConceptoParteElement } from '../types/comprobante.cfdi.concepto.parte.element';

export class ComprobanteConceptoParte {
    private _InformacionAduanera: ComprobanteConceptoParteInformacionAduanera[];
    private _ClaveProdServ: ClaveProdServType;
    private _NoIdentificacion?: string;
    private _Cantidad: string;
    private _Unidad?: string;
    private _Descripcion: string;
    private _ValorUnitario?: string;
    private _Importe?: string;

    constructor(params: AttributesComprobanteConceptoParteElement) {
        this.AttributesParte = params;
        this.InformacionAduanera = [];
    }

    public informacionAduanera(params: AttributesComprobanteConceptoInformacionAduaneraElement) {
        this.InformacionAduanera.push(new ComprobanteConceptoParteInformacionAduanera(params))
    }

    set AttributesParte(params: AttributesComprobanteConceptoParteElement) {
        this.ClaveProdServ = params.ClaveProdServ;
        this.NoIdentificacion = params.NoIdentificacion;
        this.Cantidad = params.Cantidad;
        this.Unidad = params.Unidad;
        this.Descripcion = params.Descripcion;
        this.ValorUnitario = params.ValorUnitario;
        this.Importe = params.Importe;
    }

    get AttributesParte(): AttributesComprobanteConceptoParteElement {
        return {
            ClaveProdServ: this.ClaveProdServ,
            NoIdentificacion: this.NoIdentificacion,
            Cantidad: this.Cantidad,
            Unidad: this.Unidad,
            Descripcion: this.Descripcion,
            ValorUnitario: this.ValorUnitario,
            Importe: this.Importe,
        }
    }

    get Importe(): string | undefined {
        return this._Importe;
    }

    set Importe(value: string | undefined) {
        this._Importe = value;
    }

    get ValorUnitario(): string | undefined {
        return this._ValorUnitario;
    }

    set ValorUnitario(value: string | undefined) {
        this._ValorUnitario = value;
    }

    get Descripcion(): string {
        return this._Descripcion;
    }

    set Descripcion(value: string) {
        this._Descripcion = value;
    }

    get Unidad(): string | undefined {
        return this._Unidad;
    }

    set Unidad(value: string | undefined) {
        this._Unidad = value;
    }

    get Cantidad(): string {
        return this._Cantidad;
    }

    set Cantidad(value: string) {
        this._Cantidad = value;
    }

    get NoIdentificacion(): string | undefined {
        return this._NoIdentificacion;
    }

    set NoIdentificacion(value: string | undefined) {
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
