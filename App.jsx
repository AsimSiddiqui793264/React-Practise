import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [inputCity, setInputCity] = useState("");
  const [cities, setCities] = useState([]);
  
  function addCity() {
    setCities((cities) => {
      const cityList = [...cities, inputCity];
      setInputCity("");
      return cityList;
    })
  }

  function removeCity(index) {
    const updatedCity = cities.filter((_, id) => {
      return (index != id);
    });
    setCities(updatedCity);
  }

  function removeAll() {
    setCities([])
  }

  return (
    <>
      <h1 style={{color : "blue"}} >This is main Page</h1>
      <Link to="/Contact">Go to Contact</Link><br />
      <Link to="/Product/:id">Go to Product</Link><br />
      <Link to="/About">Go to About</Link>
      <h2 style={{color : "green"}}>The count is {count}</h2>
      <button className='btn btn-secondary' onClick={() => setCount(count + 1)}>increment the count</button><br /><br />

      {cities.map((data, index) => {
        return (
          <div key={index}>
            <ul>
              <li>{data} <button className='btn btn-danger' onClick={() => removeCity(index)}>Remove(-)</button></li>
            </ul>
          </div>
        )
      })}

      {cities.length > 1 && <button className='btn btn-danger' onClick={removeAll}>Remove All</button>}<br />
      <input type="text" style={{ textTransform: "capitalize" }} placeholder='Enter city name' value={inputCity} onChange={(e) => setInputCity(e.target.value)} /> <button className='btn btn-primary' onClick={addCity}>Add City</button>
    </>
  )
}

export default App
