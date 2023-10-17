import { useState } from 'react'
import './App.css'
import { Weather } from './components/Weather'
import { CityForm } from './components/CityForm'


function App() {
  const [location, setLocation] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  return (
    <main className='d-flex flex-column justify-content-center mt-5'>
      <h1 className='mb-3'>Weather App</h1>
      <CityForm className="d-flex" setLocation={setLocation} setWeatherData={setWeatherData} />
      <Weather location={location} weatherData={weatherData} />
    </main>
  )
}

export default App
