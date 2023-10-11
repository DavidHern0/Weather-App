import { useState } from 'react'
import './App.css'
import { Weather } from './components/Weather'
import { CityForm } from './components/CityForm'


function App() {
  const [location, setLocation] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  return (
    <main>
      <h1>Weather App</h1>
      <CityForm setLocation={setLocation} setWeatherData={setWeatherData} />
      <Weather location={location} weatherData={weatherData} />
    </main>
  )
}

export default App
