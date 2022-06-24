import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from "react-router-dom";
import Usefetch from "../components/Usefetch";

const Profile = () =>{
    const navigate = useNavigate();
    const { userId } = useParams();

    const { data, preLoading } = Usefetch("http://localhost:3001/users/"+ userId);
    return(
        <div>
            { data && <div className="profile">
            <div>
                <IconButton
                onClick= {() =>navigate('/home')}
                >
                    <ArrowBackIcon/>
                </IconButton>
            </div>

            <div className="profile-body">
                
                <div className="ava">L</div>
                <h4 className="user-name">User - {data.name}</h4>

                <div className="user-id">User id - {data._id}</div>
                <div className="user-phone">Ph no - {data.phone}</div>
                <div className="user-phone">Address -{data.address} </div>
                <Button style={{margin: "10px"}} variant="outlined">Logout</Button>
            </div>
        </div>}
        </div>
    )
}
export default Profile;