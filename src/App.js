import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://github.com/BCaravina/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            BCaravina
          </a>{" "}
          and{" "}
          <a
            href="https://react-made-weather-forecast.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            is open-sourced
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
