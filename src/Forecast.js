import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast text-center">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8a74ad5eo45tde558fe05997d33ec4b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);

    return null;
  }
}
