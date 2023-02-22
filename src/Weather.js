import React from "react";

export default function Weather() {
  return (
    <div className="weather-app">
      <div className="row">
        <div className="col">
          <h2>New York</h2>
          <ul>
            <li>Wednesday, 10:00 AM</li>
            <li>Clear Sky</li>
          </ul>
        </div>
        <div className="col">
          <button>Location</button>
        </div>
        <div className="col">
          <form>
            <input type="search" placeholder="Search city.." />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt="icon"
          />
          <span>2°C | °F</span>
        </div>
        <div className="col">
          <ul>
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
          <p>6° 2°</p>
        </div>
        <div className="col">
          <h4>Wed</h4>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt=""
          />
          <p>6° 2°</p>
        </div>
        <div className="col">
          <h4>Wed</h4>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt=""
          />
          <p>6° 2°</p>
        </div>
        <div className="col">
          <h4>Wed</h4>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt=""
          />
          <p>6° 2°</p>
        </div>
        <div className="col">
          <h4>Wed</h4>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt=""
          />
          <p>6° 2°</p>
        </div>
      </div>
    </div>
  );
}
