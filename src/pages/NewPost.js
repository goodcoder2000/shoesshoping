import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const NewPost  = () =>{
    const [ title, setTitle] = useState();
    const [ price, setPrice] = useState();
    const [ category, setCategory] = useState();
    const [ discription, setDiscription] = useState();
    const [ img, setImglink] = useState();

    const itemSubmit = () =>{
        console.log(title, price, category, discription, img)

        fetch("https://api-shoes-testing.onrender.com/shoesmenu",{
            method: 'POST',
            headers:    {"Content-type": "application/json"},
            body: JSON.stringify({title, price, category, discription, img})
        })
        .then(() =>{
            console.log('submit success')
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <AdminNav/>
            <div className="new-post-body">

                <h3 className="admin-sub-title">Post New product</h3>
                
                <div style={{textAlign: "center"}}>
                    <TextField label="title"  margin="dense" id="for title"
                    onChange={ (e) =>setTitle(e.target.value) }
                    />
                </div>
                
                <div style={{textAlign: "center"}}>
                    <TextField label="price"  margin="dense" id="for pirce"
                    onChange= { (e) =>setPrice(parseInt(e.target.value)) }
                    />
                </div>

                <div style={{textAlign: "center"}}>
                    <TextField label="category" margin="dense" id="category"
                    onChange={ (e) =>setCategory(e.target.value) }
                    />
                </div>

                <div>
                    <TextField label="discription"
                    maxRows={5}
                    margin="dense"
                    id="for discription"
                    fullWidth
                    onChange={ (e) => setDiscription(e.target.value) }
                    />
                </div>
                
                <div>
                    <TextField label="image link"
                    maxRows={5}
                    margin="dense"
                    id="for imagelink"
                    fullWidth
                    onChange={ (e) =>setImglink(e.target.value) }
                    />
                </div>

                <div style={{textAlign: "center"}}>
                    <Button variant="contained"
                    onClick={ itemSubmit }
                    >Add New Item</Button>
                </div>
            </div>
        </div>
    )
}

export default NewPost;