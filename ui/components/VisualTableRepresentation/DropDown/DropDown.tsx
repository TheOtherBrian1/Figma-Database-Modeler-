import * as React from 'react';
import {useState} from 'react';
import Popover from '@mui/material/Popover';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Button from '@mui/material/Button';

export default function DropDown(){
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <Button onClick={handleClick}>
                <ArrowDropDownCircleIcon 
                    sx = {[
                            {color: 'blue'},
                            open && { transform: 'scale(-1)' }
                    ]}
                />
            </Button>
            <Popover 
                anchorEl = {anchorEl}
                onClose={handleClose}
                open = {open}
                sx = {{
                    ".MuiPopover-paper":{
                        padding: 1,
                        color: 'red'
                    }
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
            >
                <DeleteForeverIcon onClick = {()=>console.log('duck')} />
            </Popover>
        </ >
    )
}
