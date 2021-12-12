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
interface Attribute{
    attribute: string;
};
type DBSelect = Attribute[];

interface Props{
  tableIndex: number,
  colIndex: number,
  uuid: string
}

export default function Constraints({tableIndex, colIndex, uuid}:Props) {
  const dispatch = useAppDispatch();
  const constraints = useAppSelector(state=>state.tableReducer[tableIndex].cols[colIndex].constraints)
  return (
    <Autocomplete
      multiple
      options={top100Films}
      limitTags={1}
      size='small'
      disableCloseOnSelect
      onChange = {(e,value:{attribute:string}[])=>dispatch(modifyConstraints(tableIndex, colIndex, value, uuid, constraints[1]))}
      getOptionLabel={(option:Attribute) => option.attribute}
      renderOption={(props, option:Attribute, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8}}
            checked={selected}
          />
          {option.attribute}
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
  { attribute: 'NOT NULL' },
  { attribute: 'INC'},
  { attribute: 'UUID'}
];


