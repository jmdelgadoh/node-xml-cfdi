import { commandSync, SyncOptions } from 'execa';
import { pki } from 'node-forge';

export const getCertificate = (path: string, options?: SyncOptions) => {
    const command = `openssl x509 -inform DER -in ${path} -outform PEM`;

    try {
        const response = commandSync(command, options).stdout;

        const certificate = response.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '');

        const serialNumber = pki.certificateFromPem(response).serialNumber.match(/.{1,2}/g);

        const noCertificate = `${serialNumber?.map((value) => String.fromCharCode(parseInt(value, 16))).join('')}`

        return {
            certificate,
            noCertificate
        }
    } catch (e) {
        console.error({
            status: 'ERROR: 001',
            process: 'No se pudo obtener el certificado',
            solutions: [
                'Verifica la intacion de openssl',
                `Valida la existencia del certificado en ${path}`
            ],
            error: e
        });
        throw new Error('ERROR: 001')
    }
}

export const getCadenaOriginal = (pathXmlFile: string, pathXlstFile: string, options?: SyncOptions) => {
    const command = `xslt3 -s:${pathXmlFile} -xsl:${pathXlstFile}`;

    try {
        return commandSync(command, options).stdout;
    } catch (e) {
        console.error({
            status: 'ERROR: 002',
            process: 'No se pudo generar la cadena original',
            solutions: [
                `Valida la existencia del archivo temporal ${pathXmlFile}`,
                `Valida la existencia del archivo xslt en ${pathXlstFile}`
            ],
            error: e
        });
        throw new Error('ERROR: 002')
    }
}

export const getKey = (path: string, password: string, options?: SyncOptions) => {
    const command = `openssl pkcs8 -inform DER -in ${path} -outform PEM -passin pass:${password}`;

    try {
        return commandSync(command, options).stdout;
    } catch (e) {
        console.error({
            status: 'ERROR: 003',
            process: 'No se pudo obtener la clave privada',
            solutions: [
                'Verifica la intacion de openssl',
                `Valida la existencia de la clave privada en ${path}`
            ],
            error: e
        });
        throw new Error('ERROR: 003')
    }
}

