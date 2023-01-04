import { ComprobanteConceptoInformacionAduanera } from '.';
import { XMLElement } from '../../xml-decorator';
import { CFDI_NAME_SPACE } from '..';

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'InformacionAduanera',
})
export class ComprobanteConceptoParteInformacionAduanera extends ComprobanteConceptoInformacionAduanera {
}
