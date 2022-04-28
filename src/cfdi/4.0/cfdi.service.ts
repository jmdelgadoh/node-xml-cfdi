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
import { createSign, getHashes } from 'crypto';

type CFDIServiceParams = {
    pathXsdCfdi40?: string;
    pathXsltCfdi40?: string;
}

type CertificateParams = {
    pathCertificate?: string;
    pathKey?: string;
    password?: string;
}

export class CFDIService {
    private _pathXsdCfdi40: string = '';
    private _pathXsltCfdi40: string = '';
    private _pathCertificate: string = '';
    private _pathKey: string = '';
    private _password: string = '';

    constructor(params: CFDIServiceParams = {}) {
        this.initService(params);
    }

    private initService({
                            pathXsdCfdi40 = `${process.cwd()}/assets/xsd/cfdv40.xsd`,
                            pathXsltCfdi40 = `${process.cwd()}/assets/xslt/cadenaoriginal_4_0.xslt`
                        }: CFDIServiceParams = {}) {
        this._pathXsdCfdi40 = pathXsdCfdi40;
        this._pathXsltCfdi40 = pathXsltCfdi40;
        this.setCetificatePath();
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


    public async validateXML(xml: string) {
        return new Promise((resolve) => {
            validateXML(xml, this._pathXsdCfdi40, (_, result) => {
                resolve(result)
            });
        });
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
                console.log(JSON.stringify(e, null, 3))
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
                const xmlSinSellar = await this.getXML(comprobante);

                const tempXmlFile = await this.generateTempFile(xmlSinSellar);

                console.log(tempXmlFile)

                const cadenaOriginal = getCadenaOriginal(tempXmlFile, this._pathXsltCfdi40);

                // console.log(cadenaOriginal)

                const key = getKey(this._pathKey, this._password);

                comprobante.Sello = await this.getSello(cadenaOriginal, key);

                console.log(comprobante.Sello)

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
