import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Link } from "react-router-dom";

const Signup  = () =>{
    return(
   
                    <div className="login-box">
                        <h2 style={{textAlign: "center"}}>Sign Up</h2>

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
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        

                        <div className="input-type-control">
                            <TextField
                            sx={{ m: 1, width: '30ch' }}
                            label="Re-type Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        <div className="input-type-control">
                            <TextField
                            sx={{ m: 1, width: '30ch' }}
                            label="Address"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        <div className="input-type-control">
                            <Button variant="outlined">
                                Register
                            </Button>
                        </div>

                        <div style={{textAlign: "center"}}>
                            <Link to="/login">Do you have account?</Link>
                        </div>
                </div>
    )
}
export default Signup;