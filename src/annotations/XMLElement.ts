import { XMLElementParams } from './types';
import { XmlElement } from './classes';

const DEFAULT_PARAMS: XMLElementParams = {namespace: ''}

export function XMLElement({namespace, name}: XMLElementParams = DEFAULT_PARAMS): Function {
    return (target: Function) => {
        const elementName = `${namespace}${namespace != '' ? ':' : ''}${name || target.name}`;

        console.log(elementName)

        return XmlElement.annotate(target.prototype, {});
    }
}
