import { MesesEnum, PeriodicidadEnum } from '../catalog/enums';
import { AttributesComprobanteInformacionGlobalElement } from '../types';
import { XMLAttribute, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE } from '../index';

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'InformacionGlobal',
})
export class ComprobanteInformacionGlobal {
    @XMLAttribute({name: 'Periodicidad'})
    public Periodicidad: PeriodicidadEnum;

    @XMLAttribute({name: 'Meses'})
    public Meses: MesesEnum;

    @XMLAttribute({name: 'Año'})
    public Anio: string;

    constructor(params: AttributesComprobanteInformacionGlobalElement) {
        this.Periodicidad = params.Periodicidad;
        this.Meses = params.Meses;
        this.Anio = params.Anio;
    }
}
