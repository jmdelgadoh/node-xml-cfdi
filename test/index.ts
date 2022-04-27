import {
    CFDIService,
    Comprobante,
    ComprobanteCfdiRelacionados, ComprobanteCfdiRelacionadosCfdiRelacionado,
    ComprobanteConcepto,
    ComprobanteConceptoACuentaTerceros,
    ComprobanteConceptoCuentaPredial,
    ComprobanteConceptoImpuestos,
    ComprobanteConceptoImpuestosRetencion,
    ComprobanteConceptoImpuestosTraslado,
    ComprobanteConceptoInformacionAduanera,
    ComprobanteConceptoParte,
    ComprobanteConceptoParteInformacionAduanera,
    ComprobanteEmisor,
    ComprobanteImpuestos,
    ComprobanteImpuestosRetencion,
    ComprobanteImpuestosTraslado,
    ComprobanteInformacionGlobal,
    ComprobanteReceptor,
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

    const comprobante = new Comprobante({
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

    // comprobante.InformacionGlobal = new ComprobanteInformacionGlobal({
    //     Periodicidad: PeriodicidadEnum.Semanal,
    //     Meses: MesesEnum.Abril,
    //     Año: '2022',
    // });

    // const cfdiRelacionados = new ComprobanteCfdiRelacionados({
    //     TipoRelacion: TipoRelacionEnum.TR01
    // });
    //
    // const cfdiRelacionado = new ComprobanteCfdiRelacionadosCfdiRelacionado({
    //     UUID: 'UUID_____________1'
    // })
    //
    // cfdiRelacionados.CfdiRelacionado.push(cfdiRelacionado)
    //
    // comprobante.CfdiRelacionados.push(cfdiRelacionados);

    comprobante.Emisor = new ComprobanteEmisor({
        Rfc: 'EKU9003173C9',
        Nombre: 'ESCUELA KEMPER URGATE',
        RegimenFiscal: RegimenFiscalEnum.RF601
    });

    comprobante.Receptor = new ComprobanteReceptor({
        Rfc: 'URE180429TM6',
        Nombre: 'UNIVERSIDAD ROBOTICA ESPAÑOLA',
        DomicilioFiscalReceptor: '65000',
        RegimenFiscalReceptor: RegimenFiscalEnum.RF601,
        UsoCFDI: UsoCfdiEnum.G01
    });


    const concepto = new ComprobanteConcepto({
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

    const conceptoImpuestos = new ComprobanteConceptoImpuestos();

    const conceptoTraslados = new ComprobanteConceptoImpuestosTraslado({
        Base: '1.00',
        Importe: '0.16',
        Impuesto: ImpuestoEnum.I002,
        TasaOCuota: '0.160000',
        TipoFactor: TipoFactorEnum.Tasa
    })


    const conceptoRetencion1 = new ComprobanteConceptoImpuestosRetencion({
        Base: '1.00',
        Impuesto: ImpuestoEnum.I001,
        TipoFactor: TipoFactorEnum.Tasa,
        TasaOCuota: '0.100000',
        Importe: '0.00',
    });

    const conceptoRetencion2 = new ComprobanteConceptoImpuestosRetencion({
        Base: '1.00',
        Impuesto: ImpuestoEnum.I002,
        TipoFactor: TipoFactorEnum.Tasa,
        TasaOCuota: '0.106666',
        Importe: '0.00',
    });

    conceptoImpuestos.Traslados.push(conceptoTraslados);

    conceptoImpuestos.Retenciones.push(conceptoRetencion1);

    conceptoImpuestos.Retenciones.push(conceptoRetencion2);

    concepto.Impuestos = conceptoImpuestos;

    // concepto.ACuentaTerceros = new ComprobanteConceptoACuentaTerceros({
    //     RfcACuentaTerceros: 'JUFA7608212V6',
    //     NombreACuentaTerceros: 'ADRIANA JUAREZ FERNANDEZ',
    //     RegimenFiscalACuentaTerceros: RegimenFiscalEnum.RF601,
    //     DomicilioFiscalACuentaTerceros: '29133'
    // });
    //
    // const informacionAduanera = new ComprobanteConceptoInformacionAduanera({
    //     NumeroPedimento: '104738078003832'
    // })
    //
    // concepto.InformacionAduanera.push(informacionAduanera)
    //
    // const cuentaPredial = new ComprobanteConceptoCuentaPredial({
    //     Numero: '15956011002'
    // })
    //
    // concepto.CuentaPredial.push(cuentaPredial)
    //
    // const parte = new ComprobanteConceptoParte({
    //     ClaveProdServ: '50211503',
    //     Cantidad: '2.00',
    //     ValorUnitario: '100.00',
    //     Importe: '200.00',
    //     Descripcion: 'Cigarros',
    //     Unidad: 'Pieza'
    // });
    //
    // const parteInformacionAduanera = new ComprobanteConceptoParteInformacionAduanera({
    //     NumeroPedimento: '104738078003832'
    // })
    //
    // parte.InformacionAduanera.push(parteInformacionAduanera)
    //
    // concepto.Parte.push(parte);

    comprobante.Conceptos.push(concepto);

    const impuestos = new ComprobanteImpuestos({
        TotalImpuestosTrasladados: '0.16',
        TotalImpuestosRetenidos: '0.00'
    });

    const retencion = new ComprobanteImpuestosRetencion({
        Impuesto: ImpuestoEnum.I001,
        Importe: '0.00'
    })

    impuestos.Retenciones.push(retencion);

    const traslado = new ComprobanteImpuestosTraslado({
        Base: '1.00',
        Impuesto: ImpuestoEnum.I002,
        TasaOCuota: '0.160000',
        Importe: '0.16',
        TipoFactor: TipoFactorEnum.Tasa
    })

    impuestos.Traslados.push(traslado);

    comprobante.Impuestos = impuestos;

    const xml = await cfdi.getXML(comprobante);

    console.log(xml)
}

test()
