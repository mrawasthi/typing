import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Scss/Home.scss';
import { useAuth } from '../store/Auth';
import Topbar from "../Components/topbar/Topbar";
import Sidebar from "../Components/sidebar/Sidebar";
import Feed from "../Components/feed/Feed";
import Rightbar from "../Components/rightbar/Rightbar";

const HomePage = () => {
  const navigate = useNavigate();
  const {LogoutUser} =useAuth()
  //const {islogged}=useAuth()
 // if(islogged==false){
   // navigate("/Login")
  //}
  /*
  
  const callhomepage = async () => {
    try {
      const res = await fetch("http://localhost:3000/check", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials:"include"
      });
      const data = await res.json();
  
      console.log('Response Status:', res.status);
      console.log('Response Data:', data);
  
      if (res.status !== 200) {
        navigate("/login");
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      navigate("/login");
    }
  };
  
  React.useEffect(()=>{
    callhomepage()
  },[])
     
 */
  const logout=()=>{
    LogoutUser()
    console.log("hello world")
    navigate("/Login")
  }
  

  return (
    
    <>
     <Topbar />
     <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
        <div className="container emp-profile">
            <form method="GET">
              <h1> hello guys help</h1>
            </form>
            <button className="logout-button" onClick={logout}>
             Logout
          </button>
       </div>
    </>
)
};

export default HomePage;
