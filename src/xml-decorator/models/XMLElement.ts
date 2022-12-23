import 'reflect-metadata';
import { XMLChild } from "./XMLChild";
import { XMLAttribute } from "./XMLAttribute";
import { DEFAULT_ATTRIBUTE_PROPERTY } from "../utils";
import { ISchemaOptions } from "../interfaces/ISchemaOptions";
import { XmlElementOption } from "../types/xml.element.option.type";

const PARSER_OPTIONS = {
    declaration: {
        encoding: 'UTF-8'
    }
};

const META_KEY = 'design:xml:element';

export class XMLElement {

    private attributes: XMLAttribute[];
    private children: XMLChild[];
    private name?: string;

    static serialize(entity: any): string {
        const schema = this.getSchema(entity);

        // console.log(JSON.stringify(schema, null, 3))

        // console.log('js2xmlparser', JSON.stringify({root, schema, PARSER_OPTIONS}, null, 3))

        return '';
    }

    static getSchema(entities: any[], schemaOptions?: ISchemaOptions): any;
    static getSchema(entity: any, schemaOptions?: ISchemaOptions): any;
    static getSchema(value: any, schemaOptions: ISchemaOptions = {}): any {
        if (Array.isArray(value)) {
            return value.map(childValue => this.processSchema(childValue, false, schemaOptions));
        }

        return this.processSchema(value, false, schemaOptions);
    }

    static getSchemaAsync(entities: any[], schemaOptions?: ISchemaOptions): Promise<any>;
    static getSchemaAsync(entity: any, schemaOptions?: ISchemaOptions): Promise<any>;
    static getSchemaAsync(arg: any, schemaOptions: ISchemaOptions = {}): Promise<any> {

        const processAsync = (entity: any) => {

            return Promise.resolve(this.processSchema(entity, true, schemaOptions));
        };

        if (arg === void 0) Promise.resolve();

        if (Array.isArray(arg)) {

            return Promise.all(arg.map(entity => processAsync(entity)));
        }
        return processAsync(arg);
    }

    static getXMLElement(target: any): XMLElement | undefined {
        return Reflect.getMetadata(META_KEY, target);
    }

    static setXMLElement(target: any, element: XMLElement): void {
        return Reflect.defineMetadata(META_KEY, element, target);
    }

    static getOrCreateIfNotExists(target: any): XMLElement {
        let element = this.getXMLElement(target);

        if (!element) {
            element = new XMLElement();
            this.setXMLElement(target, element);
        }

        return element;
    }

    static annotate(target: any, options: XmlElementOption): void {
        const {namespace = '', name = target.name} = options;

        let element = this.getOrCreateIfNotExists(target.prototype);

        element.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    private static processSchema(entity: any, isAsync: boolean, schemaOptions: ISchemaOptions): any {
        if (entity && typeof entity === 'object') {
            const element = XMLElement.getXMLElement(entity);

            if (element) {
                return element.getSchema(entity, isAsync, schemaOptions);
            }
        }

        return entity;
    }

    addAttribute(attribute: XMLAttribute): void {

        if (!this.attributes) this.attributes = [];

        this.attributes.push(attribute);
    }

    addChild(child: XMLChild): void {

        if (!this.children) this.children = [];

        this.children.push(child);
    }

    private getSchema(entity: any, isAsync: boolean, schemaOptions: ISchemaOptions): void {

        const object: any = {};
        const attrProperty = schemaOptions.attrContainerName || DEFAULT_ATTRIBUTE_PROPERTY;

        if (this.attributes) {
            object[attrProperty] = {};
            this.attributes.forEach(attr => attr.setSchema(object[attrProperty], entity));
        }

        if (this.children) {
            this.children.forEach(child => child.setSchema(object, entity, isAsync, schemaOptions));
        }

        return object;
    }
}
