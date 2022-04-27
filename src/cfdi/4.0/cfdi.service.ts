import { Element, json2xml } from 'xml-js';
import {
    ComprobanteCfdiRelacionadosCfdiRelacionadoElement,
    ComprobanteCfdiRelacionadosElement,
    ComprobanteConceptoACuentaTercerosElement,
    ComprobanteConceptoCuentaPredialElement,
    ComprobanteConceptoElement,
    ComprobanteConceptoImpuestosElement,
    ComprobanteConceptoImpuestosRetencionesElement,
    ComprobanteConceptoImpuestosRetencionesRetencionElement,
    ComprobanteConceptoImpuestosTrasladosElement,
    ComprobanteConceptoImpuestosTrasladosTrasladoElement,
    ComprobanteConceptoInformacionAduaneraElement,
    ComprobanteConceptosElement,
    ComprobanteElement,
    ComprobanteEmisorElement,
    ComprobanteInformacionGlobalElement,
    ComprobanteReceptorElement,
    ComprobanteConceptoParteElement,
    ComprobanteImpuestosRetencionesRetencionElement,
    ComprobanteImpuestosTrasladosTrasladoElement,
} from './types';
import { Comprobante } from './classes';

export class CFDIService {
    constructor() {
    }

    public async getXML(comprobante: Comprobante): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const xml = json2xml(JSON.stringify(this.getJsonCFDI(comprobante)));
                resolve(xml);
            } catch (err) {
                reject(err);
            }
        });
    }

    private getJsonCFDI(comprobante: Comprobante): Element {
        const jsonComprobante = {
            type: 'element',
            name: "cfdi:Comprobante",
            elements: []
        } as ComprobanteElement;

        jsonComprobante.attributes = comprobante.Attributes;

        /*
        * Se agrega la informacion fiscal, solo si cuenta con el atributo
        * */
        if (comprobante.InformacionGlobal) {
            jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:InformacionGlobal',
                attributes: comprobante.InformacionGlobal.Attributes
            } as ComprobanteInformacionGlobalElement)
        }

        /*
        * Se agregam los cfdis relaciona con tipo de relacion
        * */
        if (comprobante.CfdiRelacionados?.length) {
            for (const cfdiRelacionadosValue of comprobante.CfdiRelacionados) {
                const cfdiRelacionados = {
                    type: 'element',
                    name: 'cfdi:CfdiRelacionados',
                    attributes: cfdiRelacionadosValue.Attributes,
                    elements: []
                } as ComprobanteCfdiRelacionadosElement;

                for (const cfdiRelacionadoValue of cfdiRelacionadosValue.CfdiRelacionado) {
                    const cfdiRelacionado = {
                        type: 'element',
                        name: 'cfdi:CfdiRelacionado',
                        attributes: cfdiRelacionadoValue.Attributes,
                    } as ComprobanteCfdiRelacionadosCfdiRelacionadoElement;

                    cfdiRelacionados.elements?.push(cfdiRelacionado);
                }

                jsonComprobante.elements?.push(cfdiRelacionados)
            }
        }

        /*
        * Se agrega el emisor
        * */
        if (comprobante.Emisor) {
            jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:Emisor',
                attributes: comprobante.Emisor.Attributes
            } as ComprobanteEmisorElement)
        }

        /*
        * Se agrega el receptor
        * */
        if (comprobante.Receptor) {
            jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:Receptor',
                attributes: comprobante.Receptor.Attributes
            } as ComprobanteReceptorElement)
        }

        /*
        * Se agrega el agregan los conceptos
        * */
        if (comprobante.Conceptos.length) {
            const elements: ComprobanteConceptoElement[] = [];

            for (const conceptoValue of comprobante.Conceptos) {
                const conceptoElement: ComprobanteConceptoElement = {
                    type: 'element',
                    name: 'cfdi:Concepto',
                    attributes: conceptoValue.Attributes,
                    elements: []
                }

                /*
                * Se agregan los impuestos del concepto
                * */
                if (conceptoValue?.Impuestos) {
                    const retencionElements: ComprobanteConceptoImpuestosRetencionesRetencionElement[] = [];
                    const trasladoElements: ComprobanteConceptoImpuestosTrasladosTrasladoElement[] = [];
                    /*
                    * Se agregan los impuestos en retencion
                    * */
                    for (const retencionValue of conceptoValue?.Impuestos.Retenciones) {
                        const element: ComprobanteConceptoImpuestosRetencionesRetencionElement = {
                            type: 'element',
                            name: 'cfdi:Retencion',
                            attributes: retencionValue.Attributes
                        }

                        retencionElements.push(element)
                    }
                    /*
                    * Se agregan los impuestos traladados
                    * */
                    for (const trasladosValue of conceptoValue?.Impuestos.Traslados) {
                        const element: ComprobanteConceptoImpuestosTrasladosTrasladoElement = {
                            type: 'element',
                            name: 'cfdi:Traslado',
                            attributes: trasladosValue.Attributes
                        }

                        trasladoElements.push(element)
                    }
                    /*
                    * Se el nodo de impuestos si existe impuestos trasladados o impuestos retenidos
                    * */
                    if (retencionElements.length || trasladoElements.length) {
                        const impuestosElement: ComprobanteConceptoImpuestosElement = {
                            type: 'element',
                            name: 'cfdi:Impuestos',
                            elements: []
                        }

                        if (trasladoElements.length) {
                            impuestosElement.elements?.push({
                                type: 'element',
                                name: 'cfdi:Traslados',
                                elements: trasladoElements
                            } as ComprobanteConceptoImpuestosTrasladosElement)
                        }

                        if (retencionElements.length) {
                            impuestosElement.elements?.push({
                                type: 'element',
                                name: 'cfdi:Retenciones',
                                elements: retencionElements
                            } as ComprobanteConceptoImpuestosRetencionesElement)
                        }

                        conceptoElement.elements?.push(impuestosElement);
                    }
                }
                /*
                * Se agrega la cuenta a terceros
                * */
                if (conceptoValue?.ACuentaTerceros) {
                    conceptoElement.elements?.push({
                        type: 'element',
                        name: 'cfdi:ACuentaTerceros',
                        attributes: conceptoValue?.ACuentaTerceros.Attributes
                    } as ComprobanteConceptoACuentaTercerosElement)
                }
                /*
                * Se agrega cuentas a terceros
                * */
                if (conceptoValue?.InformacionAduanera?.length) {
                    for (const informacionAduaneraValue of conceptoValue?.InformacionAduanera) {
                        conceptoElement.elements?.push({
                            type: 'element',
                            name: 'cfdi:InformacionAduanera',
                            attributes: informacionAduaneraValue.Attributes
                        } as ComprobanteConceptoInformacionAduaneraElement)
                    }
                }

                if (conceptoValue?.CuentaPredial?.length) {
                    for (const cuentaPredialValue of conceptoValue?.CuentaPredial) {
                        conceptoElement.elements?.push({
                            type: 'element',
                            name: 'cfdi:CuentaPredial',
                            attributes: cuentaPredialValue.Attributes
                        } as ComprobanteConceptoCuentaPredialElement)
                    }
                }

                if (conceptoValue?.Parte?.length) {
                    for (const parteValue of conceptoValue?.Parte) {
                        const parteElement = {
                            type: 'element',
                            name: 'cfdi:Parte',
                            attributes: parteValue.Attributes,
                            elements: []
                        } as ComprobanteConceptoParteElement;

                        for (const informacionAduaneraValue of parteValue.InformacionAduanera) {
                            parteElement.elements?.push({
                                type: 'element',
                                name: 'cfdi:InformacionAduanera',
                                attributes: informacionAduaneraValue.Attributes
                            } as ComprobanteConceptoInformacionAduaneraElement)
                        }

                        conceptoElement.elements?.push(parteElement)
                    }
                }

                elements.push(conceptoElement)
            }

            if (elements.length) {
                jsonComprobante.elements?.push({
                    type: 'element',
                    name: 'cfdi:Conceptos',
                    elements
                } as ComprobanteConceptosElement)
            }
        }

        /*
        * Se agregan los impuestos del concepto
        * */
        if (comprobante.Impuestos) {
            const retencionElements: ComprobanteImpuestosRetencionesRetencionElement[] = [];
            const trasladoElements: ComprobanteImpuestosTrasladosTrasladoElement[] = [];
            /*
            * Se agregan los impuestos en retencion
            * */
            for (const retencionValue of comprobante?.Impuestos.Retenciones) {
                const element: ComprobanteImpuestosRetencionesRetencionElement = {
                    type: 'element',
                    name: 'cfdi:Retencion',
                    attributes: retencionValue.Attributes
                }

                retencionElements.push(element)
            }
            /*
            * Se agregan los impuestos traladados
            * */
            for (const trasladosValue of comprobante?.Impuestos.Traslados) {
                const element: ComprobanteImpuestosTrasladosTrasladoElement = {
                    type: 'element',
                    name: 'cfdi:Traslado',
                    attributes: trasladosValue.Attributes
                }

                trasladoElements.push(element)
            }
            /*
            * Se el nodo de impuestos si existe impuestos trasladados o impuestos retenidos
            * */
            const impuestosElement: ComprobanteConceptoImpuestosElement = {
                type: 'element',
                name: 'cfdi:Impuestos',
                elements: []
            }

            if (comprobante?.Impuestos) {
                impuestosElement.attributes = comprobante.Impuestos.Attributes;
            }

            if (retencionElements.length || trasladoElements.length) {

                if (trasladoElements.length) {
                    impuestosElement.elements?.push({
                        type: 'element',
                        name: 'cfdi:Traslados',
                        elements: trasladoElements
                    } as ComprobanteConceptoImpuestosTrasladosElement)
                }

                if (retencionElements.length) {
                    impuestosElement.elements?.push({
                        type: 'element',
                        name: 'cfdi:Retenciones',
                        elements: retencionElements
                    } as ComprobanteConceptoImpuestosRetencionesElement)
                }

            }
            jsonComprobante.elements?.push(impuestosElement);
        }

        return {
            declaration: {
                attributes: {
                    version: '1.0',
                    encoding: 'utf-8'
                }
            },
            elements: [
                jsonComprobante
            ]
        }
    }
}
