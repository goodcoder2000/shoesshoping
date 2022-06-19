import React from "react";
import one from "../images/1.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const Eachp = ({image}) =>{
    return(
        <div className="each-product">
            <div className="product-header">
                <p>NIKE</p>
                <h4>EPIC-REACT</h4>
                <p>$130.0</p>
            </div>
            <div className="product-fav">
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
            </div>
            
            <div className="product-img-container">
                <img className="img-contorl" src={image}/>
            </div>


            <div className="add-cart-btn">
                <Link to="">more</Link>
            </div>
        </div>
    )
}
export default Eachp;