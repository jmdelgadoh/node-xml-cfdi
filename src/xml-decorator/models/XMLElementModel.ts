import 'reflect-metadata';
import { XMLChildModel } from "./XMLChildModel";
import { XMLAttributeModel } from "./XMLAttributeModel";
import { XmlElementOption } from "../types";
import { Attributes, Element } from "xml-js";

const META_KEY = 'design:xml:element';

export class XMLElementModel {
    private name: string;
    private children: XMLChildModel[];
    private attributes: XMLAttributeModel[];

    public addAttribute(attribute: XMLAttributeModel): void {
        if (!this.attributes) this.attributes = [];

        this.attributes.push(attribute);
    }

    public addChild(child: XMLChildModel): void {
        if (!this.children) this.children = [];

        this.children.push(child);
    }

    static annotate(target: any, options: XmlElementOption): void {
        const {namespace = '', name = target.name} = options;

        let element = this.getOrCreateIfNotExists(target.prototype);

        element.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    static getXMLElement(target: any): XMLElementModel | undefined {
        return Reflect.getMetadata(META_KEY, target);
    }

    static setXMLElement(target: any, element: XMLElementModel): void {
        return Reflect.defineMetadata(META_KEY, element, target);
    }

    static serialize(entity: any): string {
        const schema = this.getSchema(entity);

        //console.log(JSON.stringify(schema, null, 3))

        return '';
    }

    static getSchema(value: any | any[]): any {
        if (Array.isArray(value)) {
            return value.map(childValue => this.processSchema(childValue));
        }

        return this.processSchema(value);
    }

    static getOrCreateIfNotExists(target: any): XMLElementModel {
        let element = this.getXMLElement(target);

        if (!element) {
            element = new XMLElementModel();
            this.setXMLElement(target, element);
        }

        return element;
    }

    private static processSchema(entity: any): any {
        if (entity && typeof entity === 'object') {
            const element = XMLElementModel.getXMLElement(entity);

            if (element) {
                return element.getSchema(entity);
            }
        }

        return entity;
    }

    private getSchema(entity: any): Element {
        const element: Element = {
            type: 'element',
            name: this.name,
        }

        const attributes: Attributes = {};

        const elements: Element[] = [];

        if (this.attributes) {
            this.attributes.forEach(attr => attr.setSchema(attributes, entity));

            element.attributes = attributes;
        }

        if (this.children) {
            this.children.forEach(child => child.setSchema(elements, entity));

            element.elements = elements;
        }

        return element;
    }
}
