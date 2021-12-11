import produce from 'immer';
import {orchestrateModel} from './constants';
import {tableTemplate, defaultTables, columnTemplate, TableList} from './default-state';

const tableReducer = (state:TableList = defaultTables, action) => {
    const load = action.payload;
    return(
        produce(state, draft=>{
            switch(action.type){
                case orchestrateModel.CREATE_TABLE:
                    draft.push(tableTemplate(load.tableUUID));
                    break;
                case orchestrateModel.REMOVE_TABLE:
                    draft = state.filter((table, index)=>load.table_index !== index);
                    break;
                case orchestrateModel.REMOVE_COL:
                    draft[load.table_index].cols.splice(load.column_index, 1);
                    break;
                case orchestrateModel.ADD_COL:
                    draft[load.table_index].cols.splice(load.column_index, 0, columnTemplate());
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
                    const toggle = state[load.table_index].cols[load.col_index].keys[load.keyIndex][1]
                    draft[load.table_index].cols[load.col_index].keys[load.keyIndex][1] = !toggle;
                    break;
                default:
                    break;
            }
        })
    )
};

export default tableReducer;