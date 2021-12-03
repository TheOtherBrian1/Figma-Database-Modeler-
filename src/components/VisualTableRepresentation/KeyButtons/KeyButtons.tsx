import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {styled} from "@mui/material/styles";

export default function KeyButtons() {
  const [formats, setFormats] = React.useState(() => ['primary', 'foreign']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };
/*
  const ToggleButton = styled(MUIToggleButton)({
    ".MuiButtonBase-root": {
        color: "#e8ecee",
        backgroundColor: "rgba(19,133,255, .2)",
        borderRadius: "50%",
        width: 25,
        height: 25
    }
  });
  */


  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton sx = {
          {
              backgroundColor:'rgba(19,133,255, .2)',
              position: 'relative', 
              padding: '14px !important', 
              borderRadius: '50% !important', 
              marginLeft: '5px !important'}
            } 
              value="primary" aria-label="primary">
            <span style = {{color: '#e8ecee', position: 'absolute', padding: 0, margin: 0}} title = "Primary Key" className = 'key'>PK</span>
      </ToggleButton>
      <ToggleButton sx = {
          {
              position: 'relative', 
              padding: '14px !important', 
              borderRadius: '50% !important', 
              marginLeft: '5px !important'}
            } 
            value="foreign" aria-label="foreign">
            <span style = {{color: '#e8ecee', position: 'absolute',padding: 0, margin: 0}}  title = "Foreign Key" className = 'key'>FK</span>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}