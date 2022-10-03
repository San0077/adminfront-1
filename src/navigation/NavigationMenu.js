import { useState } from "react";
import { Navigate,NavLink,useNavigate} from "react-router-dom";
import Whiteham from "../images/hamburger-white.png";
import {Preview,Jobs,Design,Gopro} from './hovers/inspirHover.js'
import {MyContext} from '../context.js'
import './app.css';
import { useContext } from "react";

const NavigationMenu = () => {
  const [mobile,setmobile]=useState(false)
  const [onHover1,sethover1]= useState(false)
  const [onHover2,sethover2]= useState(false)
  const [onHover3,sethover3]= useState(false)
  const [onHover4,sethover4]= useState(false)
  const [onHover5,sethover5]= useState(false)
  const navigate = useNavigate()
  const {user,setUser}=useContext(MyContext)
  const handleMouseOut = () => {
    sethover5(false);
    sethover2(false);
    sethover1(false);
    sethover3(false);
    sethover4(false);
  };

  return (
    <nav className="menu-links">
      <h3 className="logo" onClick={()=>navigate("/")}>Dribbble</h3>
      <ul className={mobile ? "mobile-links":"nav-links"}
      onClick={() =>setmobile(false)}>
             <NavLink to="/inpiration" onMouseOver={()=>sethover1(true)} 
             onMouseOut={handleMouseOut}
              className={({ isActive }) =>
          "home" + (isActive ? " active" : "")}>
              <li>Inpiration</li>
            </NavLink>
            {onHover1?<div className="hoverEffect"><Preview/></div>:""}
            <NavLink to="/jobs"  className={({ isActive }) =>
          "home" + (isActive ? " active" : "")} onMouseOver={()=>sethover2(true)} 
          onMouseOut={handleMouseOut}>
              <li>Find Work</li>
            </NavLink>
            {onHover2?<div className="hoverEffect"><Jobs/></div>:""}
            <NavLink to="/project"  className={({ isActive }) =>
          "home" + (isActive ? " active" : "")} onMouseOver={()=>sethover3(true)} 
          onMouseOut={handleMouseOut}>
              <li>Learn Design</li>
            </NavLink>
            <div className="hoverEffect">{onHover3?<Design/>:""}</div>
            <NavLink to="/determine"  className={({ isActive }) =>
          "home" + (isActive ? " active" : "")} onMouseOver={()=>sethover4(true)} 
          onMouseOut={handleMouseOut}>
              <li>Go pro</li>
            </NavLink>
            {onHover4?<div className="hoverEffect"><Gopro/></div>:""}
             <NavLink to="/preview"  className={({ isActive }) =>
          "home" + (isActive ? " active" : "")} onMouseOver={()=>sethover5(true)} 
          onMouseOut={handleMouseOut}
            >
         <div className="hoverEffect">  {onHover5 ?<Preview/>:""}</div>
              <li>Design </li>
            </NavLink>
          
        
      </ul>
     
      <ul className={mobile?"mobile-links2":"nav2-links"}>
      <NavLink to="/signin" className="sign">
              <li onClick={() =>{
                
                  localStorage.removeItem("token")
                  navigate("/")
                  setUser(!true)
                
              }}>{user?"logout":"signin"}</li>
      </NavLink>
      <NavLink to="/share">
              <li className="share">Share My Work</li>
      </NavLink>
     
      </ul>
      
      <button className="mobile-icons"
          onClick={() =>setmobile(!mobile)}
          >{mobile?<i class="fa fa-bars" aria-hidden="true"></i>:<i class="fa fa-bars" aria-hidden="true"></i>}</button>
      
    </nav>
  );
};

export default NavigationMenu;
