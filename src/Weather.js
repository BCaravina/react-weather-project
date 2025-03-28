import React, { useState, useEffect } from "react";
import TemperatureConversion from "./TemperatureConversion";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data
  const fetchWeatherData = async (cityName) => {
    try {
      const apiKey = "c49ed490tce5aa3a51c741aaobee84ef";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

      const response = await axios.get(apiUrl);
      setWeatherData({
        city: response.data.city,
        temp: response.data.temperature.current,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
        time: new Date(response.data.time * 1000),
      });
      setReady(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Fetch default city data on first load
  useEffect(() => {
    fetchWeatherData("São Paulo");
  }, []); // Empty dependency array ensures this only runs once

  function handleSubmit(event) {
    event.preventDefault();
    setReady(true);
    if (city) {
      fetchWeatherData(city);
    }
  }

  if (!ready || !weatherData) {
    return <div>Loading..</div>;
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
              {weatherData.time
                ? `${weatherData.time.toLocaleDateString("en-US", {
                    weekday: "long",
                  })} ${weatherData.time.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}`
                : "Loading time..."}
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="weather-icon"
              />
              <TemperatureConversion celsius={weatherData.temp} />
            </div>
            <div className="col-6">
              <ul>
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
