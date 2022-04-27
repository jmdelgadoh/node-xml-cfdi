import { Element, js2xml } from 'xml-js';
import { ComprobanteElement } from './types';
import { Comprobante } from './classes';
import { validateXML } from 'xsd-schema-validator';
import { tmpdir } from 'os';
import { join } from 'path';
import { writeFileSync } from 'fs';
import { temporalName } from '../utils/helpers';

type CFDIServiceParams = {
    pathXsdCfdi40?: string;
}

export class CFDIService {
    private _pathXsdCfdi40: string = '';

    constructor({pathXsdCfdi40 = 'assets/xsd/cfdv40.xsd'}: CFDIServiceParams = {}) {
        this._pathXsdCfdi40 = pathXsdCfdi40
    }

    public async validateXML(xml: string) {
        return new Promise((resolve) => {
            validateXML(xml, this._pathXsdCfdi40, (_, result) => {
                resolve(result)
            });
        });
    }

    public async getXMLSellado(comprobante: Comprobante): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const xmlSinSellar = await this.getXML(comprobante);

                const pathTemp = tmpdir();

                const nameTemp = temporalName();

                const pathFile = join(pathTemp, nameTemp);

                await writeFileSync(pathFile, xmlSinSellar, 'utf8')

                console.log(pathFile)


                resolve(xmlSinSellar)
            } catch (err) {
                reject(err);
            }
        })
    }

    public async getXML(comprobante: Comprobante): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const xml = js2xml(CFDIService.getJsCFDI(comprobante), {spaces: 4});
                resolve(xml)
            } catch (err) {
                reject(err);
            }
        });
    }

    private static getJsCFDI(comprobante: Comprobante): Element {
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
