import {XmlChildOptions} from "../types";

export class XmlChildModel {
    public name: string;

    constructor(private options: XmlChildOptions) {
        const {namespace, name} = options;

        this.name = `${namespace}${namespace != '' ? ':' : ''}${name}`;
    }

    static annotate(target: Function, key: string, options: XmlChildOptions = {}): void {

    }
}