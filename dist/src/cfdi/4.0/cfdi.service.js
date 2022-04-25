"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFDIService = void 0;
const xml_js_1 = require("xml-js");
const classes_1 = require("./classes");
class CFDIService {
    _comprobante;
    jsonComprobante = {
        type: 'element',
        name: "cfdi:Comprobante",
        elements: []
    };
    constructor() {
        this._comprobante = new classes_1.Comprobante();
    }
    comprobante(params) {
        this._comprobante.AttributesComprobante = params;
    }
    informacionGlobal(params) {
        this._comprobante.InformacionGlobal = new classes_1.ComprobanteInformacionGlobal();
        this._comprobante.InformacionGlobal.AttributesInformacionGlobal = params;
    }
    cfdiRelacionados(params) {
        if (params.CfdiRelacionado?.length) {
            if (this._comprobante.CfdiRelacionados?.length) {
                const index = this._comprobante.CfdiRelacionados.findIndex((value) => value.TipoRelacion === params.TipoRelacion);
                if (index >= 0) {
                    this._comprobante.CfdiRelacionados[index].CfdiRelacionado = this.generarCfdiRelacionado(params.CfdiRelacionado);
                }
                else {
                    this._comprobante.CfdiRelacionados.push(this.generarCfdiRelacionados(params));
                }
            }
            else {
                this._comprobante.CfdiRelacionados = [this.generarCfdiRelacionados(params)];
            }
        }
    }
    generarCfdiRelacionados(params) {
        const cfdiRelacionados = new classes_1.ComprobanteCfdiRelacionados();
        cfdiRelacionados.AttributesCfdiRelacionados = params;
        if (params.CfdiRelacionado?.length) {
            cfdiRelacionados.CfdiRelacionado = this.generarCfdiRelacionado(params.CfdiRelacionado);
        }
        return cfdiRelacionados;
    }
    generarCfdiRelacionado(params) {
        return params.map((UUID) => {
            const cfdiRelacionadosCfdiRelacionado = new classes_1.ComprobanteCfdiRelacionadosCfdiRelacionado();
            cfdiRelacionadosCfdiRelacionado.AttributesCfdiRelacionadosCfdiRelacionado = { UUID };
            return cfdiRelacionadosCfdiRelacionado;
        });
    }
    async getXML() {
        return new Promise((resolve, reject) => {
            try {
                const xml = (0, xml_js_1.json2xml)(JSON.stringify(this.JsonCFDI));
                resolve(xml);
            }
            catch (err) {
                reject(err);
            }
        });
    }
    get JsonCFDI() {
        this.jsonComprobante.elements = [];
        this.jsonComprobante.attributes = this._comprobante.AttributesComprobante;
        if (this._comprobante.InformacionGlobal) {
            this.jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:InformacionGlobal',
                attributes: this._comprobante.InformacionGlobal.AttributesInformacionGlobal
            });
        }
        if (this._comprobante.CfdiRelacionados?.length) {
            for (const cfdiRelacionadosValue of this._comprobante.CfdiRelacionados) {
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
                this.jsonComprobante.elements?.push(cfdiRelacionados);
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
                this.jsonComprobante
            ]
        };
    }
}
exports.CFDIService = CFDIService;
