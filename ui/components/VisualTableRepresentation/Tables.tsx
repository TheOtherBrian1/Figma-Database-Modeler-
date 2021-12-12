import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import {useEffect} from 'react';
import {Table, Col} from '../../redux/table-interface/default-state'
import {removeTable, createTable, newColumnUpdateFigmaIds, newTableUpdateFigmaIds} from '../../redux/table-interface/actions';
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
    console.log(tableList, 'table.tsx recreated');
    const dispatch = useAppDispatch();
    useEffect(() => {
        onmessage = (event) => {
            const message = event.data.pluginMessage; 
            switch(message.type){
                case 'UPDATE_FIGMA_IDS_NEW_TABLE':
                    //requires adding figmaIds in Redux
                    //expected values: {}
                    /*
                            type: string;
                            figmaIds: {
                                fk: any;
                                id: string;
                                dataType: string;
                                constraints: string[];
                                pk: any;
                                table: string;
                            };
                            uuid: string;
                    */
                    dispatch(newTableUpdateFigmaIds(message.uuid, message.figmaIds));
                    break;
                case 'REMOVE_TABLE':
                    //requires no updating
                    break;
                case 'UPDATE_FIGMA_IDS_NEW_COLUMN':
                    //requires adding figmaIds in Redux
                    //expected values: {}
                    /*
                            type: string;
                            figmaIds: {
                                fk: any;
                                id: string;
                                dataType: string;
                                constraints: string[];
                                pk: any;
                            };
                            uuid: string;
                    */
                    dispatch(newColumnUpdateFigmaIds(message.uuid, message.figmaIds))
                    break;
                case 'MODIFY_TITLE':
                    //requires no updating
                    break;
                case 'MODIFY_ID':
                    //requires no updating
                    break;
                case 'MODIFY_DATATYPE':
                    //requires no updating
                    break;
                case 'MODIFY_CONSTRAINTS':
                    //requires no updating, though it might in the future
                    break;
            }
          }
    }, []);



    return(
        <>
            <div className = 'create-new-table-row'>
                <Button
                    variant="contained"
                    onClick={()=>dispatch(createTable())}
                >
                    <AddBoxIcon 
                        sx={{color:'#9098a6'}}
                    />
                    Create New Table
                </Button>
            </div>
            <div className = "table-wrapper">
                {
                    tableList && tableList.map((table:Table, tableIndex)=>
                    <div className = "table" key = {table.title[0] + tableIndex}>
                        <div className = "table-title-container">
                            <h2 className = "table-title">{table.title[0]}</h2>
                            <div>
                                <Button
                                    onClick={()=>dispatch(removeTable(tableIndex, table.UUID, table.figmaId))}
                                >
                                    <DeleteForeverIcon 
                                        sx={{color:'#9098a6'}}
                                    />
                                </Button>
                            </div>
                        </div>
                        <div className = "table-body">
                        {/*   <Header /> */}
                        {
                            table.cols.map((block:Col, colIndex)=>
                                <div className = "column-block" key = {table.title[0] + tableIndex + colIndex}>
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
                )}                       
            </div>
        </>
    )
}

export default Table;