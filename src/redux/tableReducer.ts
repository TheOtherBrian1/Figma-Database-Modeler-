import produce from 'immer';

const tableTemplate = (newTitle:string)=>({
    title: newTitle,
    col:[
            {
                id: 'col_title',
                dataType: 'INTEGER',
                constraints: ['UUID'],
                keys: ['PK']
            }
        ]
})

export interface Col{
    id: string,
    dataType: string,
    constraints: {[key:string]:[string, boolean]},
    keys: [string, boolean][]
}
export interface Table{
    title: string,
    cols: Col[]
}

type TableList = Table[];

const defaultTables: TableList= [{
    title: 'untitled',
    cols:[
            {
                id: 'col_title',
                dataType: 'INTEGER',
                constraints: {UUID:['UUID',false]},
                keys: [['PK', false]]
            }
        ]
}];



const orchestrateModel = {
    CREATE_TABLE: 'CREATE_TABLE',
    REMOVE_TABLE: 'REMOVE_TABLE',
    MODIFY_TITLE: 'MODIFY_TITLE',
    MODIFY_ID: 'MODIFY_ID',
    MODIFY_DATATYPE: 'MODIFY_DATATYPE',
    MODIFY_CONSTRAINTS: 'MODIFY_CONSTRAINTS',
    MODIFY_KEYS: 'MODIFY_KEYS'
}

//payload = {title:string}
const createTable = (title:string)=>({
    type: orchestrateModel.CREATE_TABLE,
    payload:{title}
})

//payload = {table_index:number}
const removeTable = (table_index:number)=>({
    type: orchestrateModel.REMOVE_TABLE,
    payload:{table_index}
})

//payload = {table_index:number, title:string}
const modifyTitle = (table_index:number, title:string)=>({
    type: orchestrateModel.MODIFY_TITLE,
    payload:{table_index, title}
})

//payload = {table_index, col_index, id}
export const modifyId = (table_index:number, col_index:number, id:string)=>({
    type: orchestrateModel.MODIFY_ID,
    payload:{table_index, col_index, id}
})

//payload = {table_index, col_index, dataType}
export const modifyDatatype = (table_index:number, col_index:number, dataType:string)=>({
    type: orchestrateModel.MODIFY_DATATYPE,
    payload:{table_index, col_index, dataType}
})

//payload = {table_index, col_index, newConstraints}
export const modifyConstraints = (table_index:number, col_index:number, constraint:string)=>({
    type: orchestrateModel.MODIFY_CONSTRAINTS,
    payload:{table_index, col_index, constraint}
})

//payload = {table_index, col_index, keyIndex}
export const modifyKeys = (table_index:number, col_index:number, keyIndex:number)=>({
    type: orchestrateModel.MODIFY_KEYS,
    payload:{table_index, col_index, keyIndex}
})

export const actions = {
    createTable,
    removeTable,
    modifyTitle,
    modifyId,
    modifyDatatype,
    modifyConstraints,
    modifyKeys
}


const tableReducer = (state:TableList = defaultTables, action) => 
    produce(state, draft=>{
        const {title=null,table_index=null, col_index=null, id=null, dataType=null, constraint=null, keyIndex=null} = action.payload;
        switch(action.type){
            case orchestrateModel.CREATE_TABLE:
                draft.push(tableTemplate(title));
                break;
            case orchestrateModel.REMOVE_TABLE:
                draft.slice(table_index, 1);
                break;
            case orchestrateModel.MODIFY_TITLE:
                draft[table_index].title = title;
                break;
            case orchestrateModel.MODIFY_ID:
                draft[table_index].cols[col_index].id = id;
                break;
            case orchestrateModel.MODIFY_DATATYPE:
                draft[table_index].cols[col_index].dataType = dataType;
                break;
            case orchestrateModel.MODIFY_CONSTRAINTS:
                const prevConstraint = state[table_index].cols[col_index].constraints[constraint][1];
                draft[table_index].cols[col_index].constraints[constraint][1] = !prevConstraint;
                break;
            case orchestrateModel.MODIFY_KEYS:
                const toggle = state[table_index].cols[col_index].keys[keyIndex][1]
                draft[table_index].cols[col_index].keys[keyIndex][1] = toggle;
                break;
            default:
                break;
        }
    }
);

export default tableReducer;