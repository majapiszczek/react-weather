import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  if (loaded) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <div className="row top mb-5">
            <div className="col">
              <h2>{weatherData.city}</h2>
              <p>Wednesday, 10:00 AM</p>
              <p className="text-capitalize">{weatherData.description}</p>
            </div>
            <div className="col">
              <button>Location</button>
            </div>
            <div className="col">
              <form>
                <input type="search" placeholder="Search city.." />
                <input type="submit" value="Search" className="button" />
              </form>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <img src={weatherData.icon_url} alt={weatherData.icon} />
              <span>{weatherData.temperature}</span>
              <small>°C | °F</small>
            </div>
            <div className="col">
              <ul className="pt-3">
                <li>Wind: {weatherData.wind}km/h</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Feels like: {weatherData.feels_like}°C</li>
              </ul>
            </div>
          </div>
          <div className="forecast text-center">
            <div className="col">
              <h4>Wed</h4>
              <img src={weatherData.icon_url} alt={weatherData.icon} />
              <p>
                <strong>6° </strong>2°
              </p>
            </div>
            <div className="col">
              <h4>Thu</h4>
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                alt=""
              />
              <p>
                <strong>6° </strong>2°
              </p>
            </div>
            <div className="col">
              <h4>Fri</h4>
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                alt=""
              />
              <p>
                <strong>6° </strong>2°
              </p>
            </div>
            <div className="col">
              <h4>Sat</h4>
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                alt=""
              />
              <p>
                <strong>6° </strong>2°
              </p>
            </div>
            <div className="col">
              <h4>Sun</h4>
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                alt=""
              />
              <p>
                <strong>6° </strong>2°
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8a74ad5eo45tde558fe05997d33ec4b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);

    function getResponse(response) {
      setLoaded(true);
      setWeatherData({
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

    return "Loading...";
  }
}
