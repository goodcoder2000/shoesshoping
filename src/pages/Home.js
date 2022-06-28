import React from "react";
import Usefetch from "../components/Usefetch";
import Homelayout from "./Homelayout";
import CircularProgress from '@mui/material/CircularProgress';

const Home = () =>{
    
    const { data, preLoading } = Usefetch("https://api-shoes-testing.onrender.com/shoesmenu");

    
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