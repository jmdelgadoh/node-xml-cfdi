import { Element, js2xml } from 'xml-js';
import { ComprobanteElement } from './types';
import { Comprobante } from './classes';
import { validateXML } from 'xsd-schema-validator';
import { tmpdir } from 'os';
import { join } from 'path';
import { writeFileSync } from 'fs';
import { temporalName } from '../../utils/helpers';
import { getCertificate } from '../../command';

type CFDIServiceParams = {
    pathXsdCfdi40?: string;
}

type CertificateParams = {
    pathCertificate?: string;
    pathKey?: string;
}

export class CFDIService {
    private _pathXsdCfdi40: string = '';
    private _pathCertificate: string = '';
    private _pathKey: string = '';

    constructor(params: CFDIServiceParams = {}) {
        this.initService(params);
    }

    private initService({pathXsdCfdi40 = `${process.cwd()}/assets/xsd/cfdv40.xsd`}: CFDIServiceParams = {}) {
        this._pathXsdCfdi40 = pathXsdCfdi40;
        this.setCetificatePath();
    }

    public setCetificatePath({
                                 pathCertificate = `${process.cwd()}/assets/certificados/CSD/30001000000400002332.cer`,
                                 pathKey = `${process.cwd()}/assets/certificados/CSD/30001000000400002332.key`,
                             }: CertificateParams = {}) {
        this._pathCertificate = pathCertificate;
        this._pathKey = pathKey;
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
                const cer = getCertificate(this._pathCertificate);

                if (cer) {
                    comprobante.Certificado = `${cer.certificate}`;

                    comprobante.NoCertificado = `${cer.noCertificate}`;

                    const xmlSinSellar = await this.getXML(comprobante);

                    const pathTemp = tmpdir();

                    const nameTemp = temporalName();

                    const pathFile = join(pathTemp, nameTemp);

                    await writeFileSync(pathFile, xmlSinSellar, 'utf8')

                    console.log(pathFile)

                    resolve(xmlSinSellar)
                } else {
                    reject('No se pudo procesar el certificado')
                }
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
