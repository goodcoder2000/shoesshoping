import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import one from "../images/1.png";
const Cart = () =>{
    return(
        <div className="cart">
            <div>
                <IconButton>
                    <ArrowBackIcon fontSize="large"/>
                </IconButton>
            </div>

            <h2>Cart</h2>

            <div className="cart-item-container">
                <div className="cart-image-title">
                    <div className="cart-image-container">
                        <img width="100%" src={one}/>
                    </div>
                    <h2>Adidas</h2>
                </div>

                <div>
                    <p>34444 ks</p>
                </div>
            </div>
        </div>
    )
}
export default Cart;
