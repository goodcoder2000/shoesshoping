import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Eachp = ({img,price,id,title,category}) =>{
    return(
        
        <div className="each-product">
            <div className="product-header">
                <p>{category}</p>
                <h4>{title}</h4>
            </div>

            <div className="product-fav">
                <IconButton>
                    <FavoriteBorderIcon/>
                </IconButton>
            </div>
            
            <div className="product-img-container">
                <img className="img-contorl" src={img}/>
            </div>

            <div className="eachp-footer">
                <p className="eachp-price">{Math.floor(price *1859)} Ks</p>
                <Link to={`details/${id}`}>
                    <ArrowForwardIcon/>
                </Link>
            </div>
           
        </div>
    )
}
export default Eachp;