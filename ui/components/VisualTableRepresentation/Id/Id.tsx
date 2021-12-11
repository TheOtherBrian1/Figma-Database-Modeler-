import * as React from "react";
import TextField from "@mui/material/TextField";
import {useAppDispatch} from '../../../hooks/reduxHooks';
import {modifyId} from '../../../redux/tableReducer'



interface Props{
  tableIndex: number,
  colIndex: number
}

export default function Id ({tableIndex, colIndex}:Props){
  const dispatch = useAppDispatch();

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
      size="small"
      onChange={e=>dispatch(modifyId(tableIndex, colIndex, e.target.value))}
    >hello</TextField>
  );
}