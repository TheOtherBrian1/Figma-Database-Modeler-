import {colorConverter} from '../util/color';
import {dataTypeColors} from '../widgets/dataType';

export default function modifyPK(uuid:string, pk:string, figmaId: string){
    
    console.log('\n\n\n\nTheduck lobster', uuid, 'uuid',pk, 'pk', figmaId, 'figmaId')
    const pkNode = figma.getNodeById(figmaId) as TextNode;
    pkNode.characters = pk;
    // const colors = colorConverter("");
    // const newColor = {type:"SOLID", color: colors as RGB};
    // dataTypeNode.fills = [newColor as SolidPaint];
    
    return {type: 'MODIFY_PK', uuid}
}
