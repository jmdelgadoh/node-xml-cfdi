import { testComprobanteIngresos } from './comprobantes/ingresos';
import { testComprobanteEgresos } from './comprobantes/egresos';

const test = async () => {
    await testComprobanteIngresos();

    await testComprobanteEgresos();
}

test()
