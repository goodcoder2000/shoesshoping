import { Button, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const Profile = ({display, setDisplay}) =>{
    return(
        <div style={{display: display}} className="profile">
            <div>
                <IconButton onClick={() =>{
                    setDisplay('none');
                }}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <div className="ava">L</div>
            <h4 className="user-name">User - L Zay Ko Ko</h4>

            <div className="user-id">User id - </div>
            <div className="user-phone">Ph no - </div>
            <div className="user-phone">Address - </div>
            <Button style={{margin: "10px"}} variant="outlined">Logout</Button>
        </div>
    )
}
export default Profile;