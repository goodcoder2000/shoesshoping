import  Grid  from "@mui/material/Grid";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import IconButton  from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';


const Cnav = () =>{
    const navigate = useNavigate();
    const [ menu, setMenu] = useState("none");
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
                    <IconButton
                    onClick={ () => setMenu("block")}
                    >
                        <MenuIcon fontSize="large"/>
                    </IconButton>

                    <div style={{display: menu}} className="hidden-small-menu">
                            <div className="small-login"
                            onClick={ () =>navigate('/login') }
                            >Login</div>
                            <div className="small-login"
                            onClick={ () =>navigate('/signup') }
                            >Signup</div>
                            
                            <div className="close-btn-menu"
                            onClick={ () => setMenu("none") }
                            >
                                <IconButton>
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                    </div>
                </div>
            </Hidden>
        </div>       
    )
}
export default Cnav;