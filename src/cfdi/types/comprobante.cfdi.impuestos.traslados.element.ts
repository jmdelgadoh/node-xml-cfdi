import { Element } from 'xml-js';
import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';

export type AttributesComprobanteImpuestosTrasladosTrasladoElement = {
    /*
    * Atributo requerido para señalar la suma de los atributos Base de los conceptos del impuesto trasladado. No se
    * permiten valores negativos.
    * */
    Base: string;
    /*
    * Atributo requerido para señalar la clave del tipo de impuesto trasladado.
    * */
    Impuesto: ImpuestoEnum;
    /*
    * Atributo requerido para señalar la clave del tipo de factor que se aplica a la base del impuesto.
    * */
    TipoFactor: TipoFactorEnum;
    /*
    * Atributo condicional para señalar el valor de la tasa o cuota del impuesto que se traslada por los conceptos
    * amparados en el comprobante.
    * */
    TasaOCuota?: string;
    /*
    * Atributo condicional para señalar la suma del importe del impuesto trasladado, agrupado por impuesto, TipoFactor
    * y TasaOCuota. No se permiten valores negativos.
    * */
    Importe?: string;
}

export type ComprobanteImpuestosTrasladosTrasladoElement = {
    type: 'element',
    name: 'cfdi:Traslado',
    attributes?: AttributesComprobanteImpuestosTrasladosTrasladoElement,
} & Element
