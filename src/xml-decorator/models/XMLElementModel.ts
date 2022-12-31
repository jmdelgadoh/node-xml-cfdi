import 'reflect-metadata';
import { XMLChildModel } from "./XMLChildModel";
import { XMLAttributeModel } from "./XMLAttributeModel";
import { XmlElementOption } from "../types";
import { Attributes, Element, js2xml } from "xml-js";

const META_KEY = 'design:xml:element';

export class XMLElementModel {
    private name: string;
    private options: XmlElementOption;
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

        element.options = options
    }

    static getXMLElement(target: any): XMLElementModel | undefined {
        return Reflect.getMetadata(META_KEY, target);
    }

    static setXMLElement(target: any, element: XMLElementModel): void {
        return Reflect.defineMetadata(META_KEY, element, target);
    }

    static getGlobalTags(entity: any, obj: any = {}): any {
        const element = XMLElementModel.getXMLElement(entity);

        if (typeof element !== 'undefined') {
            const xmlns = element?.options?.xmlns;

            // Se sacan los espacios de nombres y si existe los concatena al objeto recibido
            if (xmlns && xmlns.length) {
                xmlns.forEach(value => {
                    if (`xmlns:${value.namespace}` in obj) {
                        if (!`${obj[`xmlns:${value.namespace}`]}`.includes(value.value)) {
                            obj[`xmlns:${value.namespace}`] = `${obj[`xmlns:${value.namespace}`]} ${value.value}`
                        }
                    } else {
                        obj = {
                            [`xmlns:${value.namespace}`]: value.value,
                            ...obj,
                        }
                    }
                })
            }

            const schemaLocation = element?.options?.schemaLocation;

            // Se sacan las locaciones de esquema y si existe los concatena al objeto recibido
            if (schemaLocation && schemaLocation.length) {
                schemaLocation.forEach(value => {
                    if (`xmlns:schemaLocation` in obj) {
                        if (!`${obj[`xmlns:schemaLocation`]}`.includes(value)) {
                            obj[`xmlns:schemaLocation`] = `${obj[`xmlns:schemaLocation`]} ${value}`
                        }
                    } else {
                        obj = {
                            ...obj,
                            ['xmlns:schemaLocation']: value
                        }
                    }
                })
            }

            if (element.children) {
                element.children.forEach(child => {
                    obj = child.getGlobalTag(entity, obj)
                })
            }
        }

        return obj

    }

    static serialize(entity: any): string {
        const schema = this.getSchema(entity);

        const tags = this.getGlobalTags(entity);

        schema.attributes = {
            ...schema.attributes,
            ...tags
        }

        const xmlJson = {
            declaration: {
                attributes: {
                    version: '1.0',
                    encoding: 'utf-8'
                }
            },
            elements: [schema]
        };

        return js2xml(xmlJson, {spaces: 4});
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
