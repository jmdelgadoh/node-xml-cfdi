import { commandSync, SyncOptions } from 'execa';
import { pki } from 'node-forge';

export const getCertificate = (path: string, options?: SyncOptions) => {
    try {
        const command = `openssl x509 -inform DER -in ${path} -outform PEM`;

        const response = commandSync(command, options).stdout;

        const certificate = response.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '');

        const serialNumber = pki.certificateFromPem(response).serialNumber.match(/.{1,2}/g);

        const noCertificate = `${serialNumber?.map((value) => String.fromCharCode(parseInt(value, 16))).join('')}`

        return {
            certificate,
            noCertificate
        }
    } catch (e) {
        console.error(e);
    }
}

