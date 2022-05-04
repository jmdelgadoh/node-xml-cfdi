import 'reflect-metadata';
import { DEFAULT_ATTRIBUTE_PARAMS, META_KEY } from '../utils';
import { XmlAttribute } from './xml.attribute';

export class XmlElement {
    private attributes: XmlAttribute[];
    private children: any[]; // XMLChild
    private root?: string;

    static serialize(entity: any): string;
    static serialize(root: string, entity: any): string;
    static serialize(...args: any[]): string {

        const {root, entity} = this.getRootAndEntity(args);
        const schema = this.getSchema(entity);

        console.log(JSON.stringify(schema))

        return ''; // js2xmlparser.parse(root, schema, PARSER_OPTIONS)
    }

    static serializeAsync(entity: any): Promise<string>;
    static serializeAsync(root: string, entity: any): Promise<string>;
    static serializeAsync(...args: any[]): Promise<string> {

        const {root, entity} = this.getRootAndEntity(args);

        return this.getSchemaAsync(entity)
            .then(schema => '')
            ; // js2xmlparser.parse(root, schema, PARSER_OPTIONS)
    }

    static getSchema(entities: any[], schemaOptions?: any): any;
    static getSchema(entity: any, schemaOptions?: any): any;
    static getSchema(arg: any, schemaOptions: any = {}): any {

        if (arg === void 0) return;

        if (Array.isArray(arg)) {

            return arg.map(entity => this.processSchema(entity, false, schemaOptions));
        }
        return this.processSchema(arg, false, schemaOptions);
    }

    static getSchemaAsync(entities: any[], schemaOptions?: any): Promise<any>;
    static getSchemaAsync(entity: any, schemaOptions?: any): Promise<any>;
    static getSchemaAsync(arg: any, schemaOptions: any = {}): Promise<any> {

        const processAsync = (entity: any) => {

            return Promise.resolve(this.processSchema(entity, true, schemaOptions));
        };

        if (arg === void 0) Promise.resolve();

        if (Array.isArray(arg)) {

            return Promise.all(arg.map(entity => processAsync(entity)));
        }
        return processAsync(arg);
    }

    static getXMLElement(target: any): XmlElement|undefined {

        return Reflect.getMetadata(META_KEY, target);
    }

    static setXMLElement(target: any, element: XmlElement): void {

        return Reflect.defineMetadata(META_KEY, element, target);
    }

    static getOrCreateIfNotExists(target: any): XmlElement {
        let element = this.getXMLElement(target);

        if (!element) {

            element = new XmlElement();
            this.setXMLElement(target, element);
        }

        return element;
    }

    static annotate(target: any, options: any): void {

        let element = this.getOrCreateIfNotExists(target);

        element.root = options.root;
    }

    private static processSchema(entity: any,
                                 isAsync: boolean,
                                 schemaOptions: any): any {
        if (entity && typeof entity === 'object') {

            const element = XmlElement.getXMLElement(entity);
            if (element) {

                return element.getSchema(entity, isAsync, schemaOptions);
            }
        }
        return entity;
    }

    private static getRootAndEntity(args: any[]): {root: string, entity: any} {

        let entity;
        let root;

        if (args.length === 1) {
            entity = args[0];
        } else {
            root = args[0];
            entity = args[1];
        }

        const element = this.getXMLElement(entity);

        if (!root && element && element.root) {
            root = element.root;
        }
        if (!root) {
            // throw new Error('No root defined for entity: ' + JSON.stringify(entity));
        }

        return {root, entity};
    }

    addAttribute(attribute: XmlAttribute): void {

        if (!this.attributes) this.attributes = [];

        this.attributes.push(attribute);
    }

    addChild(child: any): void {

        if (!this.children) this.children = [];

        this.children.push(child);
    }

    private getSchema(entity: any, isAsync: boolean, schemaOptions: any): void {

        const object: any = {};
        const attrProperty = schemaOptions.attrContainerName || DEFAULT_ATTRIBUTE_PARAMS;

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
