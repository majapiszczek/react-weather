import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function search() {
    let apiKey = "8a74ad5eo45tde558fe05997d33ec4b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCtiy(event) {
    setCity(event.target.value);
  }

  function getResponse(response) {
    setLoaded(true);
    setWeatherData({
      coords: response.data.coordinates,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      feels_like: Math.round(response.data.temperature.feels_like),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      icon_url: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <div className="row mb-3">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search city.."
                onChange={updateCtiy}
              />
              <input type="submit" value="Search" className="button" />
            </form>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
