import * as React from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyFk} from '../../../redux/table-interface/actions';
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
    ".MuiAutocomplete-tag":{
      overflowX: 'auto',
      maxWidth: '80%',
    }
  });

interface Option {
    uuid: string,
    figmaId: string,
    title: string,
    colFigmaId: string,
    colUuid: string,
    id: string,
    fk: string
};
export default React.memo(function Keys({tableIndex, colIndex, uuid}:Props) {
    console.log('truce')
    const dispatch = useAppDispatch();
    const tables = useAppSelector(state=>state.tableReducer)
    const fk = tables[tableIndex].cols[colIndex].fk;
    console.log(fk, 'moose')

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
                fk: col.fk[0]
            })
        }
    }

    return (
        <div className = "key-container fk .fk-key-background">
            FK
            <Autocomplete
                size='small'
                defaultValue = {fk[0]}
                value = {fk[0]}
                onChange = {(e,value:any)=>{
                  console.log('value',value, 'value');
                  dispatch(modifyFk(tableIndex, colIndex, value.id, uuid, fk[1]))
                }}
                options={options.sort((a, b) => -b.title.localeCompare(a.title))}
                groupBy={(option:Option) => option.title!}
                getOptionLabel={(option:any) => {

                  console.log('not option', option)
                  if(typeof option.id === 'string') return option.id
                  else if(typeof option === 'string') return option

                  return 'N/A'}
                } 
                sx={{
                  width: 100, 
                  ".MuiOutlinedInput-notchedOutline": {
                      borderStyle: 'none !important'
                    },
                    ".MuiInputBase-root":{
                      padding: 0,
                      color: '#1371FF',
                      p: 0,
                      width: 200
                    },  
                  }}
                renderInput={(params) => {console.log(params);return <TextField {...params} />}}
            />
        </div>
    );

})
