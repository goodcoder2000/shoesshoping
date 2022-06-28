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
    const [ displayforPlus, setDisplayPlus] = useState('block');
    const [ displayforminus, setDisplayminus] = useState('none');

  
    
    let inCheckData = [];
    const add = (_id, count, price) =>{
        inCheckData.push({_id, count, price});
        console.log(inCheckData)
    }
    
    let removeData = [];
    const remove = (_id) =>{
        removeData = inCheckData.filter((eachId) => eachId._id !== _id);
        console.log(removeData)
    }

    let finalOrder = [];
    if(removeData.length === 0){
        finalOrder = inCheckData;
    } else{
        finalOrder = removeData;
    }
    const orderConform = () =>{   
        if(finalOrder.length === 0){
            console.log('no item here')
            return;
        }
        fetch(`https://api-shoes-testing.onrender.com/users/${userId}/ordered`,{
            method: "PATCH",
            headers:    {"Content-type": "application/json"},
            body:   JSON.stringify(finalOrder)
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
        })
    }

    
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
                        <h3>Total - </h3>
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
