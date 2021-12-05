import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';

//INCREDIBLY VALUABLE THEME BUILDER: https://bareynol.github.io/mui-theme-creator/#Snackbar


//by default, themes come with a few built in objects
/*
  -palette: provides you with 6 base colors:(https://mui.com/customization/palette/)
    //you can define new colors or modify the base colors
    -primary
      //colors also have the following sub color properties
      -light
      -main
      -dark
    -secondary
    -error
    -warning
    -info
    -success
*/
/*
  -typography: controls fonts (https://mui.com/customization/typography/)
    -fontFamily: by default, the font family is set to Roboto, but you can modify it
    
*/
const theme = createTheme({
  palette:{
    primary:{
      main: 'green',
      dark: 'yellow',
      whatever: 'duck'//typescript won't let you. You are limited to the 3 base colors of dark, main, and light
    }
  }
})

//






export default function Base() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
];
