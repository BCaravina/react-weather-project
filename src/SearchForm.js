import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity(""); // to clear the input after submission
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
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
  );
}
