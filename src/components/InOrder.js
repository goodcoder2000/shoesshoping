import React from "react";

const InOrder = ({date, time, title, img}) =>{
    return(
        <div className="in-order">
            <h3>{date}</h3>
            <h3>{time}</h3>
            <h3>{title}</h3>
            <div className="cart-image-container">
                <img width="100%" src={img}  />
            </div>
        </div>
    )
}
export default InOrder;