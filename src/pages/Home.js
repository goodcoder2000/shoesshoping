import React,{useState, useEffect} from "react";
import Usefetch from "../components/Usefetch";
import Homelayout from "./Homelayout";

const Home = () =>{
    
    const { data, preLoading } = Usefetch("https://fakestoreapi.com/products");

    
    return(
        <div>
           <Homelayout data={data}/>
        </div>
    )
}
export default Home;