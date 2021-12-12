export default function deleteTable(uuid:string, figmaId: string){
    figma.getNodeById(figmaId).remove();
    return {type: 'REMOVE_TABLE', uuid}
}
