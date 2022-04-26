"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _4_0_1 = require("../src/cfdi/4.0");
const test = async () => {
    const cfdi = new _4_0_1.CFDIService();
    const comprobante = cfdi.comprobante({
        Version: '4.0',
        Serie: 'Serie',
        Folio: 'Folio',
        Fecha: '2021-12-14T00:18:10',
        Sello: 'e',
        CondicionesDePago: 'CondicionesDePago',
        SubTotal: '200.00',
        Descuento: '1.00',
        Moneda: _4_0_1.MonedaEnum.AMD,
        TipoCambio: '1.00',
        Total: '199.16',
        TipoDeComprobante: _4_0_1.TipoComprobanteEnum.I,
        Exportacion: _4_0_1.ExportacionEnum.E01,
        MetodoPago: _4_0_1.MetodoPagoEnum.PUE,
        FormaPago: _4_0_1.FormaPagoEnum.FP99,
        LugarExpedicion: '20000',
        Certificado: '',
        NoCertificado: '',
    });
    comprobante.informacionGlobal({
        Año: '2022',
        Meses: _4_0_1.MesesEnum.Abril,
        Periodicidad: _4_0_1.PeriodicidadEnum.Semanal
    });
    comprobante.cfdiRelacionados({
        TipoRelacion: _4_0_1.TipoRelacionEnum.TR01,
        CfdiRelacionado: ['UUID_____________1'],
    });
    comprobante.emisor({
        Rfc: 'EKU9003173C9',
        Nombre: 'ESCUELA KEMPER URGATE',
        RegimenFiscal: _4_0_1.RegimenFiscalEnum.RF601
    });
    comprobante.receptor({
        Rfc: 'URE180429TM6',
        Nombre: 'UNIVERSIDAD ROBOTICA ESPAÑOLA',
        DomicilioFiscalReceptor: '65000',
        RegimenFiscalReceptor: _4_0_1.RegimenFiscalEnum.RF601,
        UsoCFDI: _4_0_1.UsoCfdiEnum.G01
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
        ObjetoImp: _4_0_1.ObjetoImpEnum.OI02
    });
    concepto.Impuestos.traslado({
        Base: '1.00',
        Importe: '0.16',
        Impuesto: _4_0_1.ImpuestoEnum.I002,
        TasaOCuota: '0.160000',
        TipoFactor: _4_0_1.TipoFactorEnum.Tasa
    });
    concepto.Impuestos.retencion({
        Base: '1.00',
        Importe: '0.00',
        Impuesto: _4_0_1.ImpuestoEnum.I001,
        TasaOCuota: '0.100000',
        TipoFactor: _4_0_1.TipoFactorEnum.Tasa
    });
    concepto.Impuestos.retencion({
        Base: '1.00',
        Importe: '0.00',
        Impuesto: _4_0_1.ImpuestoEnum.I001,
        TasaOCuota: '0.106666',
        TipoFactor: _4_0_1.TipoFactorEnum.Tasa
    });
    concepto.aCuentaTerceros({
        RfcACuentaTerceros: 'JUFA7608212V6',
        NombreACuentaTerceros: 'ADRIANA JUAREZ FERNANDEZ',
        RegimenFiscalACuentaTerceros: _4_0_1.RegimenFiscalEnum.RF601,
        DomicilioFiscalACuentaTerceros: '29133'
    });
    concepto.informacionAduanera({
        NumeroPedimento: '104738078003832'
    });
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
    const xml = await cfdi.getXML(comprobante);
    console.log(xml);
};
test();
