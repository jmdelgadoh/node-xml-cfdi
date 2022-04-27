import { Element, json2xml } from 'xml-js';
import { ComprobanteElement } from './types';
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
            attributes: comprobante.Attributes,
            elements: comprobante.Elements,
        } as ComprobanteElement;

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
