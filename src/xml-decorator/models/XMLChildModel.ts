import { XMLElementModel } from "./XMLElementModel";
import { XmlChildOption } from "../types";

export class XMLChildModel {
    private readonly name: string;
    private readonly key: string;
    private readonly options: XmlChildOption;

    constructor(key: string, name: string, options: XmlChildOption) {
        this.key = key;
        this.name = name;
        this.options = options;
    }

    static annotate(target: any, key: string, options: XmlChildOption = {}): void {
        const element = XMLElementModel.getOrCreateIfNotExists(target);

        const {namespace = '', name = target.name} = options;

        const attName = `${namespace}${namespace != '' ? ':' : ''}${name}`;

        const child = new XMLChildModel(key, attName, options)

        element.addChild(child);
    }

    public setGlobalTag(target: any, parentEntity: any) {
        const entity = parentEntity[this.key];

        const obj = {};

        if (typeof entity !== 'undefined') {
            if (Array.isArray(entity) && entity.length) {
                entity.forEach((value) => {

                })
            } else {
                return XMLElementModel.getGlobalTags(entity)
            }
        }
    }

    public setSchema(target: any[], parentEntity: any) {
        const entity = parentEntity[this.key];

        if (typeof entity !== 'undefined') {
            const schema = XMLElementModel.getSchema(entity);

            if (typeof schema === 'object') {
                if (Array.isArray(schema) && schema.length) {
                    target[target.length] = {
                        type: 'element',
                        name: this.name,
                        elements: [...schema]
                    };
                }

                if (!Array.isArray(schema)) {
                    target[target.length] = schema;
                }
            }
        } else if (this.options.required) {
            throw new Error(`ERROR: 005 - El elemento "${this.key}" es requerido`)
        }
    }
}
