import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FilterSearch from './components/FilterSearch'
import Results from './components/Results'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data.map(x=>({...x,isShown:false})))
      })
  }, [])

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const clickArr = [...countries]

  const handleClick = (country) => {
    const objIndex = clickArr.findIndex(x=>x.name===country.target.name)
    console.log(objIndex);
    console.log(clickArr[objIndex]);
    console.log(clickArr[objIndex].isShown)
    clickArr[objIndex].isShown = !clickArr[objIndex].isShown
    console.log(clickArr[objIndex].isShown)
    setCountries(clickArr)
  }

  const regexp = new RegExp(filter, "i");
  const newArr = countries.filter((x) => regexp.test(x.name));
  const length = newArr.length;
  if (length ===1) {
    setWeather(!weather)
  } else if ()

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${newArr[0].capital},${newArr[0].alpha2code}&appid=${process.env.REACT_APP_OPEN_WEATHER}`

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
      })
  },[weather])

  return (
    <div>
      <FilterSearch value={filter} handleFilter={handleFilter} />
      <Results countries={newArr} length={length} handleClick={handleClick} weather={weather}/>
    </div>
  );
}

export default App;