import 'reflect-metadata';
import { XmlAttributeOption } from "../types";
import { XMLAttributeModel } from "../models/XMLAttributeModel";

export const XMLAttribute = (option: XmlAttributeOption = {}): Function => {
    return (target: any, key: string) => XMLAttributeModel.annotate(target, key, option)
}
