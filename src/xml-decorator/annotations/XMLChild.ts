import 'reflect-metadata';
import { XMLChildModel as XMLChildModel } from "../models/XMLChildModel";
import { XmlChildOption } from "../types";

export const XMLChild = (options: XmlChildOption): Function => {
    return (target: any, key: string) => XMLChildModel.annotate(target, key, options);
}
