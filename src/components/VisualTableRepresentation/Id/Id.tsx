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
      sx={{
        height: 30,
        '.Mui-focused':{
          position: 'absolute',
          width: 200,
          zIndex: 2,
          backgroundColor: 'green'
        }
      }}
      label="Size"
      placeholder='id'
      defaultValue="id"
      size="small"
      onChange={e=>dispatch(modifyId(tableIndex, colIndex, e.target.value))}
    >hello</TextField>
  );
}