import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Hidden from "@mui/material/Hidden";
import Profile from "../pages/Profile";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Nav = () =>{
    const [ display, setDisplay] = useState('none');
    return(
            <div className="nav">
                <Grid container>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={7}>
                    <Hidden only={["sm", "xs"]}>
                        <h2 className="title">SHOPPING SHOES</h2>
                    </Hidden>
                    <Hidden only={["xl","lg","md"]}>
                        <h3 className="title">SHOPPING SHOES</h3>
                    </Hidden>
                </Grid>

                <Grid item xl={6} lg={6} md={6} sm={6} xs={5} textAlign="right">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={5} color="primary">
                            <ShoppingCartIcon fontSize="large"/>
                        </StyledBadge>
                    </IconButton>
           
                    <IconButton
                    onClick = { () =>{
                        setDisplay("flex");
                    }}
                    >
                        <PersonPinIcon fontSize="large"/>
                    </IconButton>
               
                </Grid>
            </Grid>

               <div style={{position:'relative'}}>
                <Profile display={display} setDisplay={setDisplay}/>
               </div>
            </div>
    )
}
export default Nav;