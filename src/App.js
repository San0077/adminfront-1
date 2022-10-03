import './App.css';
import { Routes,Route,useNavigate } from 'react-router';
import React, { useEffect, useState, useContext,} from 'react';
import NavigationMenu from './navigation/NavigationMenu.js'
import Home from './components/Home/Home.js'
import {Login} from './components/sign&login/login.js'
import {Signin} from './components/sign&login/sign.js'
import {Jobs} from "./components/jobs/jobs.js"

function App() {
  const navigate = useNavigate()
 
  return (
   <div>
    
    <NavigationMenu/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/jobs" element={<Jobs/>}></Route>
     </Routes>
 
   </div>

  );
}
   
export default App;