import createTable from '../widgets/table';
import createTitle from '../widgets/title';
import createDefaultColumn from './createDefaultColumn';


export default function createDefaultTable(uuid:string){
    console.log('createDefaultTableUUID', uuid)
    const table = createTable('TABLE');
    table.setPluginData('uuid', uuid);
    const title = createTitle('untitled');
    table.appendChild(title);
    table.appendChild(createDefaultColumn());
    figma.ui.postMessage({figmaId:table.id, uuid});
}


/*

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
*/