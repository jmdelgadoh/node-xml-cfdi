import { service } from './service';

export const printResult = async (xml: string) => {
    const path = await service.saveXml(xml);

    console.info('Comprobante en: ', path);
}
