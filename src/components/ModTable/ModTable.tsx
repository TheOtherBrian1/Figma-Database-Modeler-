/*
    Create Table
    Name Table
    Id
    data type
    Special parameters
    fk/pk

*/
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

export default function ModTable() {
  const ariaLabel = { 'aria-label': 'description' };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Create New Table</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >   
                <Input placeholder = "new table name" defaultValue="New Table Name" inputProps={ariaLabel} />
                <Stack spacing={2} direction="row">
                    <Button variant="text">Create Table</Button>
                </Stack>
            </Box> 
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

