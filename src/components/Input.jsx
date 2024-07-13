import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
    const weather = useWeather();
  
    return(
        <input type="text" className="input-field" value={weather.searchCity} placeholder="Search Here" onChange={(e) => weather.setSearchCity(e.target.value)}/>
    );
}

export default Input;