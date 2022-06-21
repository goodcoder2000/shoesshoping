import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Link } from "react-router-dom";

const Login  = () =>{
    return(
   
                    <div className="login-box">
                        <h2 style={{textAlign: "center"}}>Login</h2>

                        <div className="input-type-control">
                            <TextField
                            defaultValue="09-"
                            sx={{ m: 1, width: '30ch' }}
                            label="Phone Number"
                            type="email"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        <div className="input-type-control">
                            <TextField
                            sx={{ m: 1, width: '30ch' }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        <div className="input-type-control">
                            <Button variant="outlined">
                                Login
                            </Button>
                        </div>

                        <div style={{textAlign: "center"}}>
                            <Link to="/signup">create account?</Link>
                        </div>
                </div>
    )
}
export default Login;