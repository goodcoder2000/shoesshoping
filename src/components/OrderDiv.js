import React from "react";
import InOrder from "./InOrder";

const OrderDiv = ({title, img, date, time}) =>{
    return(
        <div className="order-div">
           <InOrder title={title} img={img} date={date} time={time} />
        </div>
    )
}
export default OrderDiv;