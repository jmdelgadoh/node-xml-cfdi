import { XMLAttribute, XMLElement } from "../../xml-decorator";
import { CFDI_NAME_SPACE_IEDU } from "../index";
import { ConceptoComplementoIeduElement } from "../types";

@XMLElement({
    namespace: CFDI_NAME_SPACE_IEDU,
    name: 'instEducativas',
    xmlns: [
        {namespace: CFDI_NAME_SPACE_IEDU, value: 'http://www.sat.gob.mx/iedu'}
    ],
    schemaLocation: ['http://www.sat.gob.mx/iedu', 'http://www.sat.gob.mx/sitio_internet/cfd/iedu/iedu.xsd']
})
export class ConceptoComplementoIEDU {
    @XMLAttribute({name: 'version', required: true})
    version: string;

    @XMLAttribute({name: 'nombreAlumno', required: true})
    nombreAlumno: string;

    @XMLAttribute({name: 'CURP', required: true})
    CURP: string;

    @XMLAttribute({name: 'nivelEducativo', required: true})
    nivelEducativo: string;

    @XMLAttribute({name: 'autRVOE', required: true})
    autRVOE: string;

    @XMLAttribute({name: 'rfcPago'})
    rfcPago?: string;

    constructor(params: ConceptoComplementoIeduElement) {
        this.version = params.version || '1.0';
        this.nombreAlumno = params.nombreAlumno;
        this.CURP = params.CURP;
        this.nivelEducativo = params.nivelEducativo;
        this.autRVOE = params.autRVOE;
        this.rfcPago = params.rfcPago;
    }
}
