import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Link } from "react-router-dom";
import Usefetch from "../components/Usefetch";
import CircularProgress from '@mui/material/CircularProgress';
import AlertBox from "../components/AlertBox";
import { useNavigate } from "react-router-dom";

const Login  = () =>{
    const { data, preLoading} = Usefetch("http://localhost:3001/");
    const [ phoneno, setPhoneno] = useState(null);
    const [ password, setPassword] = useState(null);
    const [ errAlert, setErrAlert] = useState(false);


    const navigate = useNavigate();

    const loginCheck = () =>{
            let findingUser = data.filter((user) => user.phone === phoneno && user.password === password);
            if(findingUser.length === 0){
                setErrAlert(true);
                setTimeout(() =>{
                    setErrAlert(false);
                }, 3000)
                return
            } else {
                navigate(`/${phoneno}/${findingUser.map((item) =>item._id)}/home`) 
            }
        }
    
    return(
       <div>    
               { data&& <div className="login-box">
                <h2 style={{textAlign: "center"}}>Login</h2>

                <div className="input-type-control">
                    <TextField
                    onChange={(e) =>setPhoneno(e.target.value)}
                    defaultValue="09"
                    sx={{ m: 1, width: '30ch' }}
                    label="Phone Number"
                    type="email"
                    autoComplete="current-password"
                    variant="standard"
                    />
                </div>

                <div className="input-type-control">
                    <TextField
                    onChange={(e) =>setPassword(e.target.value)}
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
                    onClick={ loginCheck }
                    >
                        Login
                    </Button>
                </div>

                <div style={{textAlign: "center"}}>
                    <Link to="/signup">create account?</Link>
                </div>
            </div> }
        {/* preLoading */}
            {preLoading && 
                <div className="preloading">
               <CircularProgress style={{color: "#6C757D"}}/>
            </div>
}
        {/* password error Alert box */}
        {
            errAlert && <AlertBox/>
        }
       </div>
    )
}
export default Login;