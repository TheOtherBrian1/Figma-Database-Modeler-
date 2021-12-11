import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import {useEffect} from 'react';
import {Table, Col} from '../../redux/table-interface/default-state'
import {removeTable, createTable} from '../../redux/table-interface/actions';
import KeyButtons from './KeyButtons/KeyButtons';
import Constraints from './Constraints/Constraints';
import DataType from './DataType/DataType';
import Header from './Header/Header';
import Id from './Id/Id';
import DropDown from './DropDown/DropDown';
import "./Tables.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';


const Table = ()=>{
    const tableList = useAppSelector(state=>state.tableReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        onmessage = (event) => {
            console.log("got this from the plugin code", event.data)
          }
    }, []);



    return(
        <div className = "table-wrapper">
            {
                tableList && tableList.map((table:Table, tableIndex)=>
                <div className = "table" key = {table.title + tableIndex}>
                    <div className = "table-title-container">
                        <h2 className = "table-title">{table.title}</h2>
                        <div>
                            <Button
                                onClick={()=>dispatch(removeTable(tableIndex, table.UUID, table.figmaId))}
                            >
                                <DeleteForeverIcon 
                                    sx={{color:'#9098a6'}}
                                />
                            </Button>
                            <Button
                                onClick={()=>dispatch(createTable())}
                            >
                                <AddBoxIcon 
                                    sx={{color:'#9098a6'}}
                                />
                            </Button>
                        </div>
                    </div>
                    <div className = "table-body">
                    {/*   <Header /> */}
                    {
                        table.cols.map((block:Col, colIndex)=>
                            <div className = "column-block" key = {table.title + tableIndex + colIndex}>
                                    <div className = "id-block">
                                        <Id tableIndex = {tableIndex} colIndex = {colIndex} tableUUID = {table.UUID}/>
                                    </div>
                                    <div className = "data-type-block">
                                        <DataType tableIndex = {tableIndex} colIndex = {colIndex} tableUUID = {table.UUID}/>
                                    </div>
                                    <div className = "constraints-block">
                                        <Constraints tableIndex = {tableIndex} colIndex = {colIndex} tableUUID = {table.UUID}/>
                                    </div>
                                    <div className ="keybuttons-block">
                                        <KeyButtons tableIndex = {tableIndex} colIndex = {colIndex} tableUUID = {table.UUID}/>
                                    </div>
                                    <div className = "drop-down-block">
                                        <DropDown  tableIndex = {tableIndex} colIndex = {colIndex} tableUUID = {table.UUID}/>
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