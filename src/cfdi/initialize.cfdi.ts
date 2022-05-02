import { CertificateParams, CFDIService, CFDIServiceParams } from './index';

type InitializeCfdiParams = {} & CFDIServiceParams & CertificateParams;

export const initializeCfdi = (params: InitializeCfdiParams = {}): CFDIService => {
    const cfdi = new CFDIService({...params});

    cfdi.setCetificatePath({...params})

    return cfdi
}
