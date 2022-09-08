import {XmlElementBase} from "./XmlElementBase";
import {XMLAttributeParams} from "../types";

export class XmlAttributeBase {
    public name: string;

    constructor(private options: XMLAttributeParams) {
        const {namespace, name} = options;

        this.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    static annotate(target: Function, key: string, options: XMLAttributeParams = {}): void {
        const element = XmlElementBase.getOrCreateIfNotExists(target);

        element.addAttribute(new XmlAttributeBase(options));
    }
}