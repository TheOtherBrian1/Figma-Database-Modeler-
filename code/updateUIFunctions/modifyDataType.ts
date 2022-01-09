
import {colorConverter} from '../util/color';
import {dataTypeColors} from '../widgets/dataType';

export default function modifyDatatype(uuid:string, dataType:string, figmaId: string){
    const dataTypeNode = figma.getNodeById(figmaId) as TextNode;
    dataTypeNode.characters = dataType[1];
    const colors = colorConverter(dataTypeColors[dataType[0]]);
    const newColor = {type:"SOLID", color: colors as RGB};
    dataTypeNode.fills = [newColor as SolidPaint];
    
    return {type: 'MODIFY_DATA_TYPE', uuid}
}
