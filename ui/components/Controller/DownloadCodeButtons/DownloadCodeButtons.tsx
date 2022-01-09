import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './DownloadCodeButton.css';
import { useSqlGenerator } from '../../../hooks/sqlHooks';
import {useAppSelector} from '../../../hooks/reduxHooks';

export default function LoadingButtonsTransition() {
  const [checkTable, setCheckTable] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(false);
  const [code, setCode] = React.useState('');
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const database = useAppSelector(state=>state.tableReducer);
  const canViewCode = useAppSelector(state=>state.controllerReducer.generateSQL)
  const getSQL = useSqlGenerator(); 
  

  return (
    <div className = 'button-container'>
        <LoadingButton
          onClick={()=>setCheckTable(!checkTable)}
          loading={checkTable}
          loadingIndicator="Loading..."
          variant="outlined"
          sx={{
            p: 1,
            mx: '1px',
            width: 'auto'
          }}
        >
          Test Selected
        </LoadingButton>

        <LoadingButton
          onClick={()=>setCheckAll(!checkAll)}
          loading={checkAll}
          loadingIndicator="Loading..."
          variant="outlined"
          sx={{p: 1, width: 'auto', mx: '1px'}}
        >
          Test database
        </LoadingButton>

        <LoadingButton
          onClick={()=>{
            setOpenDrawer(true)
            setCode(getSQL(database));
          }}
          loading={canViewCode}
          loadingIndicator="Loading..."
          variant="outlined"
          sx={{width: 'auto', position: 'relative', mx: '1px', p: 1}}
        >
          View SQL
        </LoadingButton>
        <div>
          <Drawer
            anchor = "right"
            open = {openDrawer}
            onClose={()=>setOpenDrawer(false)}
            sx = {
                    {
                      ".MuiDrawer-root":{padding: 10}
                    }
                  }
          >
            <div style = {{display: 'flex', flexDirection: 'column'}}>
              <Button
                onClick = {() => {navigator.clipboard?.writeText(code)}}
              >
                <ContentCopyIcon />
              </Button>
              <code>
                <pre style = {{width: 450}}>
                  {code}
                </pre>
              </code>
            </div>
          </Drawer>
        </div>
    </div>
  );
}
