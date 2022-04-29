import { ComprobanteEmisor, RegimenFiscalEnum } from '../../src';

export const emisor = new ComprobanteEmisor({
    Rfc: 'OÑO120726RX3',
    Nombre: 'ORGANICOS ÑAVEZ OSORIO',
    RegimenFiscal: RegimenFiscalEnum.RF601
});
