import {MesesEnum, PeriodicidadEnum} from '../catalog/enums';
import {AttributesComprobanteInformacionGlobalElement} from '../types';
import {XmlAttribute} from '../../annotations';

export class ComprobanteInformacionGlobal {
    @XmlAttribute()
    public Periodicidad: PeriodicidadEnum;

    @XmlAttribute()
    public Meses: MesesEnum;

    @XmlAttribute({name: 'Año'})
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
