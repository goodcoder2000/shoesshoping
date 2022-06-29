import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SwitchBtn from "../components/SwitchBtn";

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


                            <div>
                                <SwitchBtn add={add} remove={remove} _id={_id} count={count} price={price} />
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
