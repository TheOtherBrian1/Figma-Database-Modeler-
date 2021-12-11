import callFont from './util/font';
import createDefaultTable from './updateUIFunctions/createDefaultTable';
import deleteTable from './updateUIFunctions/deleteTable';

figma.showUI(__html__);

figma.ui.resize(450, 600);

async function generatePopulatedTable(){
  await callFont([
    { family: "Work Sans", style: "SemiBold" },
    { family: "IBM Plex Mono", style: "Light" },
    { family: "IBM Plex Mono", style: "Regular" },
    { family: "IBM Plex Mono", style: "SemiBold" }
  ]);
}
//if (figma.editorType === 'figma') 
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
  //figma.getNodeById(id: string);
  //node.id
  console.log(message, 'duck');
  const load = message.payload;
  switch(message.type){
    case orchestrateModel.CREATE_TABLE:
        createDefaultTable(load.tableUUID);
        break;
    case orchestrateModel.REMOVE_TABLE:
      //
        deleteTable(load.tableUUID, load.figmaId);
        break;
    case orchestrateModel.MODIFY_TITLE:
        //modifyTitle();
        break;
    case orchestrateModel.MODIFY_ID:
        //modifyId();
        break;
    case orchestrateModel.MODIFY_DATATYPE:
        //modifyDatatype();
        break;
    case orchestrateModel.MODIFY_CONSTRAINTS:
        //modifyConstraints();
        break;
    case orchestrateModel.MODIFY_KEYS:
        //modifyKeys();
        break;
    default:
        break;
  }
}