import {XmlElementOptions} from "../types";
import {XmlAttributeModel} from "./XmlAttributeModel";
import { XmlChildModel } from './XmlChildModel';

export class XmlElementModel {
    public name: string;
    public attributes: XmlAttributeModel[] = [];
    public children: XmlChildModel[] = [];

    constructor() {}

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

    addChild(child: XmlChildModel): void {
        if (!this.children) this.children = [];

        this.children.push(child);
    }

    public addAttribute(attribute: XmlAttributeModel): void {
        if (!this.attributes) this.attributes = [];

        this.attributes.push(attribute)
    }

    static serialize(object: any): string {
        const element = this.getXMLElement(object);

        const schema = this.getSchema(element);

        console.log(JSON.stringify(schema, null, 3));


        // const {root, entity} = this.getRootAndEntity(args);
        // const schema = this.getSchema(entity);

        // console.log(JSON.stringify(schema))

        return ''; // js2xmlparser.parse(root, schema, PARSER_OPTIONS)
    }

    private getSchema(entity: any): any {
        const object: any = {};

        const attrProperty = '@';

        if (this.attributes) {
            object[attrProperty] = {};
            this.attributes.forEach(attr => attr.setSchema(object[attrProperty], entity));
        }

        // if (this.children) {
        //     this.children.forEach(child => child.setSchema(object, entity, isAsync, schemaOptions));
        // }

        return object;

    }


}

const META_KEY = 'design:xml:element';
