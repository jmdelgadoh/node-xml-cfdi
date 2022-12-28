import { ComprobanteConceptoInformacionAduanera } from './index';
import { XMLElement } from '../../xml-decorator';
import { CFDI_NAME_SPACE } from '../index';

@XMLElement({
    namespace: CFDI_NAME_SPACE,
    name: 'InformacionAduanera',
})
export class ComprobanteConceptoParteInformacionAduanera extends ComprobanteConceptoInformacionAduanera {
}
