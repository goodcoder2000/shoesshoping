import React from "react";
import cvshoes from "../images/cvshoes.png";
import Typography from "@mui/material/Typography";


const Right = () =>{
    return(
        <div className="right">
            <img src={cvshoes} className="CImg"/>
            {/* <Typography variant="p" className="backgroundText">
                S     A     M     O     A
            </Typography> */}
        </div>
    )
}
export default Right;