import React from "react";
import Usefetch from "../components/Usefetch";
import Homelayout from "./Homelayout";
import CircularProgress from '@mui/material/CircularProgress';

const Home = () =>{
    
    const { data, preLoading } = Usefetch("https://fakestoreapi.com/products");

    
    return(
        <div>
           <Homelayout data={data}/>
           {preLoading && 
                <div className="preloading">
               <CircularProgress style={{color: "#6C757D"}}/>
            </div>
}
        </div>
    )
}
export default Home;