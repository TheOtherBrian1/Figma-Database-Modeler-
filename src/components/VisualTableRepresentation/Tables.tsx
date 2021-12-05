import * as React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import {Table, Col} from '../../redux/tableReducer';
import KeyButtons from './KeyButtons/KeyButtons';
import Constraints from './Constraints/Constraints';
import DataType from './DataType/DataType';
import Id from './Id/Id';
import "./Tables.css";


const Table = ()=>{
    const tableList = useAppSelector(state=>state.tableReducer);

    return(
        <div className = "table-wrapper">
            {
                tableList && tableList.map((table:Table, tableIndex)=>
                <div className = "table" key = {table.title + tableIndex}>
                    <div className = "table-title-container">
                        <h2 className = "table-title">{table.title}</h2>
                    </div>
                    <div className = "table-body">
                    {
                        table.cols.map((block:Col, colIndex)=>
                            <div className = "column-block" key = {table.title + tableIndex + colIndex}>
                                <div className = "fixing-block">
                                    <div className = "id-block">
                                        <Id tableIndex = {tableIndex} colIndex = {colIndex} />
                                    </div>
                                    <div className = "data-type-block">
                                        <DataType tableIndex = {tableIndex} colIndex = {colIndex} />
                                    </div>
                                    <div className = "constraints-block">
                                        <Constraints tableIndex = {tableIndex} colIndex = {colIndex}/>
                                    </div>
                                    <div className ="keybuttons-block">
                                        <KeyButtons tableIndex = {tableIndex} colIndex = {colIndex}/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    </div>
                </div>
            )
}
                                
        </div>
    )
}

export default Table;