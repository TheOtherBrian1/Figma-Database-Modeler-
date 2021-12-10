import produce from 'immer';

const orchestrateController = {
    SELECTED_DATABASE: 'SELECTED_DATABASE',
    TEST_SELECTED_TABLES: 'TEST_SELECTED_DATABASE',
    TEST_DATABASE: 'TEST_DATABASE',
    GENERATE_SQL: 'GENERATE_SQL',
};

//payload = {database:string}
export const selectDatabase = (database:string)=>({
    type: orchestrateController.SELECTED_DATABASE,
    payload:{database}
});

//payload = {test:boolean}
export const testSelectedTables = (test)=>({
    type: orchestrateController.TEST_SELECTED_TABLES,
    payload:{test}
});

//payload = {test:boolean}
export const testDatabase = (test:boolean)=>({
    type: orchestrateController.TEST_DATABASE,
    payload:{test}
});

//payload = {test:boolean}
export const generateSQL = (test:boolean)=>({
    type: orchestrateController.TEST_DATABASE,
    payload:{test}
});

export const actions = {
    selectDatabase,
    testSelectedTables,
    testDatabase,
    generateSQL
}

const defaultController = {
    selectedDatabase: 'mysql',
    testSelectedTables: false,
    testDatabase: false,
    generateSQL: false
};


const controllerReducer = (state = defaultController, action) => {
    const load = action.payload;
    return(
        produce(state, draft=>{
            switch(action.type){
                case orchestrateController.SELECTED_DATABASE:
                    draft.selectedDatabase = load.database;
                    break;
                case orchestrateController.TEST_SELECTED_TABLES:
                    draft.testSelectedTables = load.test;
                    break;
                case orchestrateController.TEST_DATABASE:
                    draft.testDatabase = load.test;
                    break;
                case orchestrateController.GENERATE_SQL:
                    draft.generateSQL = load.test;
                    break;
                default:
                    return state;
                    break;
                }
            }
        )
    )
};


export default controllerReducer;