import {
    CFDIService,
    Comprobante,
    ComprobanteConcepto,
    ComprobanteConceptoImpuestos,
    ComprobanteConceptoImpuestosRetencion,
    ComprobanteConceptoImpuestosTraslado,
    ComprobanteEmisor,
    ComprobanteImpuestos,
    ComprobanteImpuestosRetencion,
    ComprobanteImpuestosTraslado,
    ComprobanteReceptor,
    ExportacionEnum,
    FormaPagoEnum,
    ImpuestoEnum,
    MetodoPagoEnum,
    MonedaEnum,
    ObjetoImpEnum,
    RegimenFiscalEnum,
    TipoComprobanteEnum,
    TipoFactorEnum,
    UsoCfdiEnum
} from '../src';

const test = async () => {
    const cfdi = new CFDIService({
        pathXsdCfdi40: 'C:\\Users\\Desarrollo\\Documents\\CFDI40\\xsd\\cfdv40.xsd'
    });

    cfdi.setCetificatePath({
        pathCertificate: 'C:\\Users\\Desarrollo\\Documents\\system\\CSD\\CSD_ORGANICOS_+æAVEZ_OSORIO_S.A_DE_C.V_O+æO120726RX3_20190620_155105s.cer',
        pathKey: 'C:\\Users\\Desarrollo\\Documents\\system\\CSD\\CSD_ORGANICOS_ÑAVEZ_OSORIO_S.A_DE_C.V_OÑO120726RX3_20190620_155105.key',
        password: '12345678a'
    })

    const comprobante = new Comprobante({
        Version: '4.0',
        Serie: 'A',
        Folio: 'MYLF-54',
        Fecha: '2022-03-15T07:33:48',
        FormaPago: FormaPagoEnum.FP01,
        Moneda: MonedaEnum.MXN,
        SubTotal: '737.07',
        Descuento: '0.00',
        Total: '855.01',
        TipoDeComprobante: TipoComprobanteEnum.I,
        Exportacion: ExportacionEnum.E01,
        MetodoPago: MetodoPagoEnum.PUE,
        LugarExpedicion: '77725',
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
        Rfc: 'OÑO120726RX3',
        Nombre: 'ORGANICOS ÑAVEZ OSORIO',
        RegimenFiscal: RegimenFiscalEnum.RF601
    });

    comprobante.Receptor = new ComprobanteReceptor({
        Rfc: 'MODC980924HK1',
        Nombre: 'CALEB ISAAC MORA DIAZ',
        DomicilioFiscalReceptor: '77725',
        RegimenFiscalReceptor: RegimenFiscalEnum.RF612,
        UsoCFDI: UsoCfdiEnum.G03
    });


    const concepto1 = new ComprobanteConcepto({
        ClaveProdServ: '73152105',
        Cantidad: '1.000000',
        ClaveUnidad: 'DPC',
        Descripcion: '4 Bujias Platino Chevrolet',
        ValorUnitario: '172.41',
        Descuento: '0.00',
        Importe: '172.41',
        ObjetoImp: ObjetoImpEnum.OI02
    });

    const concepto1Impuestos = new ComprobanteConceptoImpuestos();

    const concepto1Traslados = new ComprobanteConceptoImpuestosTraslado({
        Base: '172.41',
        Importe: '27.59',
        Impuesto: ImpuestoEnum.I002,
        TasaOCuota: '0.160000',
        TipoFactor: TipoFactorEnum.Tasa
    })


    // const conceptoRetencion1 = new ComprobanteConceptoImpuestosRetencion({
    //     Base: '1.00',
    //     Impuesto: ImpuestoEnum.I001,
    //     TipoFactor: TipoFactorEnum.Tasa,
    //     TasaOCuota: '0.100000',
    //     Importe: '0.00',
    // });

    // const conceptoRetencion2 = new ComprobanteConceptoImpuestosRetencion({
    //     Base: '1.00',
    //     Impuesto: ImpuestoEnum.I002,
    //     TipoFactor: TipoFactorEnum.Tasa,
    //     TasaOCuota: '0.106666',
    //     Importe: '0.00',
    // });

    concepto1Impuestos.Traslados.push(concepto1Traslados);

    // conceptoImpuestos.Retenciones.push(conceptoRetencion1);
    //
    // conceptoImpuestos.Retenciones.push(conceptoRetencion2);

    concepto1.Impuestos = concepto1Impuestos;

    const concepto2 = new ComprobanteConcepto({
        ClaveProdServ: '01010101',
        Cantidad: '1.000000',
        ClaveUnidad: 'H87',
        Descripcion: 'BRAZO AUXILIAR SYD NISSAN. D21 PATHFINDER 4X2-4X4 87-96',
        ValorUnitario: '564.66',
        Descuento: '0.00',
        Importe: '564.66',
        ObjetoImp: ObjetoImpEnum.OI02
    });

    const concepto2Impuestos = new ComprobanteConceptoImpuestos();

    const concepto2Traslados = new ComprobanteConceptoImpuestosTraslado({
        Base: '564.66',
        Importe: '90.35',
        Impuesto: ImpuestoEnum.I002,
        TasaOCuota: '0.160000',
        TipoFactor: TipoFactorEnum.Tasa
    });

    concepto2Impuestos.Traslados.push(concepto2Traslados);

    concepto2.Impuestos = concepto2Impuestos;


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

    comprobante.Conceptos.push(concepto1);
    comprobante.Conceptos.push(concepto2);

    const impuestos = new ComprobanteImpuestos({
        TotalImpuestosTrasladados: '117.94',
    });

    const traslado = new ComprobanteImpuestosTraslado({
        Base: '737.07',
        Impuesto: ImpuestoEnum.I002,
        TasaOCuota: '0.160000',
        Importe: '117.94',
        TipoFactor: TipoFactorEnum.Tasa
    })

    // const retencion = new ComprobanteImpuestosRetencion({
    //     Impuesto: ImpuestoEnum.I001,
    //     Importe: '0.00'
    // })

    // impuestos.Retenciones.push(retencion);

    impuestos.Traslados.push(traslado);

    comprobante.Impuestos = impuestos;

    // const xml = await cfdi.getXML(comprobante);
    //
    // console.log(xml)


    const xmlSellado = await cfdi.getXMLSellado(comprobante);

    // console.log(xmlSellado)

    const validateResult = await cfdi.validateXML(xmlSellado);

    // console.log(validateResult);
}

test()
