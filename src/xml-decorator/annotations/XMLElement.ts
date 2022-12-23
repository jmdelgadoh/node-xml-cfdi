import 'reflect-metadata';
import { XMLElement as XMLElementModel } from "../models/XMLElement";
import { XmlElementOption } from "../types/xml.element.option.type";

export const XMLElement = (options: XmlElementOption = {}): Function => {
    return (target: any) => XMLElementModel.annotate(target, options);
}
