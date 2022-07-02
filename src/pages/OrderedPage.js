import React from "react";
import AdminNav from "../components/AdminNav";
import Usefetch from "../components/Usefetch";
import SortTime from "./Admin/SortTime";

const OrderedPage = () =>{
    const { data } = Usefetch('https://api-shoes-testing.onrender.com/users')

    return(
        <div>
            <AdminNav/>
            <div className="orderpage">
                { data?.filter((ex) => ex.orderConformed.length !==0 ).map((ep, index) => <SortTime key={ep._id} name={ep.name} orderConformed={ep.orderConformed} index={index}/>)}
            </div>
        </div>
    )
}
export default OrderedPage;