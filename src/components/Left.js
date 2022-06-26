import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";

const Left = () =>{
    const navigate = useNavigate();

    return(
        <div className="left">
                    <div>
                        <p className="left-small-text">SAMOA</p>
                        <p className="left-small-text">COMPRESS EN NIKE PRO</p>
                        <p className="left-small-text">TOP EN T-SHIRT</p>
                        <p className="left-small-text">BROKEN EN TIGHTS</p>
                    </div>

                    <div className="shop-btn-container">
                        <p className="left-small-pirces">US$98</p>
                        <div>
                            <Typography>
                                        NIKE ZOOM <br/>
                                        LUNAR SKYELUZ
                            </Typography>

                            <Button variant="contained"
                                    style={{borderRadius:   "2px", marginTop: "20px", backgroundColor:  '#9F0124', padding: "14px"}}
                                    onClick={ () => navigate("/login")}
                                    >SHOP NOW
                                    <ArrowRightAltIcon/>
                            </Button>
                        </div>
                    </div>
        </div>
    )
}
export default Left;