import React ,{useState}from "react";
import TextField from '@mui/material/TextField';
import "./jobs.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import swal from 'sweetalert'

const jobs =[{
  title:" Board for Graphic",
  discrp:"Dribbble is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.",
  link:""
}]

export function Jobs() {
const [title, settitle] = useState(jobs);
const [mode, setMode] = useState('');
const [company, setcompany] = useState();
const [location, setlocation] = useState();
const [special, setspecial] = useState();
const [data, setdata] = useState();
const handleChange = (event) => {
  setMode(event.target.value);
};
const searching=(q)=>{
   fetch("http://localhost:4000/jobs/?q="+q).then(data=>data.json())
  .then(data =>settitle(data))
}
const filtern=()=>{
      const obj = {
        mode,company,location,special
      }
      fetch("http://localhost:4000/jobs",{
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data => data.json()).then(data =>setdata(data))
}
 
  return (
    <>
      <div className="jobs_containter">
        <div className="nav_links">
          <div className="links" onClick={() =>searching(" board for graphic")}>Full time free Aboard</div>

            <div  className="links" onClick={() =>searching("free lancing")} >Freelance Jobs</div>

          <div  className="links" onClick={() =>searching("design jobs")}>Designer Search</div>
        </div>
        <div className="job_title">
                 <div className="title_jobs" style={{display:"flex",width:"50%",justifyContent:"column"}} >
                 {title?title.map(data=><div  >
                    <p style={{fontSize:"30px",fontWeight:"bold",color:"Red"}}>{data.title}</p>
                    <p style={{fontSize:"20px",fontWeight:"bold"}}>{data.discrp}</p>
                    <button>Learn more</button>
                    </div> ):"loading"}
                    </div>
                 <div style={{display:"flex",width:"70%",justifyContent:"flex-end" ,position:"relative"}}>
                      <img  className="img1" src="https://cdn.dribbble.com/assets/landing-pages/jobs/jobs-intro-image-625w-5c9f35c258e4dcb234a71984e697362ca7f15df8a3a05c0ee19a9d2e59d35387.webp"></img>
                      <img  className="img2" src="https://cdn.dribbble.com/assets/landing-pages/jobs/intro-image-4@1x-3b1d7c10941d88202358069e0349c3009cb11e70bb957a7e8991e94586ef14f0.png"></img>
                 </div> 
        </div>
      </div>
      <div className="s">
        <div className="border">
            <p>Find your Jobs</p>
              <div className="jobs_offer">
              <TextField id="outlined-basic" onChange={(e)=>setcompany(e.target.value)}style={{width:"200px"}} label="Company" variant="outlined" />
              <TextField id="outlined-basic"  onChange={(e)=>setspecial(e.target.value)} style={{width:"200px"}} label="Speciality" variant="outlined" />
              <TextField id="outlined-basic"  onChange={(e)=>setlocation(e.target.value)} style={{width:"200px"}} label="Location" variant="outlined" />
              <InputLabel id="demo-simple-select-standard-label">Mode</InputLabel>
        <Select style={{width:"200px"}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={mode}
          onChange={handleChange}
          label="Work"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Full Time"}>Full Time</MenuItem>
          <MenuItem value={"Part Time"}>Part Time</MenuItem>
          <MenuItem value={"Remote"}>Remote</MenuItem>
        </Select>
        <Button variant="contained" onClick={filtern} style={{ width: 200 }}>Filter</Button>

              </div>
         </div>
          <div className="border job_cointainer">
            <h2 className="text-center">Your Dream Jobs</h2>
         {data?data.map(data=>
         <div className="jobs_details">
                   <div className="job-img">
                       <img src ={data.img} style={{width:"50px" ,height:"50px",objectFit:"cover"}}></img>
                       <h3>{data.company}</h3>
                   </div>
                  
                   <div>
                   <div className="job-skill">
                       {` Skills -  ${data.skill}`}
                       <p>$-400</p>
                   </div>
                        
                        <p>{`location - ${data.location}`}</p>
                        <p>Roles refer to one's position on a team. Responsibilities refer to the tasks and duties of their particular role or job description</p>
                   </div>
                   <Button variant="contained" 
                    onClick={ (data)=>{
                      swal("Good job!","your applied ", "success")
                    }}
                      
                   style={{ width: 150 ,marginLeft:"70px",marginBottom:"10px"}}>Apply</Button>

            </div>
):<div className="nomore">No More Jobs</div>}
          </div>
      </div>
    </>
  );
}
