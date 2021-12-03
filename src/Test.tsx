import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import MuiAutocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { styled } from "@mui/material/styles";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Autocomplete = styled(MuiAutocomplete)({
    ".MuiAutocomplete-inputRoot": {
        width: 150,
      fontFamily: "'IBM Plex Mono', monospace",     
      flexWrap: 'nowrap'
    },
    ".MuiAutocomplete-inputRoot:focus-within":{
        width: 'auto'
    },
    "& .MuiChip-root":{
        backgroundColor: 'yellow'
    }
  });
interface Attribute{
    attribute: string;
};
type DBSelect = Attribute[];

export default function Test() {
  return (
    <Autocomplete
      multiple
      options={top100Films}
      limitTags={1}
      size='small'
      disableCloseOnSelect
      getOptionLabel={(option:Attribute) => option.attribute}
      renderOption={(props, option:Attribute, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.attribute}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="SQL Specifires" />
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


