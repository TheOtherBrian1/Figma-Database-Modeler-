import * as React from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyPk} from '../../../redux/table-interface/actions';
import TextField from '@mui/material/TextField';
import MuiAutocomplete from '@mui/material/Autocomplete';
import { styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './Keys.css';
const colors = ['rgba(19,133,255, .2)', 'rgba(255, 161, 19, 0.2)'];

interface Props{
  tableIndex: number,
  colIndex: number,
  uuid: string,
  figmaId?: string
}

const Autocomplete = styled(MuiAutocomplete)({
    ".MuiAutocomplete-inputRoot": {
      color: 'white',
      height: 40,
      maxWidth: 150,
      fontFamily: "'IBM Plex Mono', monospace",     
      flexWrap: 'nowrap',
      overflow: 'hidden',
      p: 0,
      borderStyle: 'none',
      whiteSpace: 'nowrap'
    },
    "MuiInputBase-input":{
      margin: 'auto',
      textAlign: 'center'
    },
    ".MuiAutocomplete-root":{
        borderStyle: "none",
    },
  });

interface Option {
    uuid: string,
    figmaId: string,
    title: string,
    colFigmaId: string,
    colUuid: string,
    id: string,
    pk: string
};
export default function Keys({tableIndex, colIndex, uuid}:Props) {
    console.log('truce')
    const dispatch = useAppDispatch();
    const tables = useAppSelector(state=>state.tableReducer)
    const pk = tables[tableIndex].cols[colIndex].pk;
    console.log(pk, 'pk the duck')
    //get table title for creating key connections between tables
    const options = []
    for (const table of tables){
        if (table.uuid === uuid) continue;
        for (const col of table.cols){
            options.push({
                uuid: table.uuid, 
                figmaId: table.figmaId, 
                title: table.title[0],
                colFigmaId: col.figmaId, 
                colUuid: col.uuid, 
                id: col.id[0], 
                pk: col.pk[0]
            })
        }
    }

    return (
        <div className = "key-container pk pk-key-background">
            PK
            <Autocomplete
                size='small'
                defaultValue = {pk[0]}
                value = {pk[0]}
                onChange = {(e,value:any)=>{
                  dispatch(modifyPk(tableIndex, colIndex, value.id, uuid, pk[1]))
                }}
                options={options.sort((a, b) => -b.title.localeCompare(a.title))}
                groupBy={(option:Option) => option.title!}
                getOptionLabel={(option:any) =>{
                  console.log('option', option);
                  if(typeof option.id === 'string') return option.id
                  else if(option === 'string') return option
                  return 'N/A'}
                } 
                sx={{
                  width: 100, 
                  ".MuiOutlinedInput-notchedOutline": {
                      borderStyle: 'none !important'
                    },
                    ".MuiInputBase-root":{
                      padding: 0,
                      color: '#FF7613',
                      p: 0,
                      width: 200
                    },  
                  }}
                renderInput={(params) => {console.log(params);return <TextField {...params} />}}
            />
        </div>
    );

}
