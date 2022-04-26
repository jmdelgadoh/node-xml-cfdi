"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFDIService = void 0;
const xml_js_1 = require("xml-js");
const classes_1 = require("./classes");
class CFDIService {
    constructor() {
    }
    comprobante(params) {
        return new classes_1.Comprobante(params);
    }
    async getXML(comprobante) {
        return new Promise((resolve, reject) => {
            try {
                const xml = (0, xml_js_1.json2xml)(JSON.stringify(this.getJsonCFDI(comprobante)));
                resolve(xml);
            }
            catch (err) {
                reject(err);
            }
        });
    }
    getJsonCFDI(comprobante) {
        const jsonComprobante = {
            type: 'element',
            name: "cfdi:Comprobante",
            elements: []
        };
        jsonComprobante.attributes = comprobante.AttributesComprobante;
        /*
        * Se agrega la informacion fiscal, solo si cuenta con el atributo
        * */
        if (comprobante.InformacionGlobal) {
            jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:InformacionGlobal',
                attributes: comprobante.InformacionGlobal.AttributesInformacionGlobal
            });
        }
        /*
        * Se agregam los cfdis relaciona con tipo de relacion
        * */
        if (comprobante.CfdiRelacionados?.length) {
            for (const cfdiRelacionadosValue of comprobante.CfdiRelacionados) {
                const cfdiRelacionados = {
                    type: 'element',
                    name: 'cfdi:CfdiRelacionados',
                    attributes: cfdiRelacionadosValue.AttributesCfdiRelacionados,
                    elements: []
                };
                for (const cfdiRelacionadoValue of cfdiRelacionadosValue.CfdiRelacionado) {
                    const cfdiRelacionado = {
                        type: 'element',
                        name: 'cfdi:CfdiRelacionado',
                        attributes: cfdiRelacionadoValue.AttributesCfdiRelacionadosCfdiRelacionado,
                    };
                    cfdiRelacionados.elements?.push(cfdiRelacionado);
                }
                jsonComprobante.elements?.push(cfdiRelacionados);
            }
        }
        /*
        * Se agrega el emisor
        * */
        if (comprobante.Emisor) {
            jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:Emisor',
                attributes: comprobante.Emisor.AttributesEmisor
            });
        }
        /*
        * Se agrega el receptor
        * */
        if (comprobante.Receptor) {
            jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:Receptor',
                attributes: comprobante.Receptor.AttributesReceptor
            });
        }
        /*
        * Se agrega el agregan los conceptos
        * */
        if (comprobante.Conceptos.length) {
            const elements = [];
            for (const conceptoValue of comprobante.Conceptos) {
                const conceptoElement = {
                    type: 'element',
                    name: 'cfdi:Concepto',
                    attributes: conceptoValue.AttributesConcepto,
                    elements: []
                };
                /*
                * Se agregan los impuestos del concepto
                * */
                if (conceptoValue?.Impuestos) {
                    const retencionElements = [];
                    const trasladoElements = [];
                    /*
                    * Se agregan los impuestos en retencion
                    * */
                    for (const retencionValue of conceptoValue?.Impuestos.Retenciones) {
                        const element = {
                            type: 'element',
                            name: 'cfdi:Retencion',
                            attributes: retencionValue.AttributesConceptoImpuestosRetencion
                        };
                        retencionElements.push(element);
                    }
                    /*
                    * Se agregan los impuestos traladados
                    * */
                    for (const trasladosValue of conceptoValue?.Impuestos.Traslados) {
                        const element = {
                            type: 'element',
                            name: 'cfdi:Traslado',
                            attributes: trasladosValue.AttributesConceptoImpuestosTraslado
                        };
                        trasladoElements.push(element);
                    }
                    /*
                    * Se el nodo de impuestos si existe impuestos trasladados o impuestos retenidos
                    * */
                    if (retencionElements.length || trasladoElements.length) {
                        const impuestosElement = {
                            type: 'element',
                            name: 'cfdi:Impuestos',
                            elements: []
                        };
                        if (trasladoElements.length) {
                            impuestosElement.elements?.push({
                                type: 'element',
                                name: 'cfdi:Traslados',
                                elements: trasladoElements
                            });
                        }
                        if (retencionElements.length) {
                            impuestosElement.elements?.push({
                                type: 'element',
                                name: 'cfdi:Retenciones',
                                elements: retencionElements
                            });
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
                        attributes: conceptoValue?.ACuentaTerceros.AttributesACuentaTerceros
                    });
                }
                /*
                * Se agrega cuentas a terceros
                * */
                if (conceptoValue?.InformacionAduanera?.length) {
                    for (const informacionAduaneraValue of conceptoValue?.InformacionAduanera) {
                        conceptoElement.elements?.push({
                            type: 'element',
                            name: 'cfdi:InformacionAduanera',
                            attributes: informacionAduaneraValue.AttributesInformacionAduanera
                        });
                    }
                }
                if (conceptoValue?.CuentaPredial?.length) {
                    for (const cuentaPredialValue of conceptoValue?.CuentaPredial) {
                        conceptoElement.elements?.push({
                            type: 'element',
                            name: 'cfdi:CuentaPredial',
                            attributes: cuentaPredialValue.AttributesCuentaPredial
                        });
                    }
                }
                if (conceptoValue?.Parte?.length) {
                    for (const parteValue of conceptoValue?.Parte) {
                        const parteElement = {
                            type: 'element',
                            name: 'cfdi:Parte',
                            attributes: parteValue.AttributesParte,
                            elements: []
                        };
                        for (const informacionAduaneraValue of parteValue.InformacionAduanera) {
                            parteElement.elements?.push({
                                type: 'element',
                                name: 'cfdi:InformacionAduanera',
                                attributes: informacionAduaneraValue.AttributesInformacionAduanera
                            });
                        }
                        conceptoElement.elements?.push(parteElement);
                    }
                }
                elements.push(conceptoElement);
            }
            if (elements.length) {
                jsonComprobante.elements?.push({
                    type: 'element',
                    name: 'cfdi:Conceptos',
                    elements
                });
            }
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
        };
    }
}
exports.CFDIService = CFDIService;
