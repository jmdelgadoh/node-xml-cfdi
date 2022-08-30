import { DEFAULT_ATTRIBUTE_PARAMS } from './utils';
import { XMLAttributeParams } from './types';
import { XmlAttribute } from './classes';

export function XMLAttribute({namespace, name}: XMLAttributeParams = DEFAULT_ATTRIBUTE_PARAMS): Function {
    return (target: Function, propertyKey: string) => {
        const elementName = `${namespace}${namespace != '' ? ':' : ''}${name || target.name}`;

        console.log(elementName)

        return XmlAttribute.annotate(target, elementName);
    }
}
