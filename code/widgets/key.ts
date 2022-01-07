import {createTextNode, Text} from '../util/text'
import { createFrameNode, Frame } from '../util/frame';

const defaultKeySettings = {
    mainAxis: 'VERTICAL',
    resize:[10,40],
    mainAxisSizing: 'AUTO'
}

const defaultKeyTitleSettings = {
    fontSize: 10,
    resizeWithoutConstraints: [67, 13],
    name: 'keyType'
}
const defaltKeyLinkSettings = {
    fontSize: 9,
    style: 'Light',
    characters: 'N/A'
}

const foreignKeySettings = {
    color: '212B3B',
    name: 'FOREIGN', 
    characters: 'FK'
}

const primaryKeySettings = {
    color: '38393A',
    name: 'PRIMARY',
    characters: 'PK'
}

type keyType = 'FOREIGN' | 'PRIMARY' | 'CUSTOM';

interface Key{
    type: keyType, 
    keyTitleSettings?:Text, 
    keyLinkSettings:Text,
    keySettings?:Frame
}

export default function createKey({
        type, 
        keyTitleSettings,
        keyLinkSettings,
        keySettings
    }:Key){

    let textColor;
    let keyTypeSettings = {};
    switch(type){
        case 'FOREIGN':
            keyTypeSettings = foreignKeySettings;
            textColor = {color: '1371ff'}
            break;
        case 'PRIMARY':
            keyTypeSettings = primaryKeySettings;
            textColor = {color: 'FF7613'}
            break;
        default:
            textColor = {name: 'CUSTOM'}
    }
    
    const keyAssign = Object.assign(defaultKeySettings, keyTypeSettings, keySettings);
    const key = createFrameNode(keyAssign);
    const keyTitle = createTextNode(Object.assign(defaultKeyTitleSettings, keyTypeSettings, keyTitleSettings, textColor))
    const keyLink = createTextNode(Object.assign(defaltKeyLinkSettings, textColor, keyLinkSettings))
    key.appendChild(keyTitle);
    key.appendChild(keyLink);
    return {key, textNode: keyLink.id};
}