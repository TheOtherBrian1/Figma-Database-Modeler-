import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyDatatype} from '../../../redux/tableReducer';
import { databases } from '../../../constants/data_types';
import {Popper} from '@mui/material';
import { styled } from '@mui/system';


const CustomPopper = (props)=><Popper {...props} style={{width:300}}></Popper>


interface Props{
    tableIndex: number,
    colIndex: number
  }

export default function DataType({tableIndex, colIndex}:Props) {
    const dispatch = useAppDispatch();
    const selectedDatabase:string = useAppSelector(state=>{
      if(state.controllerReducer)
        return state.controllerReducer.selectedDatabase;
      else
        return 'postgresql';
    });
  return (
    <Autocomplete
      options={databases[selectedDatabase]}
      
      onChange={(e,value:string)=>dispatch(modifyDatatype(tableIndex, colIndex, value))}
      groupBy={(option) => option[0]}
      getOptionLabel={(option) => option[1]}
      disableCloseOnSelect={true}
      fullWidth={true}
      PopperComponent={CustomPopper}
      sx={{ 
        width: 150, 
        ".Mui-focused":{
          width: 300, 
          zIndex: 2
        }
      }}
      renderInput={(params) => <TextField {...params} label="Data Types" />}
    />
  );
}