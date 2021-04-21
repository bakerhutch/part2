import React, {useEffect} from "react";
import axios from 'axios'

const Weather = ({ country, weather, setWeather }) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.alpha2Code}&appid=${process.env.REACT_APP_OPEN_WEATHER}`

    useEffect(() => {
        axios
          .get(url)
          .then(response => {
            console.log(`useEffect`)
            setWeather(response.data)
          });
      },[]);


  console.log(weather);

  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <div>temperature: {weather.main.temp - 273.15} &#8451;</div>
      {weather.weather.map(x=><div key={x.description}>Weather condition {weather.weather.indexOf(x)+1}: {x.description}</div>)}
      <div>wind: {weather.wind.speed} m/s</div>
    </div>
  );
};

export default Weather;
