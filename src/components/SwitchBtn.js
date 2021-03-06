import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const  SwitchBtn = ({_id, count, price, add, remove, title, img}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    if(!checked){
        setChecked(true);
        add(_id,count,price,title,img);
    } else if(checked) {
        setChecked(false);
        remove(_id)
    }
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
export default SwitchBtn;
