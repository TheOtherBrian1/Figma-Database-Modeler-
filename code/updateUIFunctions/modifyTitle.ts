export default function modifyTitle(uuid:string, title:string, figmaId: string){
    const titleNode = figma.getNodeById(figmaId) as TextNode;
    titleNode.characters = title;
    return {type: 'MODIFY_TITLE', uuid}
}