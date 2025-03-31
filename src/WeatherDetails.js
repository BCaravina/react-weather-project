import React from "react";

export default function WeatherDetails({ humidity, wind }) {
  return (
    <div className="WeatherDetails">
      <ul>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind.toFixed(2)} km/h</li>
      </ul>
    </div>
  );
}
