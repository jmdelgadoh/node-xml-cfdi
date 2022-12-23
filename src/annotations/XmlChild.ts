import 'reflect-metadata';
import {XmlAttributeOptions} from './types';
import { XmlChildModel } from "./classes";

export const XmlChild = (options: XmlAttributeOptions = {}) => {
    return (target: any, key: string, descriptor?: PropertyDescriptor) => {
        return XmlChildModel.annotate(target, key, options, descriptor)
    }
}

