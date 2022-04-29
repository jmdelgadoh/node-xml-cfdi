import { Element, js2xml } from 'xml-js';
import { ComprobanteElement } from './types';
import { Comprobante } from './classes';
import { validateXML } from 'xsd-schema-validator';
import { tmpdir } from 'os';
import { join } from 'path';
import { writeFileSync } from 'fs';
import { temporalName } from '../../utils/helpers';
import { getCertificate, getCadenaOriginal } from '../../command';
import { getKey } from '../../command/helpers';
import { createSign } from 'crypto';

export type CFDIServiceParams = {
    pathXsdCfdi40?: string;
    pathXsltCfdi40?: string;
    pathXmlFolder?: string;
}

export type CertificateParams = {
    pathCertificate?: string;
    pathKey?: string;
    password?: string;
}

export class CFDIService {
    private _pathXmlFolder: string = '';
    private _pathXsdCfdi40: string = '';
    private _pathXsltCfdi40: string = '';
    private _pathCertificate: string = '';
    private _pathKey: string = '';
    private _password: string = '';

    constructor(params: CFDIServiceParams = {}) {
        this.initService(params);
    }

    public setCetificatePath({
                                 pathCertificate = `${process.cwd()}/assets/certificados/CSD/30001000000400002332.cer`,
                                 pathKey = `${process.cwd()}/assets/certificados/CSD/30001000000400002332.key`,
                                 password = `12345678a`
                             }: CertificateParams = {}) {
        this._pathCertificate = pathCertificate;
        this._pathKey = pathKey;
        this._password = password
    }

    public async saveXml(xml: string): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const nameTemp = temporalName();
                const pathFile = join(this._pathXmlFolder, nameTemp);

                await writeFileSync(pathFile, xml, 'utf8');

                resolve(pathFile);
            } catch (e) {
                reject(e)
            }
        })
    }


    public async getXMLSellado(comprobante: Comprobante): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                comprobante = await this.certificarComprobante(comprobante)

                comprobante = await this.sellarComprobante(comprobante);

                const xml = await this.getXML(comprobante);

                resolve(xml)
            } catch (err) {
                reject(err);
            }
        })
    }

    public async getXML(comprobante: Comprobante): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const xml = js2xml(this.getJsCFDI(comprobante), {spaces: 4});
                resolve(xml)
            } catch (err) {
                reject(err);
            }
        });
    }

    public async validateXML(xml: string): Promise<{ valid: boolean, result: string, messages: string[] }> {
        return new Promise((resolve) => {
            validateXML(xml, this._pathXsdCfdi40, (_, result) => {
                resolve(result)
            });
        });
    }

    public async generateCadenaOriginal(comprobante: Comprobante): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const xmlSinSellar = await this.getXML(comprobante);

                const tempXmlFile = await this.generateTempFile(xmlSinSellar);

                const cadena = getCadenaOriginal(tempXmlFile, this._pathXsltCfdi40);

                resolve(cadena);
            } catch (e) {
                reject(e);
            }

        })
    }

    private certificarComprobante(comprobante: Comprobante): Promise<Comprobante> {
        return new Promise<Comprobante>((resolve, reject) => {
            try {
                const cer = getCertificate(this._pathCertificate);

                comprobante.Certificado = `${cer.certificate}`;

                comprobante.NoCertificado = `${cer.noCertificate}`;

                resolve(comprobante)
            } catch (e) {
                reject({
                    name: 'ERROR: AL CERTIFICAR',
                    error: e
                });
            }
        })
    }

    private async getSello(cadenaOriginal: string, key: string): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const sign = await createSign('RSA-SHA256');
                await sign.update(cadenaOriginal);
                const sello = sign.sign(key, 'base64');

                resolve(sello);
            } catch (e) {
                reject({
                    name: 'ERROR: AL SELLAR',
                    error: e
                });
            }
        })
    }

    private sellarComprobante(comprobante: Comprobante): Promise<Comprobante> {
        return new Promise<Comprobante>(async (resolve, reject) => {
            try {
                const cadenaOriginal = await this.generateCadenaOriginal(comprobante);

                const key = getKey(this._pathKey, this._password);

                comprobante.Sello = await this.getSello(cadenaOriginal, key);

                resolve(comprobante)
            } catch (e) {
                reject({
                    name: 'ERROR: AL CERTIFICAR',
                    error: e
                });
            }
        })
    }

    private async generateTempFile(xml: string): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const pathTemp = tmpdir();
                const nameTemp = temporalName();
                const pathFile = join(pathTemp, nameTemp);

                await writeFileSync(pathFile, xml, 'utf8')
                resolve(pathFile);
            } catch (e) {
                reject(e)
            }
        })
    }

    private getJsCFDI(comprobante: Comprobante): Element {
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

    private initService({
                            pathXsdCfdi40 = `${process.cwd()}/assets/xsd/cfdv40.xsd`,
                            pathXsltCfdi40 = `${process.cwd()}/assets/xslt/cadenaoriginal_4_0.xslt`,
                            pathXmlFolder = `${tmpdir()}`
                        }: CFDIServiceParams = {}) {
        this._pathXsdCfdi40 = pathXsdCfdi40;
        this._pathXsltCfdi40 = pathXsltCfdi40;
        this._pathXmlFolder = pathXmlFolder;
        this.setCetificatePath();
    }
}
