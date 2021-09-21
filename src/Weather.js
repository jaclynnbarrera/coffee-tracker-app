import React, { useState } from "react";
import Draggable from "react-draggable";

const api = {
  key: "ceb6657dfd5aab9f00e5b48bfde5c001",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <Draggable>
      <div className="weather">Weather</div>
    </Draggable>
  );
}
