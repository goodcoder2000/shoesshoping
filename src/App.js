import React from "react";
import Cover from "./components/Cover";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Notexits from "./pages/Notexits";

const App = () =>{
  return(
    <BrowserRouter>
      <div>
            <Routes>
              <Route path="/" element={<Cover/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route exact path="/:userPhno/Home" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/home/products/:id" element={<Details/>}/>
              <Route path="*" element={<Notexits/>}/>
            </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;