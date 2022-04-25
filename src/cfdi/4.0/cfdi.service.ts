import { Element, json2xml } from 'xml-js';
import {
    AttributesComprobanteElement,
    AttributesComprobanteInformacionGlobalElement,
    ComprobanteElement,
    ComprobanteInformacionGlobalElement,
    ComprobanteCfdiRelacionadosElement,
    ComprobanteCfdiRelacionadosCfdiRelacionadoElement,
    AttributesComprobanteCfdiRelacionadosConCfdiRelacionadoElement,
    AttributesComprobanteEmisorElement,
    ComprobanteEmisorElement
} from './types';
import {
    Comprobante,
    ComprobanteCfdiRelacionados,
    ComprobanteCfdiRelacionadosCfdiRelacionado, ComprobanteEmisor,
    ComprobanteInformacionGlobal, ComprobanteReceptor
} from './classes';
import {
    AttributesComprobanteReceptorElement,
    ComprobanteReceptorElement
} from './types/comprobante.cfdi.receptor.element';

export class CFDIService {
    private _comprobante: Comprobante;
    private jsonComprobante: ComprobanteElement = {
        type: 'element',
        name: "cfdi:Comprobante",
        elements: []
    }

    constructor() {
        this._comprobante = new Comprobante();
    }

    public comprobante(params: AttributesComprobanteElement) {
        this._comprobante.AttributesComprobante = params;
    }

    public informacionGlobal(params: AttributesComprobanteInformacionGlobalElement) {
        this._comprobante.InformacionGlobal = new ComprobanteInformacionGlobal();
        this._comprobante.InformacionGlobal.AttributesInformacionGlobal = params;
    }

    public cfdiRelacionados(params: AttributesComprobanteCfdiRelacionadosConCfdiRelacionadoElement) {
        if (params.CfdiRelacionado?.length) {
            if (this._comprobante.CfdiRelacionados?.length) {
                const index = this._comprobante.CfdiRelacionados.findIndex((value) => value.TipoRelacion === params.TipoRelacion);

                if (index >= 0) {
                    this._comprobante.CfdiRelacionados[index].CfdiRelacionado = this.generarCfdiRelacionado(params.CfdiRelacionado);
                } else {
                    this._comprobante.CfdiRelacionados.push(this.generarCfdiRelacionados(params))
                }
            } else {
                this._comprobante.CfdiRelacionados = [this.generarCfdiRelacionados(params)];
            }
        }
    }

    public emisor(params: AttributesComprobanteEmisorElement) {
        this._comprobante.Emisor = new ComprobanteEmisor();
        this._comprobante.Emisor.AttributesEmisor = params;
    }

    public receptor(params: AttributesComprobanteReceptorElement) {
        this._comprobante.Receptor = new ComprobanteReceptor();
        this._comprobante.Receptor.AttributesReceptor = params;
    }

    public concepto() {
    }

    public async getXML(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const xml = json2xml(JSON.stringify(this.JsonCFDI));
                resolve(xml);
            } catch (err) {
                reject(err);
            }
        });
    }

    private generarCfdiRelacionados(params: AttributesComprobanteCfdiRelacionadosConCfdiRelacionadoElement) {
        const cfdiRelacionados = new ComprobanteCfdiRelacionados();
        cfdiRelacionados.AttributesCfdiRelacionados = params;
        if (params.CfdiRelacionado?.length) {
            cfdiRelacionados.CfdiRelacionado = this.generarCfdiRelacionado(params.CfdiRelacionado);
        }
        return cfdiRelacionados;
    }

    private generarCfdiRelacionado(params: string[]): ComprobanteCfdiRelacionadosCfdiRelacionado[] {
        return params.map((UUID) => {
            const cfdiRelacionadosCfdiRelacionado = new ComprobanteCfdiRelacionadosCfdiRelacionado();
            cfdiRelacionadosCfdiRelacionado.AttributesCfdiRelacionadosCfdiRelacionado = {UUID};
            return cfdiRelacionadosCfdiRelacionado
        })
    }

    private get JsonCFDI(): Element {
        this.jsonComprobante.elements = [];
        this.jsonComprobante.attributes = this._comprobante.AttributesComprobante;

        if (this._comprobante.InformacionGlobal) {
            this.jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:InformacionGlobal',
                attributes: this._comprobante.InformacionGlobal.AttributesInformacionGlobal
            } as ComprobanteInformacionGlobalElement)
        }

        if (this._comprobante.CfdiRelacionados?.length) {
            for (const cfdiRelacionadosValue of this._comprobante.CfdiRelacionados) {
                const cfdiRelacionados = {
                    type: 'element',
                    name: 'cfdi:CfdiRelacionados',
                    attributes: cfdiRelacionadosValue.AttributesCfdiRelacionados,
                    elements: []
                } as ComprobanteCfdiRelacionadosElement;

                for (const cfdiRelacionadoValue of cfdiRelacionadosValue.CfdiRelacionado) {
                    const cfdiRelacionado = {
                        type: 'element',
                        name: 'cfdi:CfdiRelacionado',
                        attributes: cfdiRelacionadoValue.AttributesCfdiRelacionadosCfdiRelacionado,
                    } as ComprobanteCfdiRelacionadosCfdiRelacionadoElement;

                    cfdiRelacionados.elements?.push(cfdiRelacionado);
                }

                this.jsonComprobante.elements?.push(cfdiRelacionados)
            }
        }

        if (this._comprobante.Emisor) {
            this.jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:Emisor',
                attributes: this._comprobante.Emisor.AttributesEmisor
            } as ComprobanteEmisorElement)
        }

        if (this._comprobante.Receptor) {
            this.jsonComprobante.elements?.push({
                type: 'element',
                name: 'cfdi:Receptor',
                attributes: this._comprobante.Receptor.AttributesReceptor
            } as ComprobanteReceptorElement)
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
        }
    }
}
