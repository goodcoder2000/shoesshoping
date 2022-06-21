import React from "react";
import Grid from "@mui/material/Grid";
import Eachp from "../components/Eachp";

const Shoes = ({data}) =>{
    return(
        <div className="shoes">   
            <Grid container spacing={1}>

                {data?.map((eachp) =>{
                    return (
                        <Grid key={eachp.id} item xl={2} lg={4} md={3} sm={4} xs={6}>
                            <Eachp title={eachp.title} category={eachp.category} image={eachp.image} price={eachp.price} id={eachp.id}/>
                        </Grid>
                    )
                })}
                {
                    console.log(data)
                }

                
            </Grid>
        </div>
    )
}
export default Shoes;