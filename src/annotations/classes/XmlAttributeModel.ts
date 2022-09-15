import {XmlElementModel} from "./XmlElementModel";
import {XmlAttributeOptions} from "../types";

export class XmlAttributeModel {
    public name: string;

    constructor(private options: XmlAttributeOptions) {
        const {namespace, name} = options;

        this.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    static annotate(target: Function, key: string, options: XmlAttributeOptions = {}): void {
        const element = XmlElementModel.getOrCreateIfNotExists(target);

        element.addAttribute(new XmlAttributeModel(options));
    }
}