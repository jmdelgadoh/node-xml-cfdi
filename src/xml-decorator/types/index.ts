export type XmlElementOption = {
    name?: string;
    namespace?: string;
}


export type XmlAttributeOption = XmlElementOption & {
    required?: boolean;
}
