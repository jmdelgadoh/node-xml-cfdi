import {
    CFDIService,
    ExportacionEnum,
    FormaPagoEnum,
    ImpuestoEnum,
    MesesEnum,
    MetodoPagoEnum,
    MonedaEnum,
    ObjetoImpEnum,
    PeriodicidadEnum,
    RegimenFiscalEnum,
    TipoComprobanteEnum,
    TipoFactorEnum,
    TipoRelacionEnum,
    UsoCfdiEnum
} from '../src/cfdi/4.0';

const test = async () => {
    const cfdi = new CFDIService();

    const comprobante = cfdi.comprobante({
        Version: '4.0',
        Serie: 'Serie',
        Folio: 'Folio',
        Fecha: '2021-12-14T00:18:10',
        Sello: 'e',
        CondicionesDePago: 'CondicionesDePago',
        SubTotal: '200.00',
        Descuento: '1.00',
        Moneda: MonedaEnum.AMD,
        TipoCambio: '1.00',
        Total: '199.16',
        TipoDeComprobante: TipoComprobanteEnum.I,
        Exportacion: ExportacionEnum.E01,
        MetodoPago: MetodoPagoEnum.PUE,
        FormaPago: FormaPagoEnum.FP99,
        LugarExpedicion: '20000',
        Certificado: '',
        NoCertificado: '',
    });

    comprobante.informacionGlobal({
        Año: '2022',
        Meses: MesesEnum.Abril,
        Periodicidad: PeriodicidadEnum.Semanal
    });

    comprobante.cfdiRelacionados({
        TipoRelacion: TipoRelacionEnum.TR01,
        CfdiRelacionado: ['UUID_____________1'],
    })

    comprobante.emisor({
        Rfc: 'EKU9003173C9',
        Nombre: 'ESCUELA KEMPER URGATE',
        RegimenFiscal: RegimenFiscalEnum.RF601
    });

    comprobante.receptor({
        Rfc: 'URE180429TM6',
        Nombre: 'UNIVERSIDAD ROBOTICA ESPAÑOLA',
        DomicilioFiscalReceptor: '65000',
        RegimenFiscalReceptor: RegimenFiscalEnum.RF601,
        UsoCFDI: UsoCfdiEnum.G01
    });

    const concepto = comprobante.concepto({
        ClaveProdServ: '50211503',
        Cantidad: '1.00',
        ClaveUnidad: 'H87',
        Unidad: 'Pieza',
        Descripcion: 'Cigarros',
        ValorUnitario: '200.00',
        Descuento: '1.00',
        Importe: '200.00',
        ObjetoImp: ObjetoImpEnum.OI02
    });

    concepto.Impuestos.traslado({
        Base: '1.00',
        Importe: '0.16',
        Impuesto: ImpuestoEnum.I002,
        TasaOCuota: '0.160000',
        TipoFactor: TipoFactorEnum.Tasa
    });

    concepto.Impuestos.retencion({
        Base: '1.00',
        Importe: '0.00',
        Impuesto: ImpuestoEnum.I001,
        TasaOCuota: '0.100000',
        TipoFactor: TipoFactorEnum.Tasa
    });

    concepto.Impuestos.retencion({
        Base: '1.00',
        Importe: '0.00',
        Impuesto: ImpuestoEnum.I001,
        TasaOCuota: '0.106666',
        TipoFactor: TipoFactorEnum.Tasa
    });

    concepto.aCuentaTerceros({
        RfcACuentaTerceros: 'JUFA7608212V6',
        NombreACuentaTerceros: 'ADRIANA JUAREZ FERNANDEZ',
        RegimenFiscalACuentaTerceros: RegimenFiscalEnum.RF601,
        DomicilioFiscalACuentaTerceros: '29133'
    });

    concepto.informacionAduanera({
        NumeroPedimento: '104738078003832'
    })

    concepto.cuentaPredial({
        Numero: '15956011002'
    });

    const parte = concepto.parte({
        ClaveProdServ: '50211503',
        Cantidad: '2.00',
        ValorUnitario: '100.00',
        Importe: '200.00',
        Descripcion: 'Cigarros',
        Unidad: 'Pieza'
    });

    parte.informacionAduanera({
        NumeroPedimento: '104738078003832'
    });

    concepto.agregarParte(parte);

    comprobante.agregarConcepto(concepto);

    const impuestos = comprobante.impuestos({
        TotalImpuestosTrasladados: '32.00',
        TotalImpuestosRetenidos: '32.00'
    });

    impuestos.traslado({
        Base: '168.00',
        Impuesto: ImpuestoEnum.I001,
        TasaOCuota: '0.160000',
        Importe: '32.00',
        TipoFactor: TipoFactorEnum.Tasa
    });

    impuestos.retencion({
        Impuesto: ImpuestoEnum.I001,
        Importe: '32.00'
    });

    comprobante.agregarImpuestos(impuestos)

    const xml = await cfdi.getXML(comprobante);

    console.log(xml)
}

test()
