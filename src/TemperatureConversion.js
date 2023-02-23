import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="TemperatureConversion">
        <span>{props.celsius}</span>
        <small>
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </small>
      </span>
    );
  }
  if (unit === "fahrenheit") {
    let fahrenheit = Math.round(props.celsius * 1.8 + 32);
    return (
      <span className="TemperatureConversion">
        <span>{fahrenheit}</span>
        <small>
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </small>
      </span>
    );
  }
}
