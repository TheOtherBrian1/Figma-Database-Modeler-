import {orchestrateModel} from './constants';
import { v4 as uuidv4 } from 'uuid';
import {FigmaId} from './default-state';

//payload = {title:string}
export const createTable = ()=>({
    type: orchestrateModel.CREATE_TABLE,
    payload:{uuid: uuidv4()}
})

//payload = {uuid:string, figmaIds: {}}
export const newColumnUpdateFigmaIds = (uuid:string, tableUuid:string, figmaIds)=>({
    type: 'UPDATE_FIGMA_IDS_NEW_COLUMN', 
    payload:{uuid, tableUuid, figmaIds}
});

//payload = {uuid:string, figmaIds: {}}
export const newTableUpdateFigmaIds=(uuid:string, figmaIds)=>({
    type: 'UPDATE_FIGMA_IDS_NEW_TABLE', 
    payload: {uuid, figmaIds}
})

//payload = {table_index:number, col_index:number}
export const createCol = (table_index:number, col_index:number,uuid:string, figmaId:string)=>({
    type: orchestrateModel.ADD_COL,
    payload:{table_index, col_index, uuid, figmaId}
})

//payload = {table_index:number}
export const removeTable = (table_index:number, uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.REMOVE_TABLE,
    payload:{table_index, uuid, figmaId}
})

//payload = {table_index:number, title:string}
export const modifyTitle = (table_index:number, title:string, uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_TITLE,
    payload:{table_index, title, uuid, figmaId}
})

//payload = {table_index, col_index, id}
export const modifyId = (table_index:number, col_index:number, id:string, uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_ID,
    payload:{table_index, col_index, id, uuid, figmaId}
})

//payload = {table_index, col_index, dataType}
export const modifyDatatype = (table_index:number, col_index:number, dataType:string, uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_DATATYPE,
    payload:{table_index, col_index, dataType, uuid, figmaId}
})

//payload = {table_index, col_index, dataType}
export const removeCol = (table_index:number, col_index:number, uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.REMOVE_COL,
    payload:{table_index, col_index, uuid, figmaId}
})

//payload = {table_index, col_index, newConstraints}
export const modifyConstraints = (table_index:number, col_index:number, constraint:string[], uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_CONSTRAINTS,
    payload:{table_index, col_index, constraint, uuid, figmaId}
})

export const modifyPk = (table_index:number, col_index:number, pk: string, uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_PK,
    payload:{table_index, col_index, pk, uuid, figmaId}
})

export const modifyFk = (table_index:number, col_index:number, fk: string, uuid:string, figmaId:FigmaId)=>({
    type: orchestrateModel.MODIFY_FK,
    payload:{table_index, col_index, fk, uuid, figmaId}
})

export const actions = {
    createTable,
    removeTable,
    modifyTitle,
    modifyId,
    modifyDatatype,
    modifyConstraints,
    removeCol,
    createCol,
    modifyPk,
    modifyFk
}