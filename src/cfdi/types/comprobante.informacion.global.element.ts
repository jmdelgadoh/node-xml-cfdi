import { Element } from 'xml-js';
import { MesesEnum, PeriodicidadEnum, } from '../catalog/enums';

export type AttributesComprobanteInformacionGlobalElement = {
    /*
    * Atributo requerido para expresar el período al que corresponde la información del comprobante global.
    * */
    Periodicidad: PeriodicidadEnum;
    /*
    * Atributo requerido para expresar el mes o los meses al que corresponde la información del comprobante global.
    * */
    Meses: MesesEnum;
    /*
    * Atributo requerido para expresar el año al que corresponde la información del comprobante global.
    * */
    Anio: string;
}

export type ComprobanteInformacionGlobalElement = {
    type: 'element',
    name: 'cfdi:InformacionGlobal',
    attributes?: AttributesComprobanteInformacionGlobalElement,
} & Element
