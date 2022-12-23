export type XmlBaseOptions = {
    namespace?: string,
    name?: string,
    required?: boolean;
    getter?: (entity: any) => any;
}

export const DEFAULT_XML_OPTIONS: XmlBaseOptions = {
    namespace: '',
    name: '',
    required: false
}
