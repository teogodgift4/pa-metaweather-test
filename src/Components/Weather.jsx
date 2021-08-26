import React from "react";

const Weather = (props) => {
    return(
        <div className="weather_container">
            <div className="cards">
                <h1>{props.cityname}</h1>
                <h1 className="py-3">Weather State: <img src={props.weather_state} width="32" /></h1>
                <h4 className="py-3">Weather: {props.weather_val}</h4>
                <h1 className="py-2">Temperature: {props.temp_val}&deg;</h1>
                <div className="wrapper-span">
                <span className="px-4">Min Temperature: {props.min_temp_val}&deg;</span>
                <span className="px-4">Max Temperature: {props.max_temp_val}&deg;</span>
                </div>
                <h3 className="py-2">Wind Compass: {props.wind_val}</h3>
                <div className="wrapper-span">
                <span className="px-4">Wind Speed: {props.wind_speed_val}</span>
                <span className="px-4">Wind Direction: {props.wind_dir_val}</span>
                </div>
                <h4 className="py-3">Air Pressure: {props.air_val}</h4>
                <h4 className="py-3">Humidity: {props.hum_val}</h4>
                <h4 className="py-3">Visibility: {props.visib_val}</h4>
                {/* <h4 className="py-3">Forecast Date :{props.created}</h4> */}
                <h4 className="py-3">Date: {props.app_date}</h4>
                <h4 className="py-3">Predictibility: {props.predict}</h4>
            </div>
        </div>
    );
}



export default Weather;