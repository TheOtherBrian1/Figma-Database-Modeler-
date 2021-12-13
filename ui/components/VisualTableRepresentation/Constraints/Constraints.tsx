import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import MuiAutocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { styled } from "@mui/material/styles";
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyConstraints} from '../../../redux/table-interface/actions';
import store from '../../../redux/store';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" color = "disabled" />;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

const Autocomplete = styled(MuiAutocomplete)({
    ".MuiAutocomplete-inputRoot": {
      color: 'white',
      maxWidth: 150,
      fontFamily: "'IBM Plex Mono', monospace",     
      flexWrap: 'nowrap',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
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


interface Props{
  tableIndex: number,
  colIndex: number,
  uuid: string
}

export default function Constraints({tableIndex, colIndex, uuid}:Props) {
  const dispatch = useAppDispatch();
  const constraints = useAppSelector(state=>state.tableReducer[tableIndex].cols[colIndex].constraints)
  console.log('constraints tsx', tableIndex, colIndex, uuid, constraints);
  return (
    <Autocomplete
      multiple
      options={top100Films}
      limitTags={1}
      value = {constraints[0]}
      size='small'
      disableCloseOnSelect
      onChange = {(e,value:string[])=>dispatch(modifyConstraints(tableIndex, colIndex, value, uuid, constraints[1]))}
      getOptionLabel={(option) => option as string}
      renderOption={(props, option:string[], { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8}}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => (
        <TextField sx={{'.MuiInputLabel-root':{color: 'white'}}} {...params} label="SQL Constraints" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  'NOT NULL',
  'INC',
  'UUID'
];


