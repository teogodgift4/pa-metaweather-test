import React, { Component } from 'react'

export default class Weather_fetch extends Component {
    constructor(props){
        super(props);
        this.state={};
       this.getWeather();
    }

    getWeather = async()=>{ 
        const api_call = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/');
        const response = await api_call.json();
        console.log(response);
    }

    render() {
        return (
            <>
            </>
        )
    }
    
}

