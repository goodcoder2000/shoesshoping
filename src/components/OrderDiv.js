import React from "react";
import InOrder from "./InOrder";

const OrderDiv = ({eachOrderItem}) =>{
    return(
        <div className="order-div">
            {
                eachOrderItem.map((each) => <InOrder key={each._id} time={each.time} title={each.title} img={each.img}/>)
            }
        </div>
    )
}
export default OrderDiv;