import * as React from 'react';
import { useState, useEffect } from 'react';
import {useAppDispatch, useAppSelector} from './reduxHooks';

export function useUpdateFigma() {
    const updateTable =(titles:string[])=>{
        const tableList = useAppSelector(state=>state.tableReducer);
        const relevantTables = tableList.filter(table=>table.title in titles);
        parent.postMessage({ pluginMessage: 'modified tables' }, JSON.stringify(relevantTables));
    }
    return updateTable;
}

export function useAddColumn(){
    
}

export function useRequestUpdates(){

}