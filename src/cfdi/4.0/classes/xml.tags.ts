type Tag = {
    key: string,
    value: string | number | any
}

export class XmlTags {
    public attributes: Tag[];

    constructor() {
        this.attributes = [];
    }

    protected getAttributes(): any {
        const attr: any = {};

        this.attributes.forEach(({key, value}) => {
            attr[key] = value
        });

        return attr;
    }

    protected addAttributes(key: string, value: string | number | any) {
        this.attributes.push({
            key, value
        })
    }
}
