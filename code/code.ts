import callFont from './util/font';
import createDefaultTable from './updateUIFunctions/createDefaultTable';
import createDefaultColumn from './updateUIFunctions/createDefaultColumn';
import deleteTable from './updateUIFunctions/deleteTable';
import modifyDataType from './updateUIFunctions/modifyDataType';
import modifyTitle from './updateUIFunctions/modifyTitle';
import modifyId from './updateUIFunctions/modifyId';
import modifyConstraints from './updateUIFunctions/modifyConstraints';
import deleteColumn from './updateUIFunctions/deleteColumn';

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
  REMOVE_COL: 'REMOVE_COL',
  ADD_COL: 'ADD_COL',
  CREATE_TABLE: 'CREATE_TABLE',
  REMOVE_TABLE: 'REMOVE_TABLE',
  MODIFY_TITLE: 'MODIFY_TITLE',
  MODIFY_ID: 'MODIFY_ID',
  MODIFY_DATATYPE: 'MODIFY_DATATYPE',
  MODIFY_CONSTRAINTS: 'MODIFY_CONSTRAINTS',
  MODIFY_KEYS: 'MODIFY_KEYS',
  UPDATE_FIGMA_ID: 'UPDATE_FIGMA_ID',
  UPDATE_FIGMA_IDS_NEW_TABLE: 'UPDATE_FIGMA_IDS_NEW_TABLE',
  UPDATE_FIGMA_IDS_NEW_COLUMN: 'UPDATE_FIGMA_IDS_NEW_COLUMN'
}

//Activates when triggered by Plugin UI
//uuid is used to recognize relevant table in the plugin ui
//figmaId is used to recongize the relevant frame in figma
//all other parameters update the values inside figma
interface ModUI{
  uuid:string,
  figmaId?:string,
  title?:string,
  id?:string,
  newConstraints?:string[],
  dataType?:string
}
interface ReturnMessage{
  type: string, 
  uuid: string, 
  figmaId?:string, 
  figmaIds?: string[] | {[prop: string]:string|string[]},
  node?: FrameNode
}

figma.ui.onmessage = (message) => {
  const {uuid, figmaId, title, id, newConstraints, dataType} = message.payload;
  let returnMessage:ReturnMessage;
  switch(message.type){
    case orchestrateModel.CREATE_TABLE:
        returnMessage = createDefaultTable(uuid);
        delete returnMessage.node;
        figma.ui.postMessage(returnMessage)
        break;
    case orchestrateModel.REMOVE_TABLE:
        returnMessage = deleteTable(uuid, figmaId);
        figma.ui.postMessage(returnMessage);
        break;
    case orchestrateModel.ADD_COL:
        returnMessage = createDefaultColumn(uuid);
        const table = figma.getNodeById(figmaId) as FrameNode;
        table.appendChild(returnMessage.node);
        delete returnMessage.node;
        figma.ui.postMessage(returnMessage)
        break;
    case orchestrateModel.REMOVE_COL:
      returnMessage = deleteColumn(uuid, figmaId);
      figma.ui.postMessage(returnMessage);
      break;
    case orchestrateModel.MODIFY_TITLE:
        returnMessage = modifyTitle(uuid, title, figmaId);
        figma.ui.postMessage(returnMessage);
        break;
    case orchestrateModel.MODIFY_ID:
        returnMessage = modifyId(uuid, id, figmaId);
        figma.ui.postMessage(returnMessage);
        break;
    case orchestrateModel.MODIFY_DATATYPE:
        returnMessage = modifyDataType(uuid, dataType, figmaId);
        figma.ui.postMessage(returnMessage);
        break;
    case orchestrateModel.MODIFY_CONSTRAINTS:
        returnMessage = modifyConstraints(uuid, newConstraints, figmaId);
        figma.ui.postMessage(returnMessage);
        break;
    case orchestrateModel.MODIFY_KEYS:
        //modifyKeys();
        break;
    default:
        break;
  }
}