import orchestrateSettings from './constants';

//payload = {dataBase}
export const selectDatabase = (dataBase:string)=>({
    type: orchestrateSettings.SELECT_DATABASE,
    payload:{dataBase}
})

//payload = {testingDatabase}
export const testDatabase = (testingDatabase:boolean)=>({
    type: orchestrateSettings.TEST_DATABASE,
    payload:{testingDatabase}
})

//payload = {testingTables}
export const testSelectedTables = (testingTables:boolean)=>({
    type: orchestrateSettings.TEST_TABLES,
    payload:{testingTables}
})

//payload = {testingTables}
export const generateSQL = (isGenerating:boolean)=>({
    type: orchestrateSettings.GENERATE_SQL,
    payload:{isGenerating}
})