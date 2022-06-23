import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup  = () =>{
    const navigate = useNavigate();

    const [ userName, setUsername] = useState(null);
    const [ phoneno, setPhoneno] = useState(null);
    const [ password, setPassword] = useState(null);
    const [ rePassword, setrePassword] = useState(null);
    const [ address, setAddress] = useState(null);
    const [ orderpost, setOrderpost] = useState([]);
    

    const foruserName = (e) =>{
        setUsername(e.target.value);
    }
    const forPhoneno = (e) =>{
        setPhoneno(e.target.value);
    }
    const forPassword = (e) =>{
        setPassword(e.target.value);
    }
    const forrePassword = (e) =>{
        setrePassword(e.target.value);
    }
    const forAddress = (e) =>{
        setAddress(e.target.value);
    }

    const DataInputToServer = () =>{
        if(password !== rePassword){
         alert("password need to the same")
        } else {
            let data = {name :userName,phone : phoneno,password: password,address : address, orderpost: orderpost}

            
            fetch("http://localhost:3001/",{
                method: "POST",
                headers:    {'Content-Type': 'application/json'},
                body:   JSON.stringify(data)
            })
            .then(() =>{
                console.log("data post successfully!");
                navigate('/login');
            })
        }
    }

    return(
   
                    <div className="login-box">
                        <h2 style={{textAlign: "center"}}>Sign Up</h2>

                        <div className="input-type-control">
                            <TextField
                            onChange={ foruserName }
                            sx={{ m: 1, width: '30ch' }}
                            label="Name"
                            type="email"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        <div className="input-type-control">
                            <TextField
                            onChange={ forPhoneno }
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
                            onChange={ forPassword }
                            sx={{ m: 1, width: '30ch' }}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        

                        <div className="input-type-control">
                            <TextField
                            onChange={ forrePassword }
                            sx={{ m: 1, width: '30ch' }}
                            label="Re-type Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        <div className="input-type-control">
                            <TextField
                            onChange={ forAddress }
                            sx={{ m: 1, width: '30ch' }}
                            label="Address"
                            autoComplete="current-password"
                            variant="standard"
                            />
                        </div>

                        <div className="input-type-control">
                            <Button variant="outlined"
                            onClick={ DataInputToServer }
                            >
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