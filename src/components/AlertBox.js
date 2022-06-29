import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertBox = ({severity, message, position}) => {
  return (
    <Stack style={{position: position, top: "10px",  marginBottom: "10px"}} sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity={severity}>{message}</Alert>
    </Stack>
  );
}

export default AlertBox;