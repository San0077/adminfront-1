import React ,{useState}from "react";
import './home.css'
import { useNavigate } from 'react-router-dom';

import Badge from '@mui/material/Badge';

function Home() {
    const navigate = useNavigate()
    const [like, setlike] = useState(0);
    const save =()=>{
        if(!localStorage.getItem("token")){
             navigate("/login")
        }
        else{
             
        }
    }
    

    return (
       
        <div className="home_container">
            <div className="home_heading">
                <section style={{color:"#FB9E33",marginRight:"20px"}}><i class="fa fa-firefox fa-2x" aria-hidden="true"></i></section>
                <section style={{fontSize:"20px",fontWeight:"bold"}}>Kontrako Landing Page Exploration 💥<br/>
                         <ul>Odama</ul>
                </section>
                <section className="button1">
                    <button type="button"className="save_btn" onClick={()=>save()}>save</button>
                    <button className="like_btn" onClick={()=>setlike(like+1)}>Like <sup ><Badge badgeContent={like} style={{marginBottom:"15px"}} color="secondary"/></sup></button>
                </section>
            </div>
            <div className="img-border border" style={{width:"600px",height:"400px"}}>
                   <img src="https://cdn.dribbble.com/users/6850340/screenshots/16386968/media/f8fb48ecf91bb8a8f8eb5487753ee52f.png?compress=1&resize=768x576&vertical=top" 
                   style={{width:"500px",height:"350px"}}></img>
            </div>
            <div>
                <p className="text_">Hi Dribbblers! 🥳</p>
                <p className="text_">Here our new Landing page for Kontrako. 
                Hope you like it guys. Cheers! ✨</p>
                <p className="text_">This Landing Page Created by Azie</p>
                <p className="text_">Feel free to give me some feedback.</p>
                <p className="text_">----------------</p>
                <p className="text_">We available for work together :</p>
                <p className="text_">📩Email Us : odamastudio@gmail.com</p>
                <p className="text_">😎Instagram : Odama Studio</p>
              
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                  <div className="line" ></div>
                  <div style={{color:"#FB9E33" ,marginLeft:"20px"}}><i class="fa fa-firefox fa-4x" aria-hidden="true"></i></div>
                  <div className="line"></div>
            </div>
            <div>
                <p style={{color:"#FB9E33" ,marginLeft:"41px"}}>Odama</p>
                <p style={{color:"#FB9E33" ,marginLeft:"5px"}}>Grow with Passion</p>
            </div>
            <div className="left_sign">
                <section><p style={{fontSize:"20px",fontWeight:"bold"}}>more items</p></section>
                  <div className="images-Show">
                   
                     <img src="https://cdn.dribbble.com/users/4208985/screenshots/17795691/findtrend.png?compress=1&resize=320x240&vertical=top"></img>
                    <img src="https://cdn.dribbble.com/users/4208985/screenshots/16209891/media/90660abc7310e4c49fe120084af8a6df.png?compress=1&resize=320x240&vertical=top"></img>
                    <img src="https://cdn.dribbble.com/users/4208985/screenshots/16321628/media/a8c0b1edee3d57b7a882e34cb56f1e32.png?compress=1&resize=320x240&vertical=top"></img>
                    <img src="https://cdn.dribbble.com/users/4208985/screenshots/16400222/tradlr_landing_page_animation.png?compress=1&resize=320x240&vertical=top"></img>
                   
                  </div>
            </div>
             <Footer/>
        </div>
     );
}
 
export default Home;

export function Footer (){
    return(
        <div className="footer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png" style={{width:"150px",height:"50px"}}></img>
        <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
        <p style={{color:"red"}}> 
          <div><a href="https://dribbble.com/dribbble"><i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i></a>
          <span style={{marginLeft:"10px"}} ><a href="https://www.instagram.com/dribbble/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></span>
          </div>
          
        </p>
  </div>
    )
}