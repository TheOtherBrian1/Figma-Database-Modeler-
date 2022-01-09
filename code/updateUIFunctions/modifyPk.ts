import {colorConverter} from '../util/color';
import {dataTypeColors} from '../widgets/dataType';

export default function modifyPK(uuid:string, pk:string, figmaId: string){
    const pkNode = figma.getNodeById(figmaId) as TextNode;
    pkNode.characters = pk;

    
    return {type: 'MODIFY_PK', uuid}
}
