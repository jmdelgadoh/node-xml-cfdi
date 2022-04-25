import {
    CFDIService,
    ExportacionEnum,
    FormaPagoEnum,
    MetodoPagoEnum,
    MonedaEnum,
    RegimenFiscalEnum,
    TipoComprobanteEnum,
    UsoCfdiEnum
} from '../src/cfdi/4.0';

const test = async () => {
    const cfdi = new CFDIService();

    cfdi.comprobante({
        Version: '4.0',
        Folio: 'MYLF-85',
        Serie: 'A',
        Fecha: '2022-03-21T01:13:49',
        FormaPago: FormaPagoEnum.FP01,
        Sello: '',
        Certificado: '',
        NoCertificado: '',
        Moneda: MonedaEnum.MXN,
        TipoDeComprobante: TipoComprobanteEnum.I,
        Exportacion: ExportacionEnum.E01,
        LugarExpedicion: '77725',
        Descuento: '0.00',
        Total: '1455.01',
        SubTotal: '1254.31',
        MetodoPago: MetodoPagoEnum.PUE
    });

    // cfdi.informacionGlobal({
    //     Año: '2022',
    //     Meses: MesesEnum.Abril,
    //     Periodicidad: PeriodicidadEnum.Semanal
    // });

    // cfdi.cfdiRelacionados({
    //     TipoRelacion: TipoRelacionEnum.TR01,
    //     CfdiRelacionado: ['UUID_____________1'],
    // })

    cfdi.emisor({
        Rfc: 'EKU9003173C9',
        Nombre: 'ESCUELA KEMPER URGATE',
        RegimenFiscal: RegimenFiscalEnum.RF601
    });

    cfdi.receptor({
        Rfc: 'URE180429TM6',
        Nombre: 'UNIVERSIDAD ROBOTICA ESPAÑOLA',
        DomicilioFiscalReceptor: '65000',
        RegimenFiscalReceptor: RegimenFiscalEnum.RF601,
        UsoCFDI: UsoCfdiEnum.G01
    });

    const xml = await cfdi.getXML();

    console.log(xml)
}

test()
