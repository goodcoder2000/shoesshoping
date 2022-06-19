import React from "react";
import Cbody from "./Cbody";
import Cfooter from "./Cfooter";
import Cnav from "./Cnav";
import Hidden from "@mui/material/Hidden";

const Cover = () =>{
    return(
        <div className="Cover">
            <Cnav/>
            <Cbody/>
            <Cfooter/>
        </div>
    )
}
export default Cover;