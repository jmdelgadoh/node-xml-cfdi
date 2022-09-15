import 'reflect-metadata';
import {XmlAttributeOptions} from './types';
import {XmlAttributeModel} from "./classes";

export const XmlAttribute = (options: XmlAttributeOptions = {}) => {
    return (target: any, key: string, descriptor?: TypedPropertyDescriptor<any>) => {
        return XmlAttributeModel.annotate(target, key, options)
    }
}

