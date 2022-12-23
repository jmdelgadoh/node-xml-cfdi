import {XmlChildOptions} from "../types";
import { XmlElementModel } from './XmlElementModel';

export class XmlChildModel {
    public name: string;

    constructor(options: XmlChildOptions) {
        const {namespace = '', name} = options;

        this.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    static annotate(target: Function, key: string, options: XmlChildOptions = {}, descriptor?: PropertyDescriptor): void {
        const element = XmlElementModel.getOrCreateIfNotExists(target);

        options.name = options.name || key;

        const child = new XmlChildModel(options);

        element.addChild(child);
    }
}
