import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer>
        <p>
          <a href="https://github.com/BCaravina/react-weather-project">
            Open-source
          </a>
          code by <a href="https://github.com/BCaravina">BCaravina</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
