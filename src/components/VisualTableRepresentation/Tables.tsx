import * as React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import {Table, Col} from '../../redux/tableReducer';
import KeyButtons from './KeyButtons/KeyButtons';
import Constraints from './Constraints/Constraints';
import DataType from './DataType/DataType';
import Id from './Id/Id';


const VisualEditor = ()=>{
    const tableList = useAppSelector(state=>state.tableReducer);

    return(
        <div className = "table-wrapper">
            {
                tableList.map((table:Table, tableIndex)=>
                    <div className = "table-body">
                        <div className = "title-block">
                            <h2>{table.title}</h2>
                        </div>
                        {
                            table.cols.map((block:Col, colIndex)=>
                                <div className = "column-block">
                                    <div className = "">
                                        <Id tableIndex = {tableIndex} colIndex = {colIndex} />
                                    </div>
                                    <div className = "">
                                        <DataType tableIndex = {tableIndex} colIndex = {colIndex} />
                                    </div>
                                    <div className = "">
                                        <Constraints tableIndex = {tableIndex} colIndex = {colIndex}/>
                                    </div>
                                    <div className ="">
                                        <KeyButtons tableIndex = {tableIndex} colIndex = {colIndex}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default VisualEditor;
