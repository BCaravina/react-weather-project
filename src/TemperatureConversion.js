import React, { useState } from "react";
import "./TemperatureConversion.css";

export default function TemperatureConversion({ celsius }) {
  const [unit, setUnit] = useState("C");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("F");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("C");
  }

  const temperature = unit === "C" ? celsius : (celsius * 9) / 5 + 32;

  return (
    <span className="TemperatureConversion">
      <span className="temperature">{Math.round(temperature)}</span>
      <span className="temperature-unit">
        °{unit} |{" "}
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
