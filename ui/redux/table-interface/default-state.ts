import { v4 as uuidv4 } from 'uuid';
//Custom data-types---------------------------------------
export interface Col{
    id: string,
    dataType: string,
    constraints: string[],
    keys: [string, boolean][]
}
export interface Table{
    title: string,
    figmaId: null|string,
    UUID: string|null,
    cols: Col[]
}

export type TableList = Table[];


//default table state---------------------------------------------------------------------
export const defaultTables: TableList= [{
    title: 'new_table',
    figmaId: null,
    UUID: uuidv4(),
    cols:[
            {
                id: 'col_title',
                dataType: 'INTEGER',
                constraints: ['UUID'],
                keys: [['PK', true], ['FK', true]]
            }
        ]
}];

//table generator functions----------------------------------------------------
export const tableTemplate = (UUID:string):Table=>({
    title: 'new_table',
    figmaId: null,
    UUID,
    cols:[
            {
                id: 'col_title',
                dataType: 'INTEGER',
                constraints: ['UUID'],
                keys: [['PK', false], ['FK', false]]
            }
        ]
})

export const columnTemplate = ():Col=>({
    id: 'col_title',
    dataType: 'INTEGER',
    constraints: ['INC'],
    keys: [['PK', false], ['AK', false]]
});