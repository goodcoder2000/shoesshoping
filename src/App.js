import React from "react";
import Cover from "./components/Cover";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Nav from "./components/Nav";

const App = () =>{
  return(
    <BrowserRouter>
      <div>
            <Routes>
              <Route path="/" element={<Cover/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/home/products/:id" element={<Details/>}/>
            </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;