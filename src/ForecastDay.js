import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        width="70"
      />
      <div>
        <span className="forecast-temperature-max">{maxTemp()}</span>{" "}
        <span className="forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
