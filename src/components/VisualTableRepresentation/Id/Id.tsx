import * as React from "react";
//import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import {useAppDispatch} from '../../../hooks/reduxHooks';
import {modifyId} from '../../../redux/tableReducer'
/*
const Autocomplete = styled(MuiAutocomplete)({
  ".MuiAutocomplete-inputRoot": {
    width: 80,
    color: "white",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  ".Mui-focused":{
    width: 200,
    zIndex: 2
  }
});
*/

interface Props{
  tableIndex: number,
  colIndex: number
}

export default function Id ({tableIndex, colIndex}:Props){
  const dispatch = useAppDispatch();

  return (
    <TextField
      label="Size"
      placeholder='id'
      defaultValue="Small"
      size="small"
      onChange={e=>dispatch(modifyId(tableIndex, colIndex, e.target.value))}
    />
  );
}