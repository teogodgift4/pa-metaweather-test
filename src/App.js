import logo from './logo.svg';
import './App.css';
import "weather-icons/css/weather-icons.css"
import Weather from './Components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css'
import Weather_fetch from './Components/Weather_fetch';

function App() {
  return (
    <>
    <Weather/>
    <Weather_fetch/>
    </>
  );
}

export default App;
