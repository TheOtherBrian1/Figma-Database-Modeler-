import {orchestrateModel} from './constants';
import { v4 as uuidv4 } from 'uuid';
import {FigmaId} from './default-state';

//payload = {title:string}
export const createTable = ()=>({
    type: orchestrateModel.CREATE_TABLE,
    payload:{tableUUID: uuidv4()}
})

//payload = {uuid:string, figmaIds: {}}
export const newColumnUpdateFigmaIds = (uuid:string, figmaIds)=>({
    type: 'UPDATE_FIGMA_IDS_NEW_COLUMN', 
    payload:{uuid, figmaIds}
});

//payload = {uuid:string, figmaIds: {}}
export const newTableUpdateFigmaIds=(uuid:string, figmaIds)=>({
    type: 'UPDATE_FIGMA_IDS_NEW_TABLE', 
    payload: {uuid, figmaIds}
})

/*
//payload = {uuid: string, figmaId: string}
export const updateFigmaId = (uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.UPDATE_FIGMA_ID,
    payload:{uuid, figmaId}
});
*/

//payload = {table_index:number, col_index:number}
export const createCol = (table_index:number, col_index:number,tableUUID:string)=>({
    type: orchestrateModel.ADD_COL,
    payload:{table_index, col_index, tableUUID, uuid: uuidv4()}
})

//payload = {table_index:number}
export const removeTable = (table_index:number, tableUUID:string, figmaId:FigmaId)=>({
    type: orchestrateModel.REMOVE_TABLE,
    payload:{table_index,tableUUID, figmaId}
})

//payload = {table_index:number, title:string}
export const modifyTitle = (table_index:number, title:string, tableUUID:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_TITLE,
    payload:{table_index, title, tableUUID}
})

//payload = {table_index, col_index, id}
export const modifyId = (table_index:number, col_index:number, id:string, tableUUID:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_ID,
    payload:{table_index, col_index, id, tableUUID}
})

//payload = {table_index, col_index, dataType}
export const modifyDatatype = (table_index:number, col_index:number, dataType:string, tableUUID:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_DATATYPE,
    payload:{table_index, col_index, dataType, tableUUID}
})

//payload = {table_index, col_index, dataType}
export const removeCol = (table_index:number, col_index:number, tableUUID:string, figmaId:FigmaId)=>({
    type: orchestrateModel.REMOVE_COL,
    payload:{table_index, col_index, tableUUID}
})

//payload = {table_index, col_index, newConstraints}
export const modifyConstraints = (table_index:number, col_index:number, constraint:{attribute:string}[], tableUUID:string, fimgaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_CONSTRAINTS,
    payload:{table_index, col_index, constraint, tableUUID}
})

//payload = {table_index, col_index, keyIndex}
export const modifyKeys = (table_index:number, col_index:number, keyIndex:number,tableUUID:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_KEYS,
    payload:{table_index, col_index, keyIndex, tableUUID}
})

export const actions = {
    createTable,
    removeTable,
    modifyTitle,
    modifyId,
    modifyDatatype,
    modifyConstraints,
    modifyKeys,
    removeCol,
    createCol
}