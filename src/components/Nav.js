import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Hidden from "@mui/material/Hidden";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Usefetch  from "./Usefetch";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Nav = () =>{
    const {userPhno, userId} = useParams();
    const {data} = Usefetch("http://localhost:3001/users/"+userId);
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
                    {
                        data&& <IconButton aria-label="cart"
                                onClick={() =>navigate(`/${userPhno}/${userId}/cart`)}
                                >
                            <StyledBadge badgeContent={data.orderpost.length} color="error">
                                <ShoppingCartIcon fontSize="large"
                                style={{color: "#DEE2E6"}}
                                />
                            </StyledBadge>
                        </IconButton>
                    }
           
                    <IconButton
                    onClick={ () => navigate(`/profile/${userId}`)}
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