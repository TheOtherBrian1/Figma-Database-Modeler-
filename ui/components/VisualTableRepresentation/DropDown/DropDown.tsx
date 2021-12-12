import * as React from 'react';
import {useState} from 'react';
import Popover from '@mui/material/Popover';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {removeCol, createCol} from '../../../redux/table-interface/actions';

interface Props{
    tableIndex: number,
    colIndex: number,
    uuid: string
}

export default function DropDown({tableIndex, colIndex, uuid}:Props){
    const dispatch = useAppDispatch();
    const cols = useAppSelector(state=>state.tableReducer[tableIndex].cols);
    const length = cols.length;
    const figmaId = cols[colIndex].figmaId;
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
                {
                    length !== 1 && <DeleteForeverIcon
                        sx={{color: 'red'}}
                        onClick={e=>{
                            dispatch(removeCol(tableIndex, colIndex, uuid, figmaId));
                            handleClose();
                        }}
                    />
                }
                <AddBoxIcon
                    sx={{color: 'green'}}
                    onClick={e=>dispatch(createCol(tableIndex, colIndex, uuid))} 
                />
            </Popover>
        </ >
    )
}
