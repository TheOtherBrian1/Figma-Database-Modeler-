
import {colorConverter} from '../util/color';
import {dataTypeColors} from '../widgets/dataType';

export default function modifyFK(uuid:string, fk:string, figmaId: string){
    
    const fkNode = figma.getNodeById(figmaId) as TextNode;
    fkNode.characters = fk;    
    return {type: 'MODIFY_FK', uuid}
}
