import logo from './logo.svg';
import './App.css';
import "weather-icons/css/weather-icons.css"
import Weather from './Components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Form';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState('Heavy Clouds');
  const [wind_comp, setWind_comp] = useState('NNE');
  const [min_temp, setMin_temp] = useState('0');
  const [max_temp, setMax_temp] = useState('4');
  const [temp, setTemp] = useState('2');
  const [wind_speed, setWind_speed] = useState('3');
  const [wind_dir, setWind_dir] = useState('17');
  const [air, setAir] = useState('1023');
  const [hum, setHum] = useState('56');
  const [visib, setVisib] = useState('10.034555');

  return (
    <>
    <Form/>
    <Weather 
    cityname={city}
    weather_val={weather}
    wind_val={wind_comp}
    min_temp_val={min_temp}
    max_temp_val={max_temp}
    temp_val={temp}
    wind_speed_val={wind_speed}
    wind_dir_val={wind_dir}
    air_val={air}
    hum_val={hum}
    visib_val={visib}
    />
    </>
  );
}

export default App;
