import {
    Comprobante,
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
    TipoFactorEnum
} from '../../src';
import { emisor } from '../utils/emisor';
import { receptor } from '../utils/receptor';
import { service } from "../utils/service";

export const testComprobanteIngresos = async () => {
    console.info(`=== === === === === Comprobante de tipo ingreso === === === === ===
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
        SubTotal: '737.07',
        Descuento: '0.00',
        Total: '855.01',
        TipoDeComprobante: TipoComprobanteEnum.I,
        Exportacion: ExportacionEnum.E01,
        MetodoPago: MetodoPagoEnum.PUE,
        LugarExpedicion: '77725',
    });

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
    * Se declara el concepto 2 con sus impuestos trasladados
    * */
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

    comprobante.Conceptos.push(concepto2);

    /*
    * Se declaran los impuestos
    * */
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

    impuestos.Traslados.push(traslado);

    comprobante.Impuestos = impuestos;

    const xmlSellado = await service.getXMLSellado(comprobante);

    console.log(xmlSellado)
}
