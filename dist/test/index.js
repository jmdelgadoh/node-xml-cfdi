"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _4_0_1 = require("../src/cfdi/4.0");
const test = async () => {
    const cfdi = new _4_0_1.CFDIService();
    cfdi.comprobante({
        Version: '4.0',
        Folio: 'MYLF-85',
        Serie: 'A',
        Fecha: '2022-03-21T01:13:49',
        FormaPago: _4_0_1.FormaPagoEnum.FP01,
        Sello: '',
        Certificado: '',
        NoCertificado: '',
        Moneda: _4_0_1.MonedaEnum.MXN,
        TipoDeComprobante: _4_0_1.TipoComprobanteEnum.I,
        Exportacion: _4_0_1.ExportacionEnum.E01,
        LugarExpedicion: '77725',
        Descuento: '0.00',
        Total: '1455.01',
        SubTotal: '1254.31',
        MetodoPago: _4_0_1.MetodoPagoEnum.PUE
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
    const xml = await cfdi.getXML();
    console.log(xml);
};
test();
