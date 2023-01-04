import 'reflect-metadata';
import { XmlAttributeOption } from "../types";
import { XMLAttributeModel } from "../models";

export const XMLAttribute = (option: XmlAttributeOption = {}): Function => {
    return (target: any, key: string) => XMLAttributeModel.annotate(target, key, option)
}
