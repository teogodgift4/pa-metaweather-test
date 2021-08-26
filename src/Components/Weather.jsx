import React from "react";

const Weather = (props) => {
    return(
        <div className="container">
            <div className="cards">
                <h1>{props.cityname}</h1>
                <h5 className="py-4">
                    <i className="wi wi-day-sunny"></i>
                </h5>
                <h1 className="py-2">{props.temp_val}&deg;</h1>
                <span className="px-4">{props.min_temp_val}&deg;</span>
                <span className="px-4">{props.max_temp_val}&deg;</span>
                <h4 className="py-3">{props.weather_val}</h4>
                <h3 className="py-2">{props.wind_val}&deg;</h3>
                <span className="px-4">{props.wind_speed_val}&deg;</span>
                <span className="px-4">{props.wind_dir_val}&deg;</span>
                <h4 className="py-3">{props.air_val}</h4>
                <h4 className="py-3">{props.hum_val}</h4>
                <h4 className="py-3">{props.visib_val}</h4>
                <h4 className="py-3">{props.weather_state}</h4>
                <h4 className="py-3">{props.created}</h4>
                <h4 className="py-3">{props.app_date}</h4>
                <h4 className="py-3">{props.predict}</h4>
            </div>
        </div>
    );
}



export default Weather;