import React from "react";
import AdminNav from "../components/AdminNav";
import Usefetch from "../components/Usefetch";
import EOrder from "./Admin/EOrder";

const Current = () =>{
    const { data } = Usefetch("https://api-shoes-testing.onrender.com/shoesmenu");
    return(
        <div>
            <AdminNav/>
            <div className="current">
                <h3 className="admin-sub-title">In shop items</h3>
                    {
                        data?.map((eachCurrentItem, index) => <EOrder key={index} title={eachCurrentItem.title} discription={eachCurrentItem.discription} price={eachCurrentItem.price} category={eachCurrentItem.category} img={eachCurrentItem.img}/>)
                    }
            </div>
        </div>
    )
}
export default Current;