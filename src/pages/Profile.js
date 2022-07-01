import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from "react-router-dom";
import Usefetch from "../components/Usefetch";
import Nav from "../components/Nav";

const Profile = () =>{
    const navigate = useNavigate();
    const { userId } = useParams();

    const { data, preLoading } = Usefetch("https://api-shoes-testing.onrender.com/users/"+ userId);
    return(
        <div>
            <Nav/>
            { data && <div className="profile">
            <div>
                <IconButton
                onClick= {() =>navigate(`/${data.phone}/${data._id}/home`)}
                >
                    <ArrowBackIcon/>
                </IconButton>
            </div>

            <div className="profile-body">
                
                <div className="ava">{data.name[0].toUpperCase()}</div>
                <h4 className="user-name">User - {data.name}</h4>

                <div className="user-id">User id - {data._id}</div>
                <div className="user-phone">Ph no - {data.phone}</div>
                <div className="user-phone">Address -{data.address} </div>
                <Button style={{margin: "10px"}} variant="outlined"
                onClick={ () =>navigate('/login')}
                >Logout</Button>
            </div>
        </div>}
        </div>
    )
}
export default Profile;