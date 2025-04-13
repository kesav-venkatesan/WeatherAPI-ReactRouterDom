import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import './Result.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const weatherToVideo = {
    Clouds: "/videos/cloudly.mp4",
    Rain: "/videos/Rainy.mp4",
    Clear: "/videos/sunny.mp4",
    Thunderstorm: "/videos/Thunder.mp4"
  };

  const Card=(props)=>{
    return <div className="card">
        {props.icon && <span>{props.icon}</span>}
        <h3>{props.heading}</h3>
        <h4>{props.value}</h4>
    </div>
  }

const Result=()=>{
    const location = useLocation();
    const data=location.state;
    const id=data.weather[0].id;
    let weather=weatherToVideo.Clear;
    let icon="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    console.log(id);
    if((id>=801 && id<=804) || (id>=951 && id<=954)) weather=weatherToVideo.Clouds;
    if((id>=300 && id<=531) || (id>=600 && id<=622) || (id>=701 && id<=781)) weather=weatherToVideo.Rain;
    if((id>=200 && id<=232) || (id>=900 && id<=906) || (id>=955 && id<=962)) weather=weatherToVideo.Thunderstorm;
    return<div style={{width:"100vw",height:"100vh",overflow:"hidden"}}>
        <video autoPlay muted loop playsinline style={{width:"100%", height:"100%",objectFit:"cover"}}>
            <source src={weather} type="video/mp4"></source>
        </video>
        <div className="content">
            <h1>{data.name}</h1>
            <div class="content_mid">
            <img src={icon}></img>
            <h3>{data.main.temp}°C</h3>
            <h2>{data.weather[0].main}</h2>
            </div>
            <div className="content_end">
                <Card heading="Humidity" value={data.main.humidity +" %"} icon={<i class="bi bi-droplet"></i>}/>
                <Card heading="Speed" value={data.wind.speed+" m/s"} icon={<i class="bi bi-wind"></i>}/>
            </div>
        </div>
    </div>;
}
export default Result;