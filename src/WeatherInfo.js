import React from "react";
import CurrentDate from "./CurrentDate";

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
          <img src={props.data.icon_url} alt={props.data.icon} />
          <span>{props.data.temperature}</span>
          <small>°C | °F</small>
        </div>
        <div className="col">
          <ul className="pt-3">
            <li>Wind: {props.data.wind}km/h</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Feels like: {props.data.feels_like}°C</li>
          </ul>
        </div>
      </div>
      <div className="forecast text-center">
        <div className="col">
          <h4>Wed</h4>
          <img src={props.data.icon_url} alt={props.data.icon} />
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
  );
}
