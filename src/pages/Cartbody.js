import React from "react";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button } from "@mui/material";

const Cartbody = ({title, image, price, id,removeProduct}) =>{

    return(
        <>
            <div className="cart-item-container">
                            <div className="cart-image-title">
                                <div className="cart-image-container">
                                    <img width="100%" src={image} />
                                </div>
                                <h2 className="product-title">{title}</h2>
                            </div>

                            <div>
                                <p className="product-price">{Math.floor(price *1859)} Ks</p>
                            </div>

                            <div>
                                <IconButton
                                 onClick={ () =>removeProduct(id) }
                                >
                                    <HighlightOffIcon fontSize="large"/>
                                </IconButton>
                            </div>
            </div>

        </>
    )
}
export default Cartbody;
