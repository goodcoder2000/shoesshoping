import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Usefetch from "../components/Usefetch";
import CircularProgress from '@mui/material/CircularProgress';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AlertBox from "../components/AlertBox";

const Details = () =>{
    const { userId} = useParams();

    const [ count, setCount] = useState(1);
    const { id } = useParams();
    const { data, preLoading } = Usefetch("https://api-shoes-testing.onrender.com/shoesmenu/"+ id);
    const [ addtocartMessage, setAddtocartMessage] = useState(true);

    const dataRecieve = (img,title,price,_id,count) =>{
        const dataTopostInorder = {img: img, title:  title, price: price, _id: _id, count: count};

        fetch("https://api-shoes-testing.onrender.com/users/"+userId+"/push",{
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(dataTopostInorder)
        })
        .then(() =>{
            console.log("successfully add cart item")
        })
        setAddtocartMessage(true);
        setTimeout(() =>{
            setAddtocartMessage(false);
        }, 1500)
        
    }
    return(
        <div>
            <Nav/>
            
            {data &&
            <div className="details-container">
               
                    <div className="details-image-container">
                        <img width="100%" height="100%" src={data.img}/>
                    </div>

                    <div className="product-details">
                        <h3>{data.title}</h3>

                        <h4>Description</h4>
                        <p>{data.discription}</p>

                        
                    </div>
                    {
                        addtocartMessage && <AlertBox severity="success" position="absolute" message="Added To Cart Successfully!!!"/>
                    }
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
                                    <span  type="text" className="remove-add-textField">{count}</span>
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
                                onClick={ () => dataRecieve(data.img,data.title,data.price,data._id,count) }
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