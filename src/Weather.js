import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("São Paulo");
  const [weatherData, setWeatherData] = useState(null);
  // const [loading, setLoading] = useState(false);

  // Function to fetch weather data
  const fetchWeatherData = async (cityName) => {
    // setLoading(true);
    try {
      const apiKey = "c49ed490tce5aa3a51c741aaobee84ef";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

      const currentResponse = await axios.get(apiUrl);

      setWeatherData({
        city: currentResponse.data.city,
        temp: currentResponse.data.temperature.current,
        description: currentResponse.data.condition.description,
        humidity: currentResponse.data.temperature.humidity,
        wind: currentResponse.data.wind.speed,
        icon: currentResponse.data.condition.icon_url,
        time: new Date(currentResponse.data.time * 1000),
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  // Initial data fetch on component mount
  useEffect(() => {
    fetchWeatherData(city);
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      fetchWeatherData(city);
    }
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city.."
              autoFocus="on"
              className="search-input form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary w-100">
              Search
            </button>
          </div>
        </div>
      </form>

      {weatherData && (
        <div className="current-weather">
          <h1>{weatherData.city}</h1>
          <ul>
            <li className="weather-time">
              {weatherData.time.toLocaleDateString("en-US", {
                weekday: "long",
              })}{" "}
              {weatherData.time.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="weather-icon"
              />
              <span className="temperature">
                {Math.round(weatherData.temp)}
              </span>
              <span className="temperature-unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 15%</li>
                <li>
                  Humidity: <span>{weatherData.humidity}%</span>
                </li>
                <li>Wind: {weatherData.wind.toFixed(2)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
