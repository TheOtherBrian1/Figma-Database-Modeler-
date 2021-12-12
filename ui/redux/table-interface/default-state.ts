import { v4 as uuidv4 } from 'uuid';
//Custom data-types---------------------------------------
export type FigmaId = string|null;

export interface Col{
    figmaId: FigmaId,
    uuid: string,
    id: [string, FigmaId],
    dataType: [string, FigmaId],
    constraints: [string[], FigmaId],
    keys: [[string, boolean][], FigmaId]
}
export interface Table{
    title: [string, FigmaId],
    figmaId: FigmaId,
    UUID: string|null,
    cols: Col[]
}

export type TableList = Table[];


//default table state---------------------------------------------------------------------
export const defaultTables: TableList = [];

//table generator functions----------------------------------------------------
export const tableTemplate = (UUID:string):Table=>({
    title: ['new_table', null],
    figmaId: null,
    UUID,
    cols:[columnTemplate()]
})

export const columnTemplate = ():Col=>({
    figmaId: null,
    uuid: uuidv4(),
    id: ['col_title', null],
    dataType: ['int', null],
    constraints: [['NOT NULL'], null],
    keys: [[['PK', false], ['AK', false]], null]
});