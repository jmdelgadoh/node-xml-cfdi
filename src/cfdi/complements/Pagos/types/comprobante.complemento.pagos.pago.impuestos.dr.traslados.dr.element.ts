import { ImpuestoEnum, TipoFactorEnum } from "../../../catalog";

export type ComprobanteComplementoPagosPagoImpuestosDrTrasladosDrElement = {
    /*
    * Atributo requerido para señalar la base para el cálculo del impuesto trasladado conforme al monto del pago,
    * aplicable al documento relacionado, la determinación de la base se realiza de acuerdo con las disposiciones
    * fiscales vigentes. No se permiten valores negativos.
    * */
    BaseDR: string;
    /*
    * Atributo requerido para señalar la clave del tipo de impuesto trasladado conforme al monto del pago, aplicable
    * al documento relacionado.
    * */
    ImpuestoDR: ImpuestoEnum;
    /*
    * Atributo requerido para señalar la clave del tipo de factor que se aplica a la base del impuesto
    * */
    TipoFactorDR: TipoFactorEnum;
    /*
    * Atributo condicional para señalar el valor de la tasa o cuota del impuesto que se traslada. Es requerido cuando
    * el atributo TipoFactorDR contenga una clave que corresponda a Tasa o Cuota
    * */
    TasaOCuotaDR?: string;
    /*
    * Atributo condicional para señalar el importe  del impuesto trasladado conforme al monto del pago, aplicable al
    * documento relacionado.  No se permiten valores negativos. Es requerido  cuando el tipo factor sea Tasa o Cuota
    * */
    ImporteDR?: string;
}
