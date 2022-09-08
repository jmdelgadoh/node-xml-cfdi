import 'reflect-metadata';
import {XMLAttributeParams} from './types';
import {XmlAttributeBase} from "./classes";

export const XmlAttribute = (options: XMLAttributeParams = DEFAULT_ATTRIBUTE_PARAMS) => {
    return (target: any, key: string) => {
        return XmlAttributeBase.annotate(target, key, options)
    }
}

const DEFAULT_ATTRIBUTE_PARAMS: XMLAttributeParams = {
    name: '',
    namespace: ''
};


