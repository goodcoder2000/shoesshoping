import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Usefetch from "../components/Usefetch";
import CircularProgress from '@mui/material/CircularProgress';

const Details = () =>{
    const { id } = useParams();
    const { data, preLoading } = Usefetch("https://fakestoreapi.com/products/"+ id);

    return(
        <div>
            <Nav/>
            
            {data &&
            <div className="details-container">
               
                    <div className="details-image-container">
                        <img width="100%" height="100%" src={data.image}/>
                    </div>

                    <div className="product-details">
                        <Button variant="outlined">Add to Cart</Button>
                        <h3>{data.title}</h3>

                        <h4>Description</h4>
                        <p>{data.description}</p>
                    </div>

            
            </div>
            }
            {/* preLoading */}
            {preLoading && 
                <div className="preloading">
               <CircularProgress color="secondary"/>
            </div>
            }
        </div>
    );
}

export default Details;