import {XmlElementOptions} from "../types";
import {XmlAttributeModel} from "./XmlAttributeModel";

export class XmlElementModel {
    public name: string;
    public attributes: XmlAttributeModel[] = [];
    private elements: XmlElementModel[] = [];

    constructor() { // private options: XmlElementOptions

    }

    static annotate(target: any, options: XmlElementOptions): void {
        const {namespace = '', name = target.name} = options;

        const element = this.getOrCreateIfNotExists(target.prototype);

        element.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    static getXMLElement(target: any): XmlElementModel | undefined {
        return Reflect.getMetadata(META_KEY, target)
    }

    static setXMLElement(target: any, element: XmlElementModel): void {
        return Reflect.defineMetadata(META_KEY, element, target);
    }

    static getOrCreateIfNotExists(target: any): XmlElementModel {
        let element = this.getXMLElement(target);

        if (!element) {
            element = new XmlElementModel();
            this.setXMLElement(target, element);
        }

        return element;
    }

    public addAttribute(attribute: XmlAttributeModel): void {
        if (!this.attributes) this.attributes = [];

        this.attributes.push(attribute)
    }

    static serialize(object: any): string {
        const element = this.getXMLElement(object);

        // console.log(JSON.stringify(element, null, 3))

        // const {root, entity} = this.getRootAndEntity(args);
        // const schema = this.getSchema(entity);

        // console.log(JSON.stringify(schema))

        return ''; // js2xmlparser.parse(root, schema, PARSER_OPTIONS)
    }
}

const META_KEY = 'design:xml:element';