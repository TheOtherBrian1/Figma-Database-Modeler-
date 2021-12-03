import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyDatatype} from '../../../redux/tableReducer';
import { databases } from '../../../constants/data_types';

interface Props{
    tableIndex: number,
    colIndex: number
  }

export default function DataType({tableIndex, colIndex}:Props) {
    const dispatch = useAppDispatch();
    const selectedDatabase = useAppSelector(state=>state.controllerReducer.selectedDatabase);

  return (
    <Autocomplete
      options={databases[selectedDatabase]}
      defaultValue={databases[selectedDatabase][0]}
      onChange={(e,value)=>dispatch(modifyDatatype(tableIndex, colIndex, value))}
      groupBy={(option) => option[0]}
      getOptionLabel={(option) => option[1]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Data Types" />}
    />
  );
}