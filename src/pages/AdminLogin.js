import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AdminLogin = () =>{
    const navigate = useNavigate();
    const [adminName, setAdminName] = useState();
    const [adminPassword, setAdminpassword] = useState();

    const name = (e) =>{
        setAdminName(e.target.value);
    }

    const password = (e) =>{
        setAdminpassword(e.target.value);
    }

    const passwordCheck = () =>{
        if(adminName === "admin" && parseInt(adminPassword) === 1082018){
            navigate('/newpost');
        }  else {
            return;
        }
    }
    return(
        <div>    
            <div className="login-box">
                <h2 style={{textAlign: "center"}}>Admin Login</h2>

                <div className="input-type-control">
                    <TextField
                    onChange={ name }
                    sx={{ m: 1, width: '30ch' }}
                    label="Name"
                    type="email"
                    autoComplete="current-password"
                    variant="standard"
                    />
                </div>

                <div className="input-type-control">
                    <TextField
                    onChange={ password }
                    sx={{ m: 1, width: '30ch' }}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    />
                </div>

                <div className="input-type-control">
                    <Button variant="outlined"
                    onClick={ passwordCheck }
                    >
                        Login
                    </Button>
                </div>

            </div>
        </div>
    )
}
export default AdminLogin;