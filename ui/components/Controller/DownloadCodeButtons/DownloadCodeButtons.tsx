import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import './DownloadCodeButton.css';


export default function LoadingButtonsTransition() {
  const [checkTable, setCheckTable] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(false);
  const [viewCode, setViewCode] = React.useState(false);

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
          onClick={()=>setViewCode(!viewCode)}
          loading={viewCode}
          loadingIndicator="Loading..."
          variant="outlined"
          sx={{width: 'auto', mx: '1px', p: 1}}
        >
          View SQL
        </LoadingButton>
    </div>
  );
}
