export default function modifyId(uuid:string, id:string, figmaId: string){
    const idNode = figma.getNodeById(figmaId) as TextNode;
    idNode.characters = id;
    return {type: 'MODIFY_ID', uuid}
}