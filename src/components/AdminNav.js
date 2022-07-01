import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AdminNav = () =>{
    
    const navigate = useNavigate();

    return(
        <div>
            <h1 style={{textAlign: "center", marginBottom: "30px"}}>Admin</h1>
            <div className="admin-nav">
                <div>
                    <Button variant="outlined"
                    onClick={ () => navigate('/newpost') }
                    >New Post</Button>
                </div>

                <div>
                    <Button variant="outlined"
                    onClick={ () => navigate('/orderedpage') }
                    >Ordered Items</Button>
                </div>

                <div>
                    <Button variant="outlined"
                    onClick={ () => navigate('/current') }
                    >Current Items</Button>
                </div>
            </div>
        </div>

    )
}
export default AdminNav;