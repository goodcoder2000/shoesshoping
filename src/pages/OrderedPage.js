import React from "react";
import AdminNav from "../components/AdminNav";
import Usefetch from "../components/Usefetch";
import Orderperson from "./Admin/Orderperson";

const OrderedPage = () =>{
    const { data } = Usefetch('https://api-shoes-testing.onrender.com/users')

    return(
        <div>
            <AdminNav/>
            <div className="orderpage">
                { data?.map((eP, index) => <Orderperson key={eP._id}  orderConformed = {eP.orderConformed} />)}
            </div>
        </div>
    )
}
export default OrderedPage;