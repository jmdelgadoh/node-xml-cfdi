import 'reflect-metadata';
import {XmlElementOptions} from './types';
import {XmlElementModel} from "./classes";

export const XmlElement = (options: XmlElementOptions = {}) => {
    return (target: any) => XmlElementModel.annotate(target, options)
}


