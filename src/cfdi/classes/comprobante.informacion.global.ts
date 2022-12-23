import {MesesEnum, PeriodicidadEnum} from '../catalog/enums';
import {AttributesComprobanteInformacionGlobalElement} from '../types';
import { XMLAttribute } from "../../xml-decorator/annotations/XMLAttribute";

export class ComprobanteInformacionGlobal {
    @XMLAttribute({ name: 'Periodicidad'})
    public Periodicidad: PeriodicidadEnum;

    @XMLAttribute({ name: 'Meses'})
    public Meses: MesesEnum;

    @XMLAttribute({name: 'Año'})
    public Anio: string;

    constructor(params: AttributesComprobanteInformacionGlobalElement) {
        this.Periodicidad = params.Periodicidad;
        this.Meses = params.Meses;
        this.Anio = params.Anio;
    }
}
