import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import one from "../images/1.png";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Usefetch from "../components/Usefetch";
import Cartbody from "./Cartbody";

const Cart = () =>{
    const navigate = useNavigate();
    const { userId } = useParams();

    const { data, preLoading } = Usefetch("http://localhost:3001/"+userId);

    const removeProduct = (id) =>{
        fetch("http://localhost:3001/pull/"+userId,{
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({id})
        })
        .then(() =>{
            console.log('removed')
        })
    }
   
    return(
        <div className="cart">
                <div>
                    <div>
                        <IconButton
                        onClick={ ()=>navigate('/home') }
                        >
                            <ArrowBackIcon fontSize="large"/>
                        </IconButton>
                    </div>

                    <h2 className="cart-title">Cart</h2>

                    { data && data.orderpost.map((eOrderItem) =>{
                        return <Cartbody key={eOrderItem.id} title={eOrderItem.title} image={eOrderItem.image} price={eOrderItem.price} id={eOrderItem.id} removeProduct={removeProduct}/>
                    })}

                    
                    <div className="order-now-btn">
                            <Button variant="contained">
                                Order Now
                            </Button>
                    </div>
                </div>
        </div>
    )
}
export default Cart;
