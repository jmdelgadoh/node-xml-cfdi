import { XMLElementModel } from "./XMLElementModel";
import * as _ from "lodash";
import { XmlChildOption } from "../types";
import { ns } from "../utils";

type Tree = { name: string; attributes: { [name: string]: string } };

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

    public setSchema(target: any, parentEntity: any): any {
        const entity = parentEntity[this.key];

        if (typeof entity !== 'undefined') {
            let schema = XMLElementModel.getSchema(entity);

            console.log(this.name, JSON.stringify({target, schema}, null, 3))

            if (schema !== void 0 && schema !== null) {
                // console.log(JSON.stringify(schema, null, 3))

                target[this.name] = schema;
            }

        } else if (this.options.required) {
            throw new Error(`ERROR: 004 - El atributo "${this.key}" es requerido`)
        }
    }

    private resolveImplicitStructure(structure: string, target: any, schema: any): void {
        const PLACEHOLDER = '$';

        if (!new RegExp(`.\\.\\${PLACEHOLDER}`).test(structure) &&
            !new RegExp(`.\\.\\${PLACEHOLDER}\\..`).test(structure) &&
            !new RegExp(`\\${PLACEHOLDER}\\..`).test(structure)) {
            throw new Error(`Structure '${structure}' is invalid`);
        }

        let tree = this.getImplicitNodeTree(structure);
        const indexOfPlaceholder = tree.findIndex(node => node.name === PLACEHOLDER);
        tree[indexOfPlaceholder].name = this.name;

        for (let i = 0; i < tree.length; i++) {
            let node = tree[i];
            if (!Array.isArray(target)) {
                if (!target[node.name]) {
                    if (i !== indexOfPlaceholder) {
                        target[node.name] = {'@': node.attributes};
                    } else {
                        target[node.name] = [];
                    }
                }
                target = target[node.name];
            } else {
                const newTarget = {};
                target.push(newTarget);
                target = newTarget;
            }
            if (i === tree.length - 1) {
                if (Array.isArray(target)) {
                    target.push(schema);
                } else {
                    target[node.name] = _.merge(schema, {'@': node.attributes});
                }
            }
        }
    }

    private getImplicitNodeTree(treeString: string): Tree[] {
        const REGEX = new RegExp('([a-z\\w0-9-\\$\\:]+?)\\[(.*?)\\]|([a-z\\w0-9-\\$\\:]+)', 'gi');
        let match = REGEX.exec(treeString);
        const tree: Tree[] = [];

        while (match !== null) {

            const tagName = match[1] || match[3];
            const attributeString = match[2];
            tree.push({
                name: tagName,
                attributes: this.getAttributes(attributeString)
            });
            match = REGEX.exec(treeString);
        }
        return tree;
    }

    private getAttributes(attributeString: string): { [attrName: string]: string } {

        let attributes = {};

        if (attributeString) {

            attributeString.split(',').forEach(val => {

                const attributesArr = val.split('=');
                // @ts-ignore
                attributes[attributesArr[0]] = attributesArr[1];
            });
        }

        return attributes;
    }
}
