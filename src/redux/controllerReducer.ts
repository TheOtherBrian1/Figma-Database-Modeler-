import produce from 'immer';

const orchestrateController = {
    SELECTED_DATABASE: 'SELECTED_DATABASE',
    TEST_SELECTED_TABLES: 'TEST_SELECTED_DATABASE',
    TEST_DATABASE: 'TEST_DATABASE',
    GENERATE_SQL: 'GENERATE_SQL',
};

//payload = {database:string}
const selectDatabase = (database:string)=>({
    type: orchestrateController.SELECTED_DATABASE,
    payload:{database}
});

//payload = {test:boolean}
const testSelectedTables = (test:boolean)=>({
    type: orchestrateController.TEST_SELECTED_TABLES,
    payload:{test}
});

//payload = {test:boolean}
const testDatabase = (test:boolean)=>({
    type: orchestrateController.TEST_DATABASE,
    payload:{test}
});

//payload = {test:boolean}
const generateSQL = (test:boolean)=>({
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
    selectedDatabase: 'postgreSQL',
    testSelectedTables: false,
    testDatabase: false,
    generateSQL: false
};

const controllerReducer = (state = defaultController, action) => (
    produce(state, draft=>{
        const {database = null, test = null} = action.payload;
        switch(action.type){
            case orchestrateController.SELECTED_DATABASE:
                draft.selectedDatabase = database;
                break;
            case orchestrateController.TEST_SELECTED_TABLES:
                draft.testSelectedTables = test;
                break;
            case orchestrateController.TEST_DATABASE:
                draft.testDatabase = test;
                break;
            case orchestrateController.GENERATE_SQL:
                draft.generateSQL = test;
                break;
            default:
                break;
            }
        }
    )
);


export default controllerReducer;