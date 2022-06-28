import * as React from 'react';
import Switch from '@mui/material/Switch';

const  SwitchBtn = ({_id, count, price, add, remove}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    if(!checked){
        setChecked(true);
        add(_id,count,price)
    } else {
        setChecked(false);
        remove(_id)
    }
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
export default SwitchBtn;
