import { Element } from 'xml-js';
import { XMLAttributeParams, XMLElementParams } from '../types';

export const PARSER_OPTIONS: Element = {
    declaration: {
        attributes: {
            version: '1.0',
            encoding: 'utf-8'
        }
    },
    elements: []
};

export const META_KEY = 'xml:element';

export const DEFAULT_ATTRIBUTE_PARAMS: XMLAttributeParams = {namespace: '', required: false}
export const DEFAULT_ELEMENT_PARAMS: XMLElementParams = {namespace: ''}
