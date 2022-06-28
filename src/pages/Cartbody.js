import React from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
                              <IconButton onClick={ () =>deleteHandler(_id)}>
                                  <DeleteForeverIcon fontSize="large"/>
                              </IconButton>
                            </div>
        
        
            </div>

        </>
    )
}
export default Cartbody;
