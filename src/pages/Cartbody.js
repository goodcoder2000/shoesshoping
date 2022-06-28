import React from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Cartbody = ({title, _id, img, price, add, remove, count, deleteHandler}) =>{

    return(
        <>
            <div className="cart-item-container">
                            <div className="cart-image-title">
                                <div className="cart-image-container">
                                    <img width="100%" src={img} />
                                </div>
                                <h2 className="product-title">{title}</h2>
                            </div>

                            <div>
                                <p className="product-price">{count} X {price} = {price *count} Dollars</p>
                            </div>

                            <div >
                              <button onClick={ () =>add(_id, count, price)}>add</button>
                            </div>

                            <div >
                              <button onClick={ () =>remove(_id)}>remove</button>
                            </div>

                            <div >
                              <button onClick={ () =>deleteHandler(_id)}>delete</button>
                            </div>
        
        
            </div>

        </>
    )
}
export default Cartbody;
