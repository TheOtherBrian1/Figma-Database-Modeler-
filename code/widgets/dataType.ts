import {createTextNode, Text} from '../util/text'
import { createFrameNode, Frame } from '../util/frame';

type DataType = 'character' | 'numeric' | 'date' | 'binary' | 'boolean' | 'string' | 'geometric' | 'network address' | 'bit';
const dataTypeColors = {
    character: 'EFC900',
    numeric: 'F17400',
    date: '00D0AB',
    binary: '0026EF',
    boolean: '007DF1',
    string: 'D00025',
    geometric: '7EC639',
    'network address': 'CF2ED1',
    bit: '00FFF6'
}

export default function createDataType(name:string, dataType:DataType):{node:FrameNode,id:string} {
    const dataTypeNode = createFrameNode({mainAxisAlign: 'MIN',resize: [1,40],altAxisAlign: "CENTER", name: 'id_'+name, color: '222326', paddingDirection: [0,10,0,10]});
    const text = createTextNode({name, color: dataTypeColors[dataType], characters: name, fontSize: 14, textCase: 'UPPER', style: 'Regular'})
    dataTypeNode.appendChild(text);
    return {node: dataTypeNode, id: dataTypeNode.id};
}
