import React, { useState, useEffect } from "react";
import TemperatureConversion from "./TemperatureConversion";
import Forecast from "./Forecast";
import WeatherDetails from "./WeatherDetails";
import SearchForm from "./SearchForm";
import FormattedTime from "./FormattedTime";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("São Paulo");
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data
  const fetchWeatherData = async (cityName) => {
    try {
      console.log("Fetching weather for:", cityName);
      const apiKey = "c49ed490tce5aa3a51c741aaobee84ef";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

      const response = await axios.get(apiUrl);

      if (!response.data || !response.data.city) {
        throw new Error("Invalid response from API");
      }

      setWeatherData({
        city: response.data.city,
        temp: response.data.temperature.current,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
      });
      setReady(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Fetch default city data on first load + whenever city changes
  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  function handleSearch(newCity) {
    setCity(newCity);
  }

  if (!ready || !weatherData) {
    return <div>Loading..</div>;
  }

  return (
    <div className="Weather">
      <SearchForm onSearch={handleSearch} />
      {weatherData && (
        <div className="current-weather">
          <h1>{weatherData.city}</h1>
          <ul>
            <FormattedTime description={weatherData.description} />
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
              <WeatherDetails
                humidity={weatherData.humidity}
                wind={weatherData.wind}
              />
            </div>
          </div>
        </div>
      )}
      <div className="weather-forecast">
        <Forecast city={city} />
      </div>
    </div>
  );
}
