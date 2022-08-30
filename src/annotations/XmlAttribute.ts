import 'reflect-metadata';
import { XMLAttributeParams } from './types';

export const XmlAttribute = (options: XMLAttributeParams = DEFAULT_ATTRIBUTE_PARAMS) => {
    return (target: any, key: string) => {
        const {required, name} = options;

        const attrName = name || key;


        let t = Reflect.getMetadata('design:type', target, key);
        console.log(`${key} type: ${t.name}`)
    }
}

const DEFAULT_ATTRIBUTE_PARAMS: XMLAttributeParams = {required: false}
