import { XMLElementModel } from "./XMLElementModel";
import { XmlAttributeOption } from "../types";

export class XMLAttributeModel {
    private readonly name: string;
    private readonly key: string;
    private readonly options: XmlAttributeOption;

    constructor(key: string, name: string, options: XmlAttributeOption) {
        this.key = key;
        this.name = name;
        this.options = options;
    }

    static annotate(target: any, key: string, options: XmlAttributeOption = {}): void {
        const element = XMLElementModel.getOrCreateIfNotExists(target);

        const {namespace = '', name = target.name} = options;

        const attName = `${namespace}${namespace != '' ? ':' : ''}${name}`;

        const attribute = new XMLAttributeModel(key, attName, options)

        element.addAttribute(attribute);
    }

    public setSchema(target: any, entity: any): void {
        const value = entity[this.key];

        if (typeof value !== 'undefined') {
            target[this.name] = value;
        } else if (this.options.required) {
            throw new Error(`ERROR: 004 - El atributo "${this.key}" es requerido`)
        }
    }
}
