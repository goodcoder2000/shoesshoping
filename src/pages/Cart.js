import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Usefetch from "../components/Usefetch";
import Cartbody from "./Cartbody";

const Cart = () =>{
    const navigate = useNavigate();
    const { userId } = useParams();
    const { data, preLoading } = Usefetch("https://api-shoes-testing.onrender.com/users/"+userId);

    const [ addValue, setAddvalue ] = useState([]);

    
    
    const add = (_id, count, price) =>{
        setAddvalue([...addValue,{_id: _id, count: count, price: price}])
        
    }

    const remove = (_id) =>{
        setAddvalue(addValue.filter((item) => item._id !== _id))
    }
    
    
    const orderConform = () =>{   
       
        fetch(`https://api-shoes-testing.onrender.com/users/${userId}/ordered`,{
            method: "PATCH",
            headers:    {"Content-type": "application/json"},
            body:   JSON.stringify()
        })
        .then(() =>{
            console.log('success')
        })
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
                            <Button variant="contained"
                            onClick={ orderConform }
                            >
                                Order Now
                            </Button>
                    </div>
                </div>
        </div>
    )
}
export default Cart;
