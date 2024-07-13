import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
    const weather = useWeather();
    console.log(weather);

    return(
        <div className="card">
            <img src={weather.data?.current?.condition?.icon} alt="" />
           <h3>Temperature is {weather.data?.current?.temp_c}</h3>
           <h2>{weather.data?.location?.name}, {weather.data?.location?.region}</h2>
           <h3>{weather.data?.location?.country}</h3>
        </div>
    );
}

export default Card;