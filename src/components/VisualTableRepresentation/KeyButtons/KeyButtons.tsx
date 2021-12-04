import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyKeys} from '../../../redux/tableReducer';
import store from '../../../redux/store';

interface Props{
  tableIndex: number,
  colIndex: number
}

export default function KeyButtons({tableIndex, colIndex}:Props) {
  const dispatch = useAppDispatch();
  const buttons = useAppSelector(state=>state.tableReducer[tableIndex].cols[colIndex].keys)
  return(
    <div className = 'key-button-container'>
        {
          buttons.map(([name, active], keyIndex)=>
            <ToggleButton
              key = {name+tableIndex+colIndex+keyIndex}
              value={name}
              selected={active}
              onChange={(e)=>{
                dispatch(modifyKeys(tableIndex, colIndex, keyIndex));
              }}
            >
              {name}
            </ToggleButton>
          )
        }
    </div>
  );
}

/*
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
      
    </ToggleButtonGroup>
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

*/