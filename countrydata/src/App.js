import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSearch from "./components/FilterSearch";
import Results from "./components/Results";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [weather, setWeather] = useState({
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 282.55,
      feels_like: 281.86,
      temp_min: 280.37,
      temp_max: 284.26,
      pressure: 1023,
      humidity: 100,
    },
    visibility: 16093,
    wind: {
      speed: 1.5,
      deg: 350,
    },
    clouds: {
      all: 1,
    },
    dt: 1560350645,
    sys: {
      type: 1,
      id: 5122,
      message: 0.0139,
      country: "US",
      sunrise: 1560343627,
      sunset: 1560396563,
    },
    timezone: -25200,
    id: 420006353,
    name: "Mountain View",
    cod: 200,
  }); //Sets example response

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data.map((x) => ({ ...x, isShown: false })));
    });
  }, []);

    const handleFilter = (e) => {
      setFilter(e.target.value);
    };

  const clickArr = [...countries];

  const handleClick = (country) => {
    const objIndex = clickArr.findIndex((x) => x.name === country.target.name);
    console.log(objIndex);
    console.log(clickArr[objIndex]);
    console.log(clickArr[objIndex].isShown);
    clickArr[objIndex].isShown = !clickArr[objIndex].isShown;
    console.log(clickArr[objIndex].isShown);
    setCountries(clickArr);
  };

  const regexp = new RegExp(filter, "i");
  const newArr = countries.filter((x) => regexp.test(x.name));
  const length = newArr.length;

  return (
    <div>
      <FilterSearch value={filter} handleFilter={handleFilter} />
      <Results countries={newArr} length={length} handleClick={handleClick} weather={weather} setWeather={setWeather} />
    </div>
  );
};

export default App;
