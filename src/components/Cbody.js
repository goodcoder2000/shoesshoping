import Grid from "@mui/material/Grid";
import React from "react";
import Left from "./Left";
import Right from "./Right";

const Cbody = () =>{
    return(
        <div>

            <Grid container>

                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Left/>
                </Grid>
                
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Right/>
                </Grid>

            </Grid>

            {/* <img src={cvshoes} className="CImg"/>
            <Typography variant="p" className="backgroundText">
                S     A     M     O     A
            </Typography>
    */}
        </div>
    )
}
export default Cbody;