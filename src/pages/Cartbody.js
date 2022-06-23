import React from "react";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button } from "@mui/material";

const Cartbody = ({data}) =>{

    return(
        <>
            <div className="cart-item-container">
                            <div className="cart-image-title">
                                <div className="cart-image-container">
                                    <img width="100%" />
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
                        {data && console.log(data.orderpost)}
        </>
    )
}
export default Cartbody;
