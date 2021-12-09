import * as React from 'react';
import { useState, useEffect } from 'react';
import {useAppDispatch, useAppSelector} from './reduxHooks';

export default function useUpdateFigma() {
    const updateTable =(titles:string[])=>{
        const tableList = useAppSelector(state=>state.tableReducer);
        const relevantTables = tableList.filter(table=>table.title in titles);
        parent.postMessage({ pluginMessage: 'modified tables' }, 'duck');
    }
    return updateTable;
}