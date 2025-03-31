import React, { useState } from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-weekday">Tue</div>
          <img
            src={props.icon}
            alt={props.description}
            className="weather-icon"
          />
          <div className="Forecast-temperatures">
            <span className="Forecast-temperature-min">10°</span>
            <span className="Forecast-temperature-max">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
