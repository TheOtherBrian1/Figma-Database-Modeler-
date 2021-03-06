import { v4 as uuidv4 } from 'uuid';
//Custom data-types---------------------------------------
export type FigmaId = string|null;
type tableName = string;
export interface Col{
    figmaId: FigmaId,
    uuid: string,
    id: [string, FigmaId],
    dataType: [string, FigmaId],
    constraints: [string[], FigmaId],
    pk: [tableName, FigmaId],
    fk: [tableName, FigmaId]
}
export interface Table{
    title: [string, FigmaId],
    figmaId: FigmaId,
    uuid: string|null,
    cols: Col[]
}

export type TableList = Table[];


//default table state---------------------------------------------------------------------
export const defaultTables: TableList = [];

//table generator functions----------------------------------------------------
export const tableTemplate = (uuid:string):Table=>({
    title: ['new_table', null],
    figmaId: null,
    uuid,
    cols:[columnTemplate(uuidv4())]
})

export const columnTemplate = (uuid:string):Col=>({
    figmaId: null,
    uuid: uuid,
    id: ['col_title', null],
    dataType: ['int', null],
    constraints: [['NOT NULL'], null],
    pk: ['N/A', null],
    fk: ['N/A', null]
});