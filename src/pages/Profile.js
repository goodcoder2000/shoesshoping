import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Profile = () =>{
    const navigate = useNavigate();
    return(
        <div className="profile">
            <div>
                <IconButton
                onClick= {() =>navigate('/home')}
                >
                    <ArrowBackIcon/>
                </IconButton>
            </div>

            <div className="profile-body">
                
                <div className="ava">L</div>
                <h4 className="user-name">User - L Zay Ko Ko</h4>

                <div className="user-id">User id - </div>
                <div className="user-phone">Ph no - </div>
                <div className="user-phone">Address - </div>
                <Button style={{margin: "10px"}} variant="outlined">Logout</Button>
            </div>
        </div>
    )
}
export default Profile;