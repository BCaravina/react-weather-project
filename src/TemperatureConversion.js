import React, { useState } from "react";

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
    <span className="temperature-conversion temperature">
      <strong>{Math.round(temperature)}</strong>
      <span className="temperature-unit">
        °{unit} |
        {unit === "C" ? (
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        ) : (
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        )}
      </span>
    </span>
  );
}
