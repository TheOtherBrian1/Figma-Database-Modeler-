import * as React from "react";
import TextField from "@mui/material/TextField";
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyId} from '../../../redux/table-interface/actions'



interface Props{
  tableIndex: number,
  colIndex: number,
  tableUUID: string
}

export default function Id ({tableIndex, colIndex, tableUUID}:Props){
  const dispatch = useAppDispatch();
  const id = useAppSelector(state=>state.tableReducer[tableIndex].cols[colIndex].id)

  return (
    <TextField
      style = {{color: 'white'}}
      sx={{
        height: 30,
        "& .MuiInputBase-root":{
          color: 'white'
        },
        '.Mui-focused':{
          color: 'white',
          position: 'absolute',
          width: 200,
          zIndex: 2,
          backgroundColor: '#1E1F22'
        },
        '.MuiInputLabel-root':{color: 'white'}
      }}
      label="ID"
      placeholder='id'
      defaultValue="id"
      value = {id}
      size="small"
      onChange={e=>dispatch(modifyId(tableIndex, colIndex, e.target.value, tableUUID))}
    />
  );
}