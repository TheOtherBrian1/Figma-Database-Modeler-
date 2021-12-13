
import {colorConverter} from '../util/color';
import {dataTypeColors} from '../widgets/dataType';

export default function modifyDatatype(uuid:string, dataType:string, figmaId: string){
    console.log(uuid, dataType, figmaId, 'in modifyDatatype code');
    const dataTypeNode = figma.getNodeById(figmaId) as TextNode;
    dataTypeNode.characters = dataType[1];
    console.log(dataTypeColors[dataType[0]]);
    const colors = colorConverter(dataTypeColors[dataType[0]]);
    console.log(colors, 'colors');
    const newColor = {type:"SOLID", color: colors as RGB};
    dataTypeNode.fills = [newColor as SolidPaint];
    
    return {type: 'MODIFY_DATA_TYPE', uuid}
}
