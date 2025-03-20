import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "c49ed490tce5aa3a51c741aaobee84ef";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units={metric}`;

    axios.get(apiUrl).then((response) => {
      if (city) {
        setWeatherData({
          temp: response.data.temperature.current,
          description: response.data.condition.description,
          humidity: response.data.temperature.humidity,
          wind: response.data.wind.speed,
          icon: response.data.condition.icon_url,
        });
      }
    });
  }

  return (
    <div className="forecast-container">
      <form className="search_form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchBox"
          id="search_input"
          placeholder="Enter a city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" value="Search" id="search-button" />
      </form>

      {weatherData && (
        <div className="city-forecast">
          <p>Temperature: {Math.round(weatherData.temp)}°C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {Math.round(weatherData.wind)}km/h</p>
          <p>
            <img src={weatherData.icon} alt={weatherData.description} />
          </p>
        </div>
      )}
    </div>
  );
}
