import  Grid  from "@mui/material/Grid";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";


const Cnav = () =>{
    const navigate = useNavigate();

    return(
        <div className="cnav">
            <Grid container>

            <Hidden only={["sm", "xs"]}>
            <Grid item lg={6} md={6}>
                <h1 className="title">SHOPPING SHOES</h1>
            </Grid>
            </Hidden>

            <Hidden only={["xl","lg", "md"]}>
            <Grid item sm={12} xs={12}>
                <h2 style={{textAlign: "center", color: "#025474"}} className="title">SHOPPING SHOES</h2>
            </Grid>
            </Hidden>

            <Hidden only={["sm", "xs"]}>
            <Grid item lg={6} md={6} sm={12} textAlign="right">
            
                <Button variant="contained" style={{marginRight: "25px", borderRadius: "8px", backgroundColor: "#025474"}}>
                        <SearchIcon style={{color: "#fff", fontSize: "25px"}}/>
                </Button>
                <Button variant="outlined" style={{marginRight:  "25px", borderRadius:  "8px", color: "#9F0124", borderColor: "#9F0124"}}
                onClick={() =>navigate('/login')}
                >Login</Button>
                <Button variant="contained" style={{ borderRadius:  "8px", backgroundColor: "#9F0124"}}
                onClick={() =>navigate('/signup')}
                >Sign up</Button>
            </Grid>
            </Hidden>
            </Grid>

            <Hidden only={["xl","lg","md"]}>
                <div className="samll-icon">
                    <Button variant="outlined">
                        <MenuIcon fontSize="medium"/>
                    </Button>
                </div>
            </Hidden>
        </div>       
    )
}
export default Cnav;