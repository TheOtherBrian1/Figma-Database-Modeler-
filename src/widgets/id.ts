import {createTextNode, Text} from '../util/text'
import { createFrameNode, Frame } from '../util/frame';

export default function createId(name:string):FrameNode {
    const id = createFrameNode({name, resize:[10,40],mainAxisAlign: "MIN",color: '222326', paddingDirection: [0,0,0,10]});
    const text = createTextNode({name, characters: name, fontSize: 14})
    id.appendChild(text);
    return id;
}
