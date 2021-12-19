import * as React from "react";
import TextField from "@mui/material/TextField";
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyTitle} from '../../../redux/table-interface/actions'



interface Props{
  tableIndex: number,
  figmaId: string,
  uuid: string
}

export default function Title ({tableIndex, figmaId, uuid}:Props){
  const dispatch = useAppDispatch();
  const title = useAppSelector(state=>state.tableReducer[tableIndex].title)

  return (
    <TextField
      variant="standard"
      style = {{color: 'white', paddingBottom: 0, borderStyle: 'none'}}
      sx={{
        height: 30,
        "MuiInputBase-input":{
            padding: 0,
            p: 0
        },
        "& .MuiInputBase-root":{
          color: 'white',
          p: 0,
          m: 0,
          font: 'IBM Plex Mono',
          fontSize: 16,
          fontWeight: 600
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
      placeholder='title'
      value = {title[0]}
      size="small"
      onChange={e=>dispatch(modifyTitle(tableIndex, e.target.value, uuid, figmaId))}
    />
  );
}
