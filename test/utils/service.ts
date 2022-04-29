import { initializeCfdi } from '../../src';

export const service = initializeCfdi({
    pathXsdCfdi40: 'C:\\Users\\Desarrollo\\Documents\\CFDI40\\xsd\\cfdv40.xsd',
    pathXsltCfdi40: 'C:\\Users\\Desarrollo\\Documents\\CFDI40\\xslt\\cadenaoriginal_4_0.xslt',
    pathXmlFolder: 'C:\\Users\\Desarrollo\\Desktop\\xml',
    pathKey: 'C:\\Users\\Desarrollo\\Documents\\system\\CSD\\CSD_ORGANICOS_ÑAVEZ_OSORIO_S.A_DE_C.V_OÑO120726RX3_20190620_155105.key',
    pathCertificate: 'C:\\Users\\Desarrollo\\Documents\\system\\CSD\\CSD_ORGANICOS_+æAVEZ_OSORIO_S.A_DE_C.V_O+æO120726RX3_20190620_155105s.cer',
    password: '12345678a'
});
