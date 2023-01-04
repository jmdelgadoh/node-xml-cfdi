import { AttributesComprobanteInformacionGlobalElement, CFDI_NAME_SPACE, MesesEnum, PeriodicidadEnum } from '..';
import { XMLAttribute, XMLElement } from "../../xml-decorator";

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
