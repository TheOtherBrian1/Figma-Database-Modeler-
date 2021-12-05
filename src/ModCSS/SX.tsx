import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SX() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx = {{
                color: 'green',
                fontSize: '40',
                fontFamily: 'cursive',
                transform: 'rotate(180deg)',
                ":hover":{
                    width: 60
                },
                ".MuiAutocomplete-input":{
                    fontSize: 20,
                    color: 'blue'
                }
            }
    }
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
];


/*
    Notes on sx:--------------------------------
        Short cut for defining custom styles that has access to theme
        - Permits any css value
        - importing values to SX: https://mui.com/system/the-sx-prop/#passing-sx-prop
            - Exceptions:
                - border cannot be defined as "solid black 1px"
                    - border, borderColor, and borderStyle are all seperate
                - width/height and their derivatives will interpret any number between 0 and 1 as a percentage
                - margin/padding set their values by multiplying your entry by theme.spacing, which is 8px by default
        - Also allows values that are made available through the theme
            - EXAMPLE:
                const theme = createTheme({
                    palette:{
                        background:{}//background
                        text:{...},//primary, secondary, etc
                        action:{...}//hover, focus, active
                        success:{...}//hyper specifying attribute
                    }
                })
                function Example(){
                    return(
                        <ThemeProvider theme = {theme}>
                            <Box
                                sx = {{
                                        width: 100,
                                        background: 'background.somePropertyFromTheme'
                                    },
                                    ":hover":{
                                        width: 100
                                    }
                                }
                            />
                        </ThemeProvider>
                    )
                }
        //Accessing sub components:
                //CSS classes that are accessible are refrenced in the docs:
                //https://mui.com/api/autocomplete/
                //sometimes, you can use css selectors, mainly & to get nested components
                    //& is not native to css. It's an extension of Sass and LESS. It means parent
                    // .parent .child is the equivalent to & .child
        //Special case: arrays
            sx can accept arrays,
            this is useful for when you want to have 
            multiple possible for styling
            - Example:
                function Example(){
                    const ifTrue = false;
                    const else = true;
                    return(
                        <ThemeProvider theme = {theme}>
                            <Box
                                sx = {[
                                    {//default
                                        color: 'red'
                                    },
                                    ifTrue && {//takes precedence because it's lower down
                                        color: 'blue'
                                    },
                                    else && {
                                        color: 'green'  
                                    }
                                ]}
                            />
                        </ThemeProvider>
                    )
                }
*/