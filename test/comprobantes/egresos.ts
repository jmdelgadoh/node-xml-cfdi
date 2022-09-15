import {
    Comprobante,
    ComprobanteCfdiRelacionados,
    ComprobanteCfdiRelacionadosCfdiRelacionado,
    ComprobanteConcepto,
    ComprobanteConceptoImpuestos,
    ComprobanteConceptoImpuestosTraslado,
    ComprobanteImpuestos,
    ComprobanteImpuestosTraslado,
    ExportacionEnum,
    FormaPagoEnum,
    ImpuestoEnum,
    MetodoPagoEnum,
    MonedaEnum,
    ObjetoImpEnum,
    TipoComprobanteEnum,
    TipoFactorEnum,
    TipoRelacionEnum,
} from '../../src';
import {emisor} from '../utils/emisor';
import {service} from '../utils/service';
import {receptor} from '../utils/receptor';
import {XmlElementModel} from "../../src/annotations/classes";

export const testComprobanteEgresos = async () => {
    console.info(`=== === === === === Comprobante de tipo egreso === === === === ===
    `);
    /*
    * Se crea el comprobante
    * */
    const comprobante = new Comprobante({
        Version: '4.0',
        Serie: 'A',
        Folio: 'MYLF-54',
        Fecha: '2022-03-15T07:33:48',
        FormaPago: FormaPagoEnum.FP01,
        Moneda: MonedaEnum.MXN,
        SubTotal: '172.41',
        Descuento: '0.00',
        Total: '200.00',
        TipoDeComprobante: TipoComprobanteEnum.E,
        Exportacion: ExportacionEnum.E01,
        MetodoPago: MetodoPagoEnum.PUE,
        LugarExpedicion: '77725',
    });

    const cfdiRelacionados = new ComprobanteCfdiRelacionados({
        TipoRelacion: TipoRelacionEnum.TR01
    });

    const cfdiRelacionado = new ComprobanteCfdiRelacionadosCfdiRelacionado({
        UUID: '327a9930-afe7-42f8-b8ca-532b44d13566\t'
    })

    cfdiRelacionados.CfdiRelacionado.push(cfdiRelacionado);

    comprobante.CfdiRelacionados.push(cfdiRelacionados)

    comprobante.Emisor = emisor;

    comprobante.Receptor = receptor;

    /*
    * Se declara el concepto 1 con sus impuestos trasladados
    * */
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
    });

    concepto1Impuestos.Traslados.push(concepto1Traslados);

    concepto1.Impuestos = concepto1Impuestos;

    comprobante.Conceptos.push(concepto1);

    /*
    * Se declaran los impuestos
    * */
    const impuestos = new ComprobanteImpuestos({
        TotalImpuestosTrasladados: '27.59',
    });

    const traslado = new ComprobanteImpuestosTraslado({
        Base: '172.41',
        Impuesto: ImpuestoEnum.I002,
        TasaOCuota: '0.160000',
        Importe: '27.59',
        TipoFactor: TipoFactorEnum.Tasa
    })

    impuestos.Traslados.push(traslado);

    comprobante.Impuestos = impuestos;

    const xmlSellado = await service.getXMLSellado(comprobante);

    XmlElementModel.serialize(comprobante)

    // console.log(JSON.stringify(comprobante, null, 3))

    // await printResult(xmlSellado);
}
