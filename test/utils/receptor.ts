import { ComprobanteReceptor, RegimenFiscalEnum, UsoCfdiEnum } from '../../src';

export const receptor = new ComprobanteReceptor({
    Rfc: 'MODC980924HK1',
    Nombre: 'CALEB ISAAC MORA DIAZ',
    DomicilioFiscalReceptor: '77725',
    RegimenFiscalReceptor: RegimenFiscalEnum.RF612,
    UsoCFDI: UsoCfdiEnum.P01
});
