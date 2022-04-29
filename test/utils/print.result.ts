import { service } from './service';

export const printResult = async (xml: string) => {
    const validateResult = await service.validateXML(xml);

    const path = await service.saveXml(xml);

    console.info('Comprobante en: ', path);

    console.info('Resultado:  ', validateResult);
}
