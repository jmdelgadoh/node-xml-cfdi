import { MesesEnum, PeriodicidadEnum } from '../catalog/enums';
import { AttributesComprobanteInformacionGlobalElement } from '../types';
import { XmlAttribute } from '../../annotations';

export class ComprobanteInformacionGlobal {
    @XmlAttribute({required: true})
    public Periodicidad: PeriodicidadEnum;

    @XmlAttribute({required: true})
    public Meses: MesesEnum;

    @XmlAttribute({required: true, name: 'Año'})
    public Anio: string;

    constructor(params: AttributesComprobanteInformacionGlobalElement) {
        this.Attributes = params;
    }

    set Attributes(params: AttributesComprobanteInformacionGlobalElement) {
        this.Periodicidad = params.Periodicidad;
        this.Meses = params.Meses;
        this.Anio = params.Anio;
    }

    get Attributes(): AttributesComprobanteInformacionGlobalElement {
        return {
            Periodicidad: this.Periodicidad,
            Meses: this.Meses,
            Anio: this.Anio
        }
    }
}
