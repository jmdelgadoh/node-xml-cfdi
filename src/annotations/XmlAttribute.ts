import 'reflect-metadata';
import {XmlAttributeOptions} from './types';
import {XmlAttributeModel} from "./classes";

export const XmlAttribute = (options: XmlAttributeOptions = {}) => {
    return (target: any, key: string, descriptor?: PropertyDescriptor) => {
        return XmlAttributeModel.annotate(target, key, options, descriptor)
    }
}

