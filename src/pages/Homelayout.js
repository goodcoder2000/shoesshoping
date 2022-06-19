import React from "react";
import Nav from "../components/Nav";
import Shoes from "./Shoes";

const Homelayout = ({data}) =>{
    return(
        <div className="home-layout">
            <Nav/>
            <Shoes data={data}/>
            
        </div>
    )
}
export default Homelayout;