import React from "react";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

const EpersonO = ({name,userId,_id, title, count, img, price, time,date, indexpoint}) =>{
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        if(!checked){
            setChecked(true)
        } else {
            setChecked(false)
        }    
      };

      const deliveredBtn = () =>{
        if(checked){
            console.log(name,userId,_id, title, count, img, price, time,date, indexpoint)
            fetch("https://api-shoes-testing.onrender.com/users/"+userId+"/set/"+indexpoint,{
                method: 'PATCH',
                headers:    {'Content-type': 'application/json'},
                body: JSON.stringify({_id,count,price,title,time,img,date,delivered: true})
            })
            .then(() =>{
                console.log('delivered success')
            })
            .catch(err => console.log(err))    
        }
      }
    return(
        <div className="Eorder">
            <div>
                <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />
                <Button variant="contained"
                onClick={ deliveredBtn }
                >Order delivered</Button>
            </div>
            <div className="admin-current-title">
                <h2>{name}</h2>
                <h3>{title}</h3>
                <h3>count = {count}</h3>
                <h4>${price}</h4>
                <h4>{count}X{price} = {count*price}</h4>
            </div>

            <div className="admin-current-body">
                <div className="admin-ordered-see">
                    <img width="100%" src={img} alt="image"/>
                </div>

                <div>
                    {time}
                    
                </div>
            </div>            
        </div>
    )
}
export default EpersonO;