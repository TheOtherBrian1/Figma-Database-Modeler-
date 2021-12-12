
export default function modifyDatatype(uuid:string, dataType:string, figmaId: string){
    const dataTypeNode = figma.getNodeById(figmaId) as TextNode;
    dataTypeNode.characters = dataType;
    return {type: 'MODIFY_DATA_TYPE', uuid}
}
