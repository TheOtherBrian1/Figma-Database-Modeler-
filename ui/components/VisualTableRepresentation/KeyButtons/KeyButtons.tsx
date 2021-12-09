import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import {useAppDispatch, useAppSelector} from '../../../hooks/reduxHooks';
import {modifyKeys} from '../../../redux/tableReducer';

const colors = ['rgba(19,133,255, .2)', 'rgba(255, 161, 19, 0.2)']
interface Props{
  tableIndex: number,
  colIndex: number
}

export default function KeyButtons({tableIndex, colIndex}:Props) {
  const dispatch = useAppDispatch();
  const buttons = useAppSelector(state=>state.tableReducer[tableIndex].cols[colIndex].keys)
  console.log(buttons, 'milk');
  return(
    <>
      {
          buttons.map(([name, active], keyIndex)=>
            <ToggleButton
              key = {name+tableIndex+colIndex+keyIndex}
              value={active}
              selected={active}
              sx={{
                  p: 0,
                  m: 0,
                  height: 28,
                  backgroundColor: colors[keyIndex],
                  width: 28,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#e8ecee',
                  justifyContent: 'center',
              }}
              onChange={(e)=>{
                dispatch(modifyKeys(tableIndex, colIndex, keyIndex));
              }}
            >
              {name}
            </ToggleButton>
          )
        }
    </>
  );
}