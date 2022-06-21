import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Usefetch from "../components/Usefetch";
import CircularProgress from '@mui/material/CircularProgress';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Details = () =>{
    const [ count, setCount] = useState(1);
    const { id } = useParams();
    const { data, preLoading } = Usefetch("https://fakestoreapi.com/products/"+ id);

    const dataRecieve = (image,title,price,id) =>{
        console.log({image: image, title:  title, price: price, id: id})
    }
    return(
        <div>
            <Nav/>
            
            {data &&
            <div className="details-container">
               
                    <div className="details-image-container">
                        <img width="100%" height="100%" src={data.image}/>
                    </div>

                    <div className="product-details">
                        <h3>{data.title}</h3>

                        <h4>Description</h4>
                        <p>{data.description}</p>

                        
                    </div>

                    <div className="order-btn-session">
                            <div className="product-remove-add">
                                <div>
                                    <IconButton
                                    onClick={() =>{
                                        if(count ===1){
                                            setCount(1)
                                        }   else{
                                            setCount(count-1)
                                        }
                                    }}
                                    >
                                        <RemoveIcon/>
                                    </IconButton>
                                </div>
                                <div>
                                    <input value={count} type="text" className="remove-add-textField"/>
                                </div>
                                <div>
                                    <IconButton
                                    onClick={ () =>setCount(count+1)}
                                    >
                                        <AddIcon/>
                                    </IconButton>
                                </div>
                            </div>
                            
                            <div>
                                <Button style={{color: "red", borderColor:  "red"}} variant="outlined"
                                onClick={ () => dataRecieve(data.image,data.title,data.price,data.id) }
                                >add to cart <AddShoppingCartIcon/></Button>
                            </div>
                    </div>

            
            </div>
            }
            {/* preLoading */}
            {preLoading && 
                <div className="preloading">
               <CircularProgress style={{color: "#6C757D"}}/>
            </div>
            }
        </div>
    );
}

export default Details;