import callFont from './util/font';
import createColumn from './widgets/column';
import createKey from './widgets/key';
import createId from './widgets/id';
import createDataType from './widgets/dataType'
import createConstraint from './widgets/constraint';
import createTable from './widgets/table';
import createTitle from './widgets/title';
import {createFrameNode} from './util/frame';

 figma.showUI(__html__);

  figma.ui.resize(400, 600);





async function generatePopulatedTable(){
  await callFont([
    { family: "Work Sans", style: "SemiBold" },
    { family: "IBM Plex Mono", style: "Light" },
    { family: "IBM Plex Mono", style: "Regular" },
    { family: "IBM Plex Mono", style: "SemiBold" }
  ]);

  if (figma.editorType === 'figma') {
    const table = createTable('milk');
    const columns = [];

    const title = createTitle('test');
    table.appendChild(title);

    const foreignKeyColumn = createColumn({name:'FOREIGN', color:'4E4F51'});
      const fk1 = createKey({type: 'FOREIGN', keyLinkSettings:{name:'ke1', characters: 'test1'}})
      const fk2 = createKey({type: 'FOREIGN', keyLinkSettings:{name:'ke2', characters: 'test2'}})
      for(const key of [fk1, fk2])
        foreignKeyColumn.appendChild(key);
      columns.push(foreignKeyColumn);

    const idColumn = createColumn({name:'ID', color:'4E4F51'});
      const id1 = createId('First ID');
      const id2 = createId('Second Id');
      for(const id of [id1, id2])
        idColumn.appendChild(id);
      columns.push(idColumn);

    const dataTypeColumn = createColumn({name:'DATATYPE', color:'4E4F51'});
      const dt1 = createDataType('integer', 'numeric');
      const dt2 = createDataType('varchar(255)', 'character');
      for(const dt of [dt1, dt2])
        dataTypeColumn.appendChild(dt);
      columns.push(dataTypeColumn);

    const constraintsColumn = createColumn({name:'CONSTRAINTS', color:'4E4F51'});
      const cst1 = createConstraint('constraint1', ['NOT NULL', 'UUID']);
      const cst2 = createConstraint('constraint2', ['INC']);
      for(const cst of [cst1, cst2])
        constraintsColumn.appendChild(cst);
      columns.push(constraintsColumn);

    const primaryKeyColumn = createColumn({name:'PRIMARY', color:'4E4F51'});
      const pk1 = createKey({type: 'PRIMARY', keyLinkSettings:{name:'ke1', characters: 'test1'}})
      const pk2 = createKey({type: 'PRIMARY', keyLinkSettings:{name:'ke2', characters: 'test2'}})
      for(const key of [pk1, pk2])
        primaryKeyColumn.appendChild(key);
      columns.push(primaryKeyColumn);
    
    const grid = createFrameNode({mainAxis: 'HORIZONTAL', name: 'tableData'});
    columns.forEach(column => grid.appendChild(column));
    table.appendChild(grid);
  }
}
generatePopulatedTable();

const orchestrateModel = {
  CREATE_TABLE: 'CREATE_TABLE',
  REMOVE_TABLE: 'REMOVE_TABLE',
  MODIFY_TITLE: 'MODIFY_TITLE',
  MODIFY_ID: 'MODIFY_ID',
  MODIFY_DATATYPE: 'MODIFY_DATATYPE',
  MODIFY_CONSTRAINTS: 'MODIFY_CONSTRAINTS',
  MODIFY_KEYS: 'MODIFY_KEYS'
}

figma.ui.onmessage = (message) => {
  switch(message.type){
    case orchestrateModel.CREATE_TABLE:
        
        break;
    case orchestrateModel.REMOVE_TABLE:
        
        break;
    case orchestrateModel.MODIFY_TITLE:
        
        break;
    case orchestrateModel.MODIFY_ID:

        break;
    case orchestrateModel.MODIFY_DATATYPE:
        
        break;
    case orchestrateModel.MODIFY_CONSTRAINTS:
        
        break;
    case orchestrateModel.MODIFY_KEYS:
        
        break;
    default:
        break;
  }
}



