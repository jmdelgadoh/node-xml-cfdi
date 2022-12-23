import {XmlElementModel} from "./XmlElementModel";
import { DEFAULT_XML_OPTIONS, XmlAttributeOptions } from "../types";

export class XmlAttributeModel {
    public name: string;

    constructor(private options: XmlAttributeOptions = DEFAULT_XML_OPTIONS) {
        const {namespace, name} = options;

        this.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    static annotate(target: Function, key: string, options: XmlAttributeOptions = DEFAULT_XML_OPTIONS, descriptor?: PropertyDescriptor): void {
        const element = XmlElementModel.getOrCreateIfNotExists(target);

        options.name = options.name || key;

        const attribute = new XmlAttributeModel(options);

        element.addAttribute(attribute);
    }

    public setSchema(target: any, entity: any): void {

        const value = this.options?.getter?.call(null, entity);

        if (value !== void 0) {
            target[this.name] = value;
        } else if (this.options.required) {

            throw new Error(`Attribute ${this.name} is required, but empty.`);
        }
    }
}
