import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertBox = ({severity, message}) => {
  return (
    <Stack style={{position: "absolute", top: "10px"}} sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity={severity}>{message}</Alert>
    </Stack>
  );
}

export default AlertBox;