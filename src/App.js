import logo from './logo.svg';
import './App.css';
import "weather-icons/css/weather-icons.css"
import Weather from './Components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Form';
import { Component, useState } from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
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
      visib:10.345
    }
    this.getWeather();
  }

  getWeather = async()=>{ 
    const api_call = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/');
    const response = await api_call.json();
    console.log(response);
}

  // const [city, setCity] = useState('New York');
  // const [weather, setWeather] = useState('Heavy Clouds');
  // const [wind_comp, setWind_comp] = useState('NNE');
  // const [min_temp, setMin_temp] = useState('0');
  // const [max_temp, setMax_temp] = useState('4');
  // const [temp, setTemp] = useState('2');
  // const [wind_speed, setWind_speed] = useState('3');
  // const [wind_dir, setWind_dir] = useState('17');
  // const [air, setAir] = useState('1023');
  // const [hum, setHum] = useState('56');
  // const [visib, setVisib] = useState('10.034555');

  render(){
  return (
    <>
    <Form/>
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
    />
    </>
  );
  }
}