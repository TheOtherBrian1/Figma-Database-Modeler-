import {createTextNode, Text} from '../util/text'
import { createFrameNode, Frame } from '../util/frame';

export default function createTitle(tableName:string){
    const container = createFrameNode({
        color: '4b4c4e',
        mainAxis: 'VERTICAL',
        paddingDirection: [0,0,0,10],
        name: tableName,
        mainAxisSizing: 'FIXED',
        altAxisSizing: 'AUTO',
        resize: [400,40],
        mainAxisAlign: 'CENTER',
        altAxisAlign: 'MIN'
    });
    const title = createTextNode({
        family:'Work Sans',
        characters: tableName,
        alignHorizontal: 'LEFT',
        alignVertical: 'CENTER',
        name: tableName
    });
    const figmaId = title.id;
  
    container.appendChild(title);
    return {title:container, figmaId};
}