
import {colorConverter} from '../util/color';
import {dataTypeColors} from '../widgets/dataType';

export default function modifyFK(uuid:string, fk:string, figmaId: string){
    
    console.log('\n\n\n\nTheduck lobster', uuid, 'uuid',fk, 'fk', figmaId, 'figmaId')
    const fkNode = figma.getNodeById(figmaId) as TextNode;
    fkNode.characters = fk;
    // const colors = colorConverter("");
    // const newColor = {type:"SOLID", color: colors as RGB};
    // dataTypeNode.fills = [newColor as SolidPaint];
    
    return {type: 'MODIFY_FK', uuid}
}
