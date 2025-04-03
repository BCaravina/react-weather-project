import React, { useState, useEffect } from "react";
import axios from "axios";
import FormattedWeekday from "./FormattedWeekday";
import "./Forecast.css";

export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (city) {
      const apiKey = "c49ed490tce5aa3a51c741aaobee84ef";
      const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then((response) => {
        setForecastData(response.data.daily); // Store the daily forecast
      });
    }
  }, [city]); // Re-fetch forecast whenever city changes

  if (!forecastData) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="forecast-container d-flex justify-content-between">
      {forecastData.slice(1, 6).map((day, index) => (
        <div key={index} className="forecast-day">
          <FormattedWeekday timestamp={day.time} />
          <img
            src={day.condition.icon_url}
            alt={day.condition.description}
            className="weather-icon"
          />
          <div className="weather-description">{day.condition.description}</div>
          <div className="temperature-range">
            <span className="temp-min">
              {Math.round(day.temperature.minimum)}°C
            </span>
            <span className="temp-max">
              {Math.round(day.temperature.maximum)}°C
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
