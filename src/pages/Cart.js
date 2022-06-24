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

    const { data, preLoading } = Usefetch("http://localhost:3001/users/"+userId);

    const removeProduct = (_id) =>{
        fetch("http://localhost:3001/users/"+userId+"/pull",{
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({_id})
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
                        onClick={ ()=>navigate(`/${data.phone}/${data._id}/home`) }
                        >
                            <ArrowBackIcon fontSize="large"/>
                        </IconButton>
                    </div>

                    <h2 className="cart-title">Cart</h2>

                    { data && data.orderpost.map((eOrderItem) =>{
                        return <Cartbody key={eOrderItem._id} title={eOrderItem.title} image={eOrderItem.image} price={eOrderItem.price} _id={eOrderItem._id} removeProduct={removeProduct}/>
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
