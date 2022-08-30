import 'reflect-metadata';
import { XMLAttributeParams } from './types';

export const XmlAttribute = (options: XMLAttributeParams = DEFAULT_ATTRIBUTE_PARAMS) => {
    return (target: any, key: string) => {
        const {required, name} = options;

        const metadataValue = name || key;

        Reflect.defineMetadata(METADATA_KEY_NAME, metadataValue, target, key)

        Reflect.defineMetadata(METADATA_KEY_REQUIRED, required, target, key)
    }
}

export const DEFAULT_ATTRIBUTE_PARAMS: XMLAttributeParams = {required: false};

export const METADATA_KEY_NAME = 'design:name';

export const METADATA_KEY_REQUIRED = 'design:required';
