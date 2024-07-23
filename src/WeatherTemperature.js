import React, {useState} from "react";

export default function WeatherTemperature(props){
    const[unit, setUnit]=useState("Fahrenheit");

    function convertToCelsius(event){
    event.preventDefault();
    setUnit("celcius");
}
  function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }
function celsius(){
    return((props.fahrenheit -32) * 5/9 
);
}
    if (unit === "fahrenheit"){
    return(
        <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)} </span>
        <span className="unit"> ºC  | {" "} <a href="/" onClick={convertToCelsius}>ºC </a></span>
        </div> 
    );
} else{
    

    return(
        <div className="WeatherTemperature">
        <span className="temperature">{Math.round((celsius))} </span>
        <span className="unit"> <a href="/" onClick={convertToFahrenheit}> ºF </a>{" "}| ºC </span>
        </div> 

    )}
}
