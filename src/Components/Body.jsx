import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userData=useSelector((store)=>store.user);

  // Check if the user is Logged In Or Not
  const fetchUser=async ()=>{
    if(userData)return;
    try {
      const res= await axios.get(BASE_URL+"/profile/view",{
        withCredentials:true,
      })
      dispatch(addUser(res.data));
    } catch (error) {
      
      navigate("/login");
      console.error(error)
    }
   
  }
  useEffect(()=>{
      fetchUser();
  },[])
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Body;
