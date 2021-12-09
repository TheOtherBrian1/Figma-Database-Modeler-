import {createTextNode, Text} from '../util/text'
import { createFrameNode, Frame } from '../util/frame';

export default function createConstraint(name:string, constraints:string[]) {
    const widget = createFrameNode({
        name, 
        color: '222326',
        resize:[1,40],
        itemSpacing: 8,
        mainAxis: 'HORIZONTAL'
    });

    for(const constraint of constraints){
        const id = createFrameNode({paddingDirection: [0,8,0,8], cornerRadius:30, name: constraint, color: '626364'});
        const text = createTextNode({textCase:"UPPER", name: 'constraint', characters: constraint, fontSize: 14, style: 'Regular'});
        id.appendChild(text);
        widget.appendChild(id);
    }

    return widget;
}
