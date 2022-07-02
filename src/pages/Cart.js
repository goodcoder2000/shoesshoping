import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Usefetch from "../components/Usefetch";
import Cartbody from "./Cartbody";
import AlertBox from "../components/AlertBox";
import * as dayjs from 'dayjs';

const Cart = () =>{
    const navigate = useNavigate();
    const { userId } = useParams();
    const { data, preLoading } = Usefetch("https://api-shoes-testing.onrender.com/users/"+userId);

    const [ addValue, setAddvalue ] = useState([]);
    const [ orderSuccess, setOrderSuccess] = useState(false);
    const [ orderfail, setOrderfail] = useState(false);

    
    const add = (_id, count, price, title, img) =>{
        setAddvalue([...addValue,{_id: _id, count: count, price: price,title: title, time: dayjs().format('H:m'), img: img, date: dayjs().format('DD/MM/YYYY')}])
    }

    const remove = (_id) =>{
        setAddvalue(addValue.filter((item) => item._id !== _id))
    }
    
    const orderConform = () =>{   
        
        if(addValue.length ===0){
            setOrderfail(true);
            setTimeout(() =>{
                setOrderfail(false);
            }, 2000)
            return;
        }

        for(let i=0; i<addValue.length; i++){
            console.log(addValue[i])

        fetch(`https://api-shoes-testing.onrender.com/users/${userId}/ordered`,{
            method: "PATCH",
            headers:    {"Content-type": "application/json"},
            body:   JSON.stringify(addValue[i])
        })
        .then(() =>{
            console.log('success')
            setOrderSuccess(true)
            setTimeout(() =>{
                setOrderSuccess(false)
            }, 2000)
        })
        .catch(err =>console.log(err))
        }
        
    }
  
    const deleteHandler = (_id) =>{
        fetch(`https://api-shoes-testing.onrender.com/users/${userId}/pull`,{
            method: "PATCH",
            headers:    {"Content-type": "application/json"},
            body:   JSON.stringify({_id})
        })
        .then(() =>{
            console.log('delete success')
            window.location.reload();
        })
    }

    setInterval(() => {
        window.location.reload()
    }, 60000);
    let finalsumResult = addValue.map((eachorder) => eachorder.price* eachorder.count)
    return(
        <div className="cart">
                <div>
                    <div>
                        <IconButton
                        onClick={ ()=>navigate(`/${data.phone}/${data._id}/home`) }
                        >
                            <ArrowBackIcon fontSize="large"/>
                        </IconButton>
                    </div>

                    <h2 className="cart-title">Cart</h2>
                    { data && data.cartItems.map((eOrderItem) =>{
                        return <Cartbody key={eOrderItem._id} title={eOrderItem.title} img={eOrderItem.img} price={eOrderItem.price} _id={eOrderItem._id} add={add} remove={remove} count={eOrderItem.count} deleteHandler={deleteHandler}/>
                    })
                    }

                    <div>
                        <h2>Total Price - {finalsumResult.reduce((partialSum, a) => partialSum + a, 0)} Dollars </h2>

                    </div>
                    <div className="order-now-btn">
                            { orderSuccess && <AlertBox message="Order Success" severity="success"/>}
                            { orderfail && <AlertBox message="Please Select Product!!!" severity="error"/>}
                            <Button variant="contained"
                            onClick={ orderConform }
                            >
                                Order Now
                            </Button>
                    </div>

                    { data && <Link to={`/${data.phone}/${data._id}/inorderitems`} >Ordered Products</Link>}
                </div>
        </div>
    )
}
export default Cart;