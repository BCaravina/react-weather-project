import React, { useState } from "react";
import "./TemperatureConversion.css";

export default function TemperatureConversion({ celsius }) {
  const [unit, setUnit] = useState("C");
  const [temperature, setTemperature] = useState(celsius);

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("F");
    setTemperature((celsius * 9) / 5 + 32);
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("C");
    setTemperature(celsius);
  }

  return (
    <span className="TemperatureConversion">
      <span className="temperature">{Math.round(temperature)}</span>
      <span className="temperature-unit">
        °{unit} |
        {unit === "C" ? (
          <a href="/" onClick={convertToFahrenheit} className="unit-link">
            °F
          </a>
        ) : (
          <a href="/" onClick={convertToCelsius} className="unit-link">
            °C
          </a>
        )}
      </span>
    </span>
  );
}
