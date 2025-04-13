import { useState } from 'react';
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const [name,setName]=useState("");
    const navigate=useNavigate();
    const [loc,setLoc]=useState("");
    const linkURL = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=60488d9bd91907bcc40ee797082fccf5`;
    function moveNext(){
        if(name==="") alert("You didn't enter name");
        else if(loc==="") alert("You didn't enter location");
        else urlCall();
    }
    function urlCall(){
        fetch(linkURL)
        .then((res)=>{
            if(!res.ok) throw new Error("Unable to connect");
            return res.json();
        })
        .then((data)=>{
            setTimeout(()=>{navigate("/Result",{state:data})},2000);
        }).catch((error)=>{
            alert("Location Not found");
        })
    }
    return (
      <div style={{width:"100vw", height:"100vh",overflow:"hidden"}}>
        <video autoPlay muted loop playsinline style={{objectFit:"cover",height:"100%",width:"100%",filter:"brightness(80%)"}}>
          <source src="/videos/HomeVideo.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
        <div className='SignInBox'>
            <h1>WeatherNow :)</h1>
            <input type='text' placeholder='Name' onChange={(el)=>setName(el.target.value)}></input>
            <input type='text' placeholder='Location' onChange={(el)=>setLoc(el.target.value)}></input>
            <button onClick={moveNext}>Find</button>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  