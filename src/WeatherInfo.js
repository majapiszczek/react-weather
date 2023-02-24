import React from "react";
import CurrentDate from "./CurrentDate";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mb-5">
        <div className="col">
          <h2>{props.data.city}</h2>
          <CurrentDate />
          <p className="text-capitalize">{props.data.description}</p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <img
            src={props.data.icon_url}
            alt={props.data.icon}
            className="current-temp-icon"
          />
          <span>
            {props.data.temperature}
            <small>°C</small>
          </span>
        </div>
        <div className="col">
          <ul className="pt-3">
            <li>Wind: {props.data.wind}km/h</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Feels like: {props.data.feels_like}°C</li>
          </ul>
        </div>
      </div>
      <Forecast city={props.data.city} />
    </div>
  );
}
