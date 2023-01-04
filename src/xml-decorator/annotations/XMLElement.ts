import 'reflect-metadata';
import { XmlElementOption } from "../types";
import { XMLElementModel } from "../models";

export const XMLElement = (options: XmlElementOption = {}): Function => {
    return (target: any) => XMLElementModel.annotate(target, options);
}
