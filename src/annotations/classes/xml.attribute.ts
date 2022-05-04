import { XmlElement } from './xml.element';

export class XmlAttribute {

    private name: string;

    static annotate(target: any,
                    key: string,
                    options: any = {},
                    descriptor?: TypedPropertyDescriptor<any>): void {

        const element = XmlElement.getOrCreateIfNotExists(target);
        const fullOptions = Object.assign({
            getter(entity: any): any {
                if (descriptor && descriptor.get) {
                    return descriptor.get.call(entity);
                }
                return entity[key];
            }
        }, options);

        fullOptions.name = options.name || key;

        element.addAttribute(new XmlAttribute(fullOptions as any));
    }

    static createAttribute(options: any): XmlAttribute {
        const hasGetter = typeof options.getter === 'function';
        const hasValue = options.value !== void 0;

        if ((hasGetter && hasValue) || (!hasGetter && !hasValue)) {

            throw new Error(`Either a getter or a value has to be defined for attribute "${options.name}".`);
        }

        const fullOptions = Object.assign({
            getter: createCustomGetter(options),
        }, options);

        return new XmlAttribute(fullOptions);
    }

    setSchema(target: any, entity: any): void {

        const value = this.options.getter.call(null, entity);

        if (value !== void 0) {
            target[this.name] = value;
        } else if (this.options.required) {

            throw new Error(`Attribute ${this.name} is required, but empty.`);
        }
    }

    private constructor(private options: any) {

        this.name = options.name;

        if (options.namespace) {

            this.name = options.namespace + ':' + this.name;
        }
    }
}


export function createCustomGetter(_options: { restrictTo?: any[], getter?: (entity: any) => any, value?: any }): (entity: any) => any {
    if (_options.restrictTo) {
        const restrictTo = _options.restrictTo as any[];
        return entity => {
            if (restrictTo.indexOf(entity) !== -1) {
                return (_options.getter ? _options.getter(entity) : _options.value);
            }
        };
    }
    return (_options.getter || (() => _options.value));
}
