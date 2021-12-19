import * as React from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyKeys} from '../../../redux/table-interface/actions';
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
    ".MuiAutocomplete-root":{
        borderStyle: "none",
    },
    ".MuiAutocomplete-tag":{
      overflow: 'hidden',
      maxWidth: '80%',
    },
    "& .MuiChip-root":{
        backgroundColor: 'gray',
        opacity: .7,
        color: 'white'
    },
    ".MuiAutocomplete-clearIndicator":{
      color: 'red'
    },
    ".MuiAutocomplete-popupIndicator":{
      color: 'red'
    }
  });


const icon = <CheckBoxOutlineBlankIcon fontSize="small" color = "disabled" />;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

interface Option {
    uuid: string,
    figmaId: string,
    title: string,
    colFigmaId: string,
    colUuid: string,
    id: string,
    keys: [[string, boolean][], string]
};
export default function Keys({tableIndex, colIndex, uuid}:Props) {
    const dispatch = useAppDispatch();
    const tables = useAppSelector(state=>state.tableReducer)
    const keys = tables[tableIndex].cols[colIndex].keys;
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
                keys: col.keys
            })
        }
    }

    return (
        <div className = "key-container">
            FK
            <Autocomplete
                multiple
                limitTags={1}
                size='small'
                disableCloseOnSelect
                options={options.sort((a, b) => -b.title.localeCompare(a.title))}
                groupBy={(option:Option) => option.title!}
                getOptionLabel={(option:Option) => option.id}
                renderOption=
                {(props, option:Option, { selected }) => (
                    <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8}}
                        checked={selected}
                    />
                    {option.id}
                    </li>
                )}
                sx={{ width: 100, ".MuiOutlinedInput-notchedOutline": {borderStyle: 'none !important'} }}
                renderInput={(params) => <TextField {...params} />}
            />
        </div>
    );

}
