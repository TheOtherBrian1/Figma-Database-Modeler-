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
                    console.log(load, 'load', tableIndex, 'tableIndex', state, 'state');
                    draft[tableIndex].figmaId = load.figmaIds.table;
                    draft[tableIndex].cols[0].id[1] = load.figmaIds.id;
                    draft[tableIndex].cols[0].dataType[1] = load.figmaIds.dataType;
                    draft[tableIndex].cols[0].constraints[1] = load.figmaIds.constraints;
                    draft[tableIndex].cols[0].keys[1] = load.figmaIds.fk
                    break;
                case orchestrateModel.UPDATE_FIGMA_IDS_NEW_COLUMN:
                    //Requires some index to identify 
                    tableIndex = state.findIndex(table=>table.uuid === load.uuid);
                    columnIndex = state[tableIndex].cols.findIndex(column=>column.uuid === load.figmaId.uuid);
                    draft[tableIndex].cols[columnIndex].id[1] = load.figmaId.id;
                    draft[tableIndex].cols[columnIndex].dataType[1] = load.figmaId.dataType;
                    draft[tableIndex].cols[columnIndex].constraints[1] = load.figmaId.constraints;
                    draft[tableIndex].cols[columnIndex].keys[1] = load.figmaId.fk
                    break;
                case orchestrateModel.CREATE_TABLE:
                    draft.push(tableTemplate(load.tableUUID));
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
                    draft[load.table_index].title = load.title;
                    break;
                case orchestrateModel.MODIFY_ID:
                    draft[load.table_index].cols[load.col_index].id = load.id;
                    break;
                case orchestrateModel.MODIFY_DATATYPE:
                    draft[load.table_index].cols[load.col_index].dataType = load.dataType;
                    break;
                case orchestrateModel.MODIFY_CONSTRAINTS:
                    draft[load.table_index].cols[load.col_index].constraints = load.constraint.map(c=>c.attribute);
                    break;
                case orchestrateModel.MODIFY_KEYS:
                    const toggle = state[load.table_index].cols[load.col_index].keys[0][load.keyIndex][1]
                    draft[load.table_index].cols[load.col_index].keys[0][load.keyIndex][1] = !toggle;
                    break;
                default:
                    break;
            }
        })
    )
};

export default tableReducer;