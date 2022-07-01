import React from "react";
import InOrder from "./InOrder";

const OrderDiv = ({title, img, time}) =>{
    return(
        <div className="order-div">
           <InOrder title={title} img={img} time={time} />
        </div>
    )
}
export default OrderDiv;