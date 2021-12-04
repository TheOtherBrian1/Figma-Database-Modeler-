import produce from 'immer';

const tableTemplate = (newTitle:string):Table=>({
    title: newTitle,
    cols:[
            {
                id: 'col_title',
                dataType: 'INTEGER',
                constraints: ['UUID'],
                keys: [['PK', false]]
            }
        ]
})

export interface Col{
    id: string,
    dataType: string,
    constraints: string[],
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
                constraints: ['UUID'],
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
export const modifyConstraints = (table_index:number, col_index:number, constraint:{attribute:string}[])=>({
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


const tableReducer = (state:TableList = defaultTables, action) => {
    const load = action.payload;
    return(
        produce(state, draft=>{
            switch(action.type){
                case orchestrateModel.CREATE_TABLE:
                    draft.push(tableTemplate(load.title));
                    break;
                case orchestrateModel.REMOVE_TABLE:
                    draft.slice(load.table_index, 1);
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
                    draft[load.table_index].cols[load.col_index].keys[load.keyIndex][1] = toggle;
                    break;
                default:
                    break;
            }
        })
    )
};

export default tableReducer;