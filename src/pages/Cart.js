import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import one from "../images/1.png";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () =>{
    const navigate = useNavigate();
    return(
        <div className="cart">
            <div>
                <IconButton
                onClick={ ()=>navigate('/home') }
                >
                    <ArrowBackIcon fontSize="large"/>
                </IconButton>
            </div>

            <h2 className="cart-title">Cart</h2>

            <div className="cart-item-container">
                <div className="cart-image-title">
                    <div className="cart-image-container">
                        <img width="100%" src={one}/>
                    </div>
                    <h2 className="product-title">Adidas</h2>
                </div>

                <div>
                    <p className="product-price">34444 ks</p>
                </div>

                <div>
                    <IconButton>
                        <HighlightOffIcon fontSize="large"/>
                    </IconButton>
                </div>
            </div>

            <div className="order-now-btn">
                <Button variant="contained">
                    Order Now
                </Button>
            </div>
        </div>
    )
}
export default Cart;
