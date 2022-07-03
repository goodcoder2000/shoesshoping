import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderDiv from "../components/OrderDiv";

const OrderedItems = () =>{
    const { userId } = useParams();
    const [ data, setData] = useState(null);

    useEffect(() =>{
        fetch("https://api-shoes-testing.onrender.com/users/"+userId)
        .then((res) =>{
            return res.json();
        })
        .then((data) => {
            setData(data)
        })
        .catch((err) => console.log(err))
    },[])

    return(
        <div>
            <h2 className="inprocess-item">In ordered Items</h2>

                    <div>
                        { data?.orderConformed.map((eachOrderItem, index) => <OrderDiv key={index} title={eachOrderItem.title} img={eachOrderItem.img} date={eachOrderItem.date} time={eachOrderItem.time} delivered={eachOrderItem.delivered} />).reverse()}
                    </div>
        </div>
    )
}
export default OrderedItems;