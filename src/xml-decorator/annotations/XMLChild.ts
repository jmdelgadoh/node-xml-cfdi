import 'reflect-metadata';
import { XmlChildOption } from "../types";
import { XMLChildModel } from "../models";

export const XMLChild = (options: XmlChildOption): Function => {
    return (target: any, key: string) => XMLChildModel.annotate(target, key, options);
}
