import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast text-center">
      <div>Fri</div>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
        alt="weather-icon"
        width="70"
      />
      <div>
        <span className="forecast-temperature-max">10°</span>{" "}
        <span className="forecast-temperature-min">6°</span>
      </div>
    </div>
  );
}
