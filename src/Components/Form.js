import React from 'react';
import Weather from './Weather';

export default class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {value: props.value,
            city:'',
            weather:'',
            wind_comp:'',
            min_temp:'',
            max_temp:'',
            temp:'',
            wind_speed:'',
            wind_dir:'',
            air:'',
            hum:'',
            visib:'',
            weather_state:'',
            created:'',
            app_date:'',
            predict:''
          
    };
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  

  handleSubmit = async(e) => {
    //alert('A city was submitted: ' + this.state.value);
    e.preventDefault();
        const api_call2 = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query='+this.state.value);
        const response2 = await api_call2.json();
        var woeid = response2[0].woeid;
        //console.log(woeid);
        const api_call = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/'+woeid);
        const response = await api_call.json();
        //console.log(response.consolidated_weather[0]);
        this.setState({
            city:this.state.value,
            weather:response.consolidated_weather[0].weather_state_name,
            wind_comp:response.consolidated_weather[0].wind_direction_compass,
            min_temp:response.consolidated_weather[0].min_temp.toFixed(2),
            max_temp:response.consolidated_weather[0].max_temp.toFixed(2),
            temp:response.consolidated_weather[0].the_temp.toFixed(2),
            wind_speed:response.consolidated_weather[0].wind_speed.toFixed(2),
            wind_dir:response.consolidated_weather[0].wind_direction.toFixed(2),
            air:response.consolidated_weather[0].air_pressure.toFixed(2),
            hum:response.consolidated_weather[0].humidity.toFixed(2),
            visib:response.consolidated_weather[0].visibility.toFixed(2),
            weather_state:'https://www.metaweather.com/static/img/weather/'+response.consolidated_weather[0].weather_state_abbr+'.svg',
            created:response.consolidated_weather[0].created,
            app_date:response.consolidated_weather[0].applicable_date,
            predict:response.consolidated_weather[0].predictability.toFixed(2)+'%',
        });
  }

  render() {
    return (
        <>
      <form className="form-inline" onSubmit={this.handleSubmit}>
      <div className="form-group" id="form-wrapper">
          <input className="form-control" id="city" name="city" placeholder="Please enter a valid city" type="text" value={this.state.value} onChange={this.handleChange} />
        <input className="form-control btn btn-primary" id="submit" type="submit" value="Submit" />
        </div>
      </form>
      <Weather 
    cityname={this.state.city}
    weather_val={this.state.weather}
    wind_val={this.state.wind_comp}
    min_temp_val={this.state.min_temp}
    max_temp_val={this.state.max_temp}
    temp_val={this.state.temp}
    wind_speed_val={this.state.wind_speed}
    wind_dir_val={this.state.wind_dir}
    air_val={this.state.air}
    hum_val={this.state.hum}
    visib_val={this.state.visib}
    weather_state={this.state.weather_state}
    created={this.state.created}
    app_date={this.state.app_date}
    predict={this.state.predict}
    />
      </>
    );
  }
  }