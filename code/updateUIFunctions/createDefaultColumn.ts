import createColumn from '../widgets/column';
import createKey from '../widgets/key';
import createId from '../widgets/id';
import createDataType from '../widgets/dataType';
import createConstraints from '../widgets/constraint';
import {createFrameNode} from '../util/frame';

export default function createDefaultColumns(uuid:string){
    const columns = [];
    const nodeIds = {
        column: '',
        fk:null,
        id:'',
        dataType:'',
        constraint: '',
        pk: null
    };
    
    const foreignKeyColumn = createColumn({name:'FOREIGN', color:'4E4F51'});
        const fk = createKey({type: 'FOREIGN', keyLinkSettings:{name:'FK', characters: 'N/A'}})
        foreignKeyColumn.appendChild(fk);
        columns.push(foreignKeyColumn);

    const idColumn = createColumn({name:'ID', color:'4E4F51'});
        const id = createId('new_id');
        idColumn.appendChild(id.node);
        nodeIds.id = id.id;
        columns.push(idColumn);

    const dataTypeColumn = createColumn({name:'DATATYPE', color:'4E4F51'});
        const dt = createDataType('integer', 'numeric');      
        dataTypeColumn.appendChild(dt.node);
        nodeIds.dataType = dt.id;
        columns.push(dataTypeColumn);

    const constraintsColumn = createColumn({name:'CONSTRAINTS', color:'4E4F51'});
        const cst = createConstraints('constraint1', ['NOT NULL']);
        constraintsColumn.appendChild(cst.node);
        nodeIds.constraint = cst.id;
        columns.push(constraintsColumn);

    const primaryKeyColumn = createColumn({name:'PRIMARY', color:'4E4F51'});
        const pk = createKey({type: 'PRIMARY', keyLinkSettings:{name:'PK', characters: 'N/A'}})
        primaryKeyColumn.appendChild(pk);
        columns.push(primaryKeyColumn);

    const grid = createFrameNode({mainAxis: 'HORIZONTAL', name: 'tableData'});
    columns.forEach(column => grid.appendChild(column));
    nodeIds.column = grid.id;
    
    return {type: 'UPDATE_FIGMA_IDS_NEW_COLUMN', tableUuid: null, node: grid, figmaIds: nodeIds, uuid};
}