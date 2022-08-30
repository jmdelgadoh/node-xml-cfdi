import { XMLElementParams } from './types';
import { XmlElement } from './classes';

const DEFAULT_PARAMS: XMLElementParams = {namespace: ''}

export function XMLElement(options: XMLElementParams = DEFAULT_PARAMS): Function {
    return (target: Function) => {
        return XmlElement.annotate(target, options);
    }
}
