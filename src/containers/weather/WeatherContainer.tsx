import * as React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

interface WeatherContainerProps {
  data: any;
}

// TODO: Fetch the weather and display
const WeatherContainer = () => {
  const [weatherData] = useState<WeatherContainerProps>({data: {}});
  const apiKey = "0a375a1ec8mshe5d373082f8d284p1f035bjsna40646a68877";
  const endPoint = "community-open-weather-map.p.rapidapi.com";
  const URL = "https://community-open-weather-map.p.rapidapi.com/weather"

  useEffect(() => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
      "credentials": 'include',
      "method": "GET",
      "headers": {
        'Content-Type': 'text/plain',
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "0a375a1ec8mshe5d373082f8d284p1f035bjsna40646a68877"
      }
    })
      .then(response => {
        // console.log("Worked");
        // console.log(response);
      })
      .catch(err => {
        // console.log("Failed");
        // console.log(err);
      });
  });

  return (
    <>
      <p>Weather is coming</p>
    </>
  )
}

export default WeatherContainer;
