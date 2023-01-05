import {
    Comprobante,
    ComprobanteComplemento,
    ComprobanteConcepto,
    ExportacionEnum,
    FormaPagoEnum,
    ImpuestoEnum,
    MonedaEnum,
    ObjetoImpEnum,
    Pagos,
    PagosPago,
    PagosPagoDoctoRelacionado,
    PagosPagoImpuestosDRTrasladosDR,
    PagosPagoImpuestosP,
    PagosPagoImpuestosPTrasladoP,
    TipoComprobanteEnum,
    TipoFactorEnum
} from '../../src';
import { emisor } from '../utils/emisor';
import { receptor } from '../utils/receptor';
import { service } from "../utils/service";
import { PagosPagoImpuestosDR } from "../../src/cfdi/complements/Pagos/classes/pagos.pago.impuestos.dr";

export const testComprobanteIngresos = async () => {
    /*
    * Se crea el comprobante
    * */
    const comprobante = new Comprobante({
        Serie: 'A',
        Folio: 'MYLP-54',
        Fecha: '2022-03-15T07:33:48',
        Moneda: MonedaEnum.XXX,
        SubTotal: '0.00',
        Descuento: '0.00',
        Total: '0.00',
        TipoDeComprobante: TipoComprobanteEnum.P,
        Exportacion: ExportacionEnum.E01,
        LugarExpedicion: '77725',
    });

    comprobante.Emisor = emisor;

    comprobante.Receptor = receptor;

    /*
    * Se declara el concepto 1 con sus impuestos trasladados
    * */
    const concepto1 = new ComprobanteConcepto({
        ClaveProdServ: '84111506',
        Cantidad: '1',
        ClaveUnidad: 'ACT',
        Descripcion: 'Pago',
        ValorUnitario: '0.00',
        Descuento: '0.00',
        Importe: '0.00',
        ObjetoImp: ObjetoImpEnum.OI01
    });

    comprobante.Conceptos.push(concepto1);

    /*
        * Complemento Pago
    * */

    comprobante.Complemento = new ComprobanteComplemento();

    const pagos = new Pagos({
        MontoTotalPagos: '6778.00',
        TotalTrasladosBaseIVA16: '5843.11',
        TotalTrasladosImpuestoIVA16: '934.90',
        TotalTrasladosBaseIVA0: '0.00'
    });

    const pago1 = new PagosPago({
        FechaPago: "2022-09-09T17:33:38",
        FormaDePagoP: FormaPagoEnum.FP01,
        MonedaP: MonedaEnum.MXN,
        TipoCambioP: "1",
        Monto: "6778.00",
    });

    const dr1 = new PagosPagoDoctoRelacionado({
        IdDocumento: "b7c8d2bf-cb4e-4f84-af89-c68b6731206a",
        Serie: "FA",
        Folio: "N0000216349",
        MonedaDR: MonedaEnum.MXN,
        EquivalenciaDR: "1",
        NumParcialidad: "2",
        ImpSaldoAnt: "6777.41",
        ImpPagado: "6777.41",
        ImpSaldoInsoluto: "0.00",
        ObjetoImpDR: ObjetoImpEnum.OI02,
    })

    dr1.ImpuestosDR = new PagosPagoImpuestosDR();

    const drt1 = new PagosPagoImpuestosDRTrasladosDR({
        BaseDR: "5842.600000",
        ImpuestoDR: ImpuestoEnum.I002,
        TipoFactorDR: TipoFactorEnum.Tasa,
        TasaOCuotaDR: "0.160000",
        ImporteDR: "934.816000"
    })

    dr1.ImpuestosDR.TrasladosDR.push(drt1)

    const dr2 = new PagosPagoDoctoRelacionado({
        IdDocumento: "94f4e541-bb38-4355-b779-02d337dc9720",
        Serie: "FA",
        Folio: "SI000032690",
        MonedaDR: MonedaEnum.MXN,
        EquivalenciaDR: "1",
        NumParcialidad: "1",
        ImpSaldoAnt: "9610.81",
        ImpPagado: "0.59",
        ImpSaldoInsoluto: "9610.22",
        ObjetoImpDR: ObjetoImpEnum.OI02,
    })

    dr2.ImpuestosDR = new PagosPagoImpuestosDR();

    const drt2 = new PagosPagoImpuestosDRTrasladosDR({
        BaseDR: "0.510000",
        ImpuestoDR: ImpuestoEnum.I002,
        TipoFactorDR: TipoFactorEnum.Tasa,
        TasaOCuotaDR: "0.160000",
        ImporteDR: "0.081600"
    })

    dr2.ImpuestosDR.TrasladosDR.push(drt2)

    pago1.DoctoRelacionado.push(dr1);
    pago1.DoctoRelacionado.push(dr2);

    pago1.ImpuestosP = new PagosPagoImpuestosP();

    const pit = new PagosPagoImpuestosPTrasladoP({
        BaseP: "5843.110000",
        ImpuestoP: ImpuestoEnum.I002,
        TipoFactorP: TipoFactorEnum.Tasa,
        TasaOCuotaP: "0.160000",
        ImporteP: "934.897600",
    })

    pago1.ImpuestosP.TrasladosP.push(pit)

    pagos.Pago.push(pago1)

    comprobante.Complemento.Pagos = pagos;

    const xmlSellado = await service.getXMLSellado(comprobante);

    console.log(xmlSellado)
}
