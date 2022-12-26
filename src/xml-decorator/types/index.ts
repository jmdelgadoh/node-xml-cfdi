export type XmlElementOption = {
    name?: string;
    namespace?: string;
}

export type XmlAttributeOption = XmlElementOption & {
    required?: boolean;
}

export type XmlChildOption = XmlAttributeOption & {
    stripPluralS?: boolean;
    nestedNamespace?: string;
    implicitStructure?: string;
}
