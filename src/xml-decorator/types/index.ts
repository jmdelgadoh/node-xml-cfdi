export type XmlOption = {
    name?: string;
    namespace?: string;
}

export type XmlNameSpaceTag = {
    namespace: string;
    value: string
}

export type XmlElementOption = XmlOption & {
    xmlns?: XmlNameSpaceTag[];
    schemaLocation?: string[];
}

export type XmlAttributeOption = XmlOption & {
    required?: boolean;
}

export type XmlChildOption = XmlOption & {
    required?: boolean;
}
