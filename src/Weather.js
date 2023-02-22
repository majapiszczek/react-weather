import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app">
        <div className="row top mb-5">
          <div className="col">
            <h2>New York</h2>
            <p>Wednesday, 10:00 AM</p>
            <p>Clear Sky</p>
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
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt="icon"
            />
            <span>2</span>
            <small>°C | °F</small>
          </div>
          <div className="col">
            <ul className="pt-3">
              <li>Wind: 5km/h</li>
              <li>Humidity: 60%</li>
              <li>Feels like: -2°C</li>
            </ul>
          </div>
        </div>
        <div className="forecast text-center">
          <div className="col">
            <h4>Wed</h4>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt=""
            />
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
}
