import {initializeCfdi} from '../../src';

export const service = initializeCfdi({
    pathCertificate: 'C:\\var\\var\\www\\CSD\\30001000000400002332.cer',
    pathKey: 'C:\\var\\var\\www\\CSD\\30001000000400002332.key',
    pathXmlFolder: 'C:\\var\\var\\www\\facturas',
    pathXsltCfdi40: 'C:\\var\\var\\www\\xslt\\cadenaoriginal.xslt'
});
