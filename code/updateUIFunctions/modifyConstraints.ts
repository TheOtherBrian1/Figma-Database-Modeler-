import {createConstraintTiles} from '../widgets/constraint';

export default function modifyConstraints(uuid:string, newConstraints:string[], figmaId: string){
    const constraintNode = figma.getNodeById(figmaId) as FrameNode;
    const prevConstraints = constraintNode.children;
    prevConstraints.forEach(node=>node.remove());
    console.log(newConstraints, figmaId, uuid, 'bob');
    createConstraintTiles(newConstraints, constraintNode);
    
    return {type: 'MODIFY_CONSTRAINTS', uuid}
}