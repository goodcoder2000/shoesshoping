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
import OrderedItems from "./pages/OrderedItems";
import AdminLogin from "./pages/AdminLogin";
import NewPost from "./pages/NewPost";
import OrderedPage from "./pages/OrderedPage";
import Current from "./pages/Current";

const App = () =>{
  return(
    <BrowserRouter>
      <div>
            <Routes>
              <Route path="/" element={<Cover/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/adminlogin" element={<AdminLogin/>}/>
              <Route path="/newpost" element={<NewPost/>}/>
              <Route path="/orderedpage" element={<OrderedPage/>}/>
              <Route path="/current" element={<Current/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route exact path="/:userPhno/:userId/home" element={<Home/>}/>
              <Route path="/profile/:userId" element={<Profile/>}/>
              <Route path="/:userPhno/:userId/cart" element={<Cart/>}/>
              <Route path="/:userPhno/:userId/home/details/:id" element={<Details/>}/>
              <Route path="/:userPhno/:userId/inorderitems" element={<OrderedItems/>}/>
              <Route path="*" element={<Notexits/>}/>
            </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;