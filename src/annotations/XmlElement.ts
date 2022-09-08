import 'reflect-metadata';
import {XMLElementParams} from './types';
import {XmlElementBase} from "./classes";

export const XmlElement = (options: XMLElementParams = DEFAULT_ATTRIBUTE_PARAMS) => {
    return (target: any) => XmlElementBase.annotate(target, options)
}

const DEFAULT_ATTRIBUTE_PARAMS: XMLElementParams = {
    name: '',
    namespace: ''
};


