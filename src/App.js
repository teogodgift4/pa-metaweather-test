import './App.css';
import "weather-icons/css/weather-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Form';
import { Component } from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={value: ''}
    }
render(){
  return (
    <>
    <Form value={this.state.value} />
    </>
  );
  }
}