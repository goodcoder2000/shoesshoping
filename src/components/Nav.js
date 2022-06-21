import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Hidden from "@mui/material/Hidden";
import { useNavigate } from "react-router-dom";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Nav = () =>{
    const navigate = useNavigate();
    return(
            <div className="nav">
                <Grid className="header-ajustment" container>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={7}>
                    <Hidden only={["sm", "xs"]}>
                        <h2 className="title">SHOPPING SHOES</h2>
                    </Hidden>
                    <Hidden only={["xl","lg","md"]}>
                        <h3 className="title">SHOPPING SHOES</h3>
                    </Hidden>
                </Grid>

                <Grid item xl={6} lg={6} md={6} sm={6} xs={5} textAlign="right">
                    <IconButton aria-label="cart"
                    onClick={() =>navigate('/cart')}
                    >
                        <StyledBadge badgeContent={5} color="error">
                            <ShoppingCartIcon fontSize="large"
                            style={{color: "#DEE2E6"}}
                            />
                        </StyledBadge>
                    </IconButton>
           
                    <IconButton
                    onClick={ () => navigate('/profile')}
                    >
                        <PersonPinIcon fontSize="large"
                        style={{color: "#DEE2E6"}}
                        />
                    </IconButton>
               
                </Grid>
            </Grid>

            </div>
    )
}
export default Nav;