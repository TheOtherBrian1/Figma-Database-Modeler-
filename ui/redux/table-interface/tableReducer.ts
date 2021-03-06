import produce from 'immer';
import {orchestrateModel} from './constants';
import {tableTemplate, defaultTables, columnTemplate, TableList} from './default-state';

const tableReducer = (state:TableList = defaultTables, action) => {
    const load = action.payload;
    let tableIndex;
    let columnIndex;
    return(
        produce(state, draft=>{
            switch(action.type){
                case orchestrateModel.UPDATE_FIGMA_IDS_NEW_TABLE:
                    tableIndex = state.findIndex(table=>table.uuid === load.uuid);
                    draft[tableIndex].figmaId = load.figmaIds.table;
                    draft[tableIndex].title[1] = load.figmaIds.title;
                    draft[tableIndex].cols[0].id[1] = load.figmaIds.id;
                    draft[tableIndex].cols[0].dataType[1] = load.figmaIds.dataType;
                    draft[tableIndex].cols[0].constraints[1] = load.figmaIds.constraint;
                    draft[tableIndex].cols[0].fk[1] = load.figmaIds.fk;
                    draft[tableIndex].cols[0].pk[1] = load.figmaIds.pk;
                    break;
                case orchestrateModel.UPDATE_FIGMA_IDS_NEW_COLUMN:
                    tableIndex = state.findIndex(table=>table.uuid === load.tableUuid);
                    columnIndex = state[tableIndex].cols.findIndex(column=>column.uuid === load.uuid);
                    draft[tableIndex].cols[columnIndex].id[1] = load.figmaIds.id;
                    draft[tableIndex].cols[columnIndex].dataType[1] = load.figmaIds.dataType;
                    draft[tableIndex].cols[columnIndex].constraints[1] = load.figmaIds.constraints;
                    draft[tableIndex].cols[columnIndex].fk[1] = load.figmaIds.fk
                    draft[tableIndex].cols[columnIndex].pk[1] = load.figmaIds.pk
                    break;
                case orchestrateModel.CREATE_TABLE:
                    draft.push(tableTemplate(load.uuid));
                    break;
                case orchestrateModel.REMOVE_TABLE:
                    draft.splice(load.table_index, 1);
                    break;
                case orchestrateModel.REMOVE_COL:
                    draft[load.table_index].cols.splice(load.column_index, 1);
                    break;
                case orchestrateModel.ADD_COL:
                    draft[load.table_index].cols.splice(load.column_index, 0, columnTemplate(load.uuid));
                    break;
                case orchestrateModel.MODIFY_TITLE:
                    draft[load.table_index].title[0] = load.title;
                    break;
                case orchestrateModel.MODIFY_ID:
                    draft[load.table_index].cols[load.col_index].id[0] = load.id;
                    break;
                case orchestrateModel.MODIFY_DATATYPE:
                    draft[load.table_index].cols[load.col_index].dataType[0] = load.dataType;
                    break;
                case orchestrateModel.MODIFY_CONSTRAINTS:
                    draft[load.table_index].cols[load.col_index].constraints[0] = load.constraint;
                    break;
                case orchestrateModel.MODIFY_PK:
                    draft[load.table_index].cols[load.col_index].pk[0] = load.pk;
                    break;
                case orchestrateModel.MODIFY_FK:
                    draft[load.table_index].cols[load.col_index].fk[0] = load.fk;
                    break;
                default:
                    break;
            }
        })
    )
};

export default tableReducer;