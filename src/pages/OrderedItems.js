import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InOrder from "../components/InOrder";

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
                        <InOrder/>
                        {console.log(data)}
                    </div>
        </div>
    )
}
export default OrderedItems;