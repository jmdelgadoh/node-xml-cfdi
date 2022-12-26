import 'reflect-metadata';
import { XMLElementModel as XMLElementModel } from "../models/XMLElementModel";
import { XmlElementOption } from "../types";

export const XMLElement = (options: XmlElementOption = {}): Function => {
    return (target: any) => XMLElementModel.annotate(target, options);
}
