import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyDatatype} from '../../../redux/table-interface/actions';
import { databases } from '../../../constants/data_types';
import {Popper} from '@mui/material';
import { styled } from '@mui/system';


const CustomPopper = (props)=><Popper {...props} style={{width:300}}></Popper>


interface Props{
    tableIndex: number,
    colIndex: number,
    uuid: string
}

export default function DataType({tableIndex, colIndex, uuid}:Props) {
    const dispatch = useAppDispatch();
    const {controllerReducer, tableReducer} = useAppSelector(state=>state);
    const selectedDatabase:string = controllerReducer ? controllerReducer.selectedDatabase : 'postgresql';
    const dataType = tableReducer[tableIndex].cols[colIndex].dataType;
  return (
    <Autocomplete
      options={databases[selectedDatabase]}
      value = {dataType[0]}
      onChange={(e,value:string)=>dispatch(modifyDatatype(tableIndex, colIndex, value, uuid, dataType[1]))}
      groupBy={(option) => option[0]}
      getOptionLabel={(option) => option[1]}
      fullWidth={true}
      blurOnSelect={true}
      isOptionEqualToValue={(a,b)=>a[1] === b}
      PopperComponent={CustomPopper}
      sx={{ 
        ".MuiInputBase-root":{
          padding: 0,
          color: 'white',
          p: 0,
          width: 200
        },
        ".Mui-focused":{
          width: 300, 
          zIndex: 2,
          color: 'white',
          position: 'absolute',
          backgroundColor: '#1E1F22'
        }
      }}
      
      renderInput={(params) => <TextField sx={{'.MuiInputLabel-root':{color: 'white'}}}{...params} label="Data Types" />}
    />
  );
}

//{/*disableCloseOnSelect={true}*/}