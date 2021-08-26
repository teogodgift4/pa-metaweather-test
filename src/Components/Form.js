import React, { Component } from 'react';
import Weather from './Weather';

export default class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {value: props.value,
            city:'New York',
            weather:'Heavy Clouds',
            wind_comp:'NNE',
            min_temp:0,
            max_temp:4,
            temp:3,
            wind_speed:5,
            wind_dir:17,
            air:1023,
            hum:56,
            visib:10.345,
            weather_state:'hc',
            created:'2021-08-26T',
            app_date:'2021-08-26',
            predict:'70.000054'
          
    };
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  

  handleSubmit = async(e) => {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
        const api_call2 = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query='+this.state.value);
        const response2 = await api_call2.json();
        var woeid = response2[0].woeid;
        console.log(woeid);
        const api_call = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/'+woeid);
        const response = await api_call.json();
        console.log(response);
        this.setState({
            city:this.state.value,
        });
  }

  render() {
    return (
        <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
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