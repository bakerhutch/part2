import React from "react";
import Weather from './Weather'

const Match = ({ country }) => {
    console.log('Results <Match>');
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((x) => (
          <li key={x.name}>{x.name}</li>
        ))}
      </ul>
    <img src={country.flag} alt={country.name} />
    </div>
  );
};

const Button = ({ country, handleClick }) => {
  console.log('button', country.name)
  if (!country.isShown) {
    return <button name={country.name} onClick={handleClick}>show</button>;
  } else {
    return (
      <>
        <button name={country.name} onClick={handleClick}>show</button>
        <Match country={country} />
      </>
    );
  }
};

const Results = ({ countries, length, handleClick, weather, setWeather }) => {
  if (length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (length === 1) {
    return (
      <div>
    <Match country={countries[0]} />
    <Weather country={countries[0]} weather={weather} setWeather={setWeather}/>
    </div>
    )
  } else {
    return (
      <>
        {countries.map((x) => (
          <div key={x.name}>
            {x.name} <Button country={x} handleClick={handleClick}/>
          </div>
        ))}
      </>
    );
  }
};

export default Results;
