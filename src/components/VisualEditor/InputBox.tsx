import * as React from "react";
import {useState} from 'react';
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import MuiAutocomplete from '@mui/material/Autocomplete';
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const Autocomplete = styled(MuiAutocomplete)({
  ".MuiAutocomplete-inputRoot": {
    width: 160,
    color: "white",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  ".Mui-focused":{
    width: 200,
    zIndex: 2
  }
});

interface Props{
  data: string[];
}
export default function ({data}:Props){
  const [text, setText] = useState('integer');
  return (
      <Autocomplete
        defaultValue='INTEGER'
        options={data.map((option) => option)}
        renderInput={(params) => <TextField 
          label = 'Data Type'
          {...params} 
        />}
      />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
