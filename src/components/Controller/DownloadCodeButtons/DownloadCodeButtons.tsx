import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';

export default function LoadingButtonsTransition() {
  const [checkTable, setCheckTable] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(false);
  const [viewCode, setViewCode] = React.useState(false);

  return (
    <Box sx={{ '& > button': { m: 1 } }}>
      <LoadingButton
        onClick={()=>setCheckTable(!checkTable)}
        loading={checkTable}
        loadingIndicator="Loading..."
        variant="outlined"
      >
        Test Selected
      </LoadingButton>

      <LoadingButton
        onClick={()=>setCheckAll(!checkAll)}
        loading={checkAll}
        loadingIndicator="Loading..."
        variant="outlined"
      >
        Test database
      </LoadingButton>

      <LoadingButton
        onClick={()=>setViewCode(!viewCode)}
        loading={viewCode}
        loadingIndicator="Loading..."
        variant="outlined"
      >
        View SQL
      </LoadingButton>


    </Box>
  );
}
