import {createTextNode, Text} from '../util/text'
import { createFrameNode, Frame } from '../util/frame';

export default function createConstraint(name:string, constraints:string[]) {
    const widget = createFrameNode({
        name, 
        paddingDirection: [0,10,0,10],
        color: '222326',
        itemSpacing: 8,
        mainAxis: 'HORIZONTAL', 
        mainAxisAlign: 'MIN',
        resize: [10,40]
    });

    const node = createConstraintTiles(constraints, widget);

    return node;
}

export function createConstraintTiles(constraints:string[], widget:FrameNode):{node:FrameNode,ids:string[]}{
    const ids = [];
    for(const constraint of constraints){
        const id = createFrameNode({layoutAlign: 'CENTER', paddingDirection: [0,8,0,8], cornerRadius:30, name: constraint, color: '626364'});
        const text = createTextNode({textCase:"UPPER", name: 'constraint', characters: constraint, fontSize: 14, style: 'Regular'});
        id.appendChild(text);
        ids.push(id.id);
        widget.appendChild(id);
    }
    return {node: widget, ids}
}