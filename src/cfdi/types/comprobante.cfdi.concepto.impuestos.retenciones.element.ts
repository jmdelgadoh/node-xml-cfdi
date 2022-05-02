import { Element } from 'xml-js';
import { ImpuestoEnum, TipoFactorEnum } from '../catalog/enums';

export type AttributesComprobanteConceptoImpuestosRetencionesRetencionElement = {
    /*
    * Atributo requerido para señalar la base para el cálculo de la retención, la determinación de la base se realiza
    * de acuerdo con las disposiciones fiscales vigentes. No se permiten valores negativos.
    * */
    Base: string;
    /*
    * Atributo requerido para señalar la clave del tipo de impuesto retenido aplicable al concepto.
    * */
    Impuesto: ImpuestoEnum;
    /*
    * Atributo requerido para señalar la clave del tipo de factor que se aplica a la base del impuesto.
    * */
    TipoFactor: TipoFactorEnum;
    /*
    * Atributo requerido para señalar la tasa o cuota del impuesto que se retiene para el presente concepto.
    * */
    TasaOCuota: string;
    /*
    * Atributo requerido para señalar el importe del impuesto retenido que aplica al concepto. No se permiten valores
    * negativos.
    * */
    Importe: string;
}

export type ComprobanteConceptoImpuestosRetencionesRetencionElement = {
    type: 'element',
    name: 'cfdi:Retencion',
    attributes?: AttributesComprobanteConceptoImpuestosRetencionesRetencionElement,
} & Element
