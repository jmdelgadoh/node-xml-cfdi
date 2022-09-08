import {XMLElementParams} from "../types";
import {XmlAttributeBase} from "./XmlAttributeBase";

export class XmlElementBase {
    public name: string;
    public attributes: XmlAttributeBase[] = [];
    public elements: XmlElementBase[] = [];

    constructor(private options: XMLElementParams) {
        const {namespace, name} = options;

        this.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    static annotate(target: Function, options: XMLElementParams): void {
        this.getOrCreateIfNotExists(target, options);
    }

    static getXMLElement(target: Function): XmlElementBase | undefined {
        return Reflect.getMetadata(META_KEY, target)
    }

    static getOrCreateIfNotExists(target: Function, options: XMLElementParams = {}): XmlElementBase {
        let element = this.getXMLElement(target);

        if (!element) {
            element = new XmlElementBase({
                ...options,
                name: options?.name || target.name
            });
            this.setXMLElement(target, element);
        }

        return element;
    }

    static setXMLElement(target: Function, element: XmlElementBase): void {
        return Reflect.defineMetadata(META_KEY, element, target);
    }

    public addAttribute(attribute: XmlAttributeBase): void {
        if (!this.attributes) this.attributes = [];

        this.attributes.push(attribute)
    }
}

const META_KEY = 'design:xml:element';