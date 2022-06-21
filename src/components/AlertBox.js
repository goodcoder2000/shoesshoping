import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertBox = () => {
  return (
    <Stack style={{position: "absolute", top: "10px"}} sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="error">Check your phone number or password!!!</Alert>
    </Stack>
  );
}

export default AlertBox;