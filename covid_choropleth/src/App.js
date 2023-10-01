import './App.css';
import React, { useEffect, useState } from "react"

function App() {
  const [vaccines, setVaccines] = useState([])

  const fetchVaccineData = () => {
    fetch("http://127.0.0.1:5000/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setVaccines(data)
      }, {mode:'cors'})
  }

  useEffect(() => {
    fetchVaccineData()
  }, [])

  return (
    <div>
      {vaccines.length > 0 && (
        <ul>
          {vaccines.map(vax => (
            <li>{vax}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
