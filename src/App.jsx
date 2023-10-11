import { useEffect, useState } from 'react';
import './App.css'
const API_KEY = 'dc55a19ca44442c085e94324231110';
const MODES = {
  Celsius: 'ºC',
  Farnheit: 'ºF'
}

const SPAIN_CITIES = {
  Madrid: "Madrid",
  Barcelona: "Barcelona",
  Valencia: "Valencia",
  Sevilla: "Sevilla",
  Zaragoza: "Zaragoza",
  Málaga: "Málaga",
  Murcia: "Murcia",
  Toledo: "Toledo",
  Bilbao: "Bilbao",
  Alicante: "Alicante"
};

const randomProp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];

function App() {
  const [city, setCity] = useState(randomProp(SPAIN_CITIES));
  const [mode, setMode] = useState(MODES.Celsius);
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);


  const fetchWeatherData = async () => {
    try {
      const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;
      const response = await fetch(API_URL);

      if (response.status !== 200) {
        console.error('Error: Could not obtain weather data');
        setError("Error: City doesn't exist.");
        return;
      }

      const data = await response.json();
      setLocation(data.location);
      setWeatherData(data.current);
      setError(null);
    } catch (error) {
      console.error('There was an error in obtaining weather forecast data:', error);
      setError('There was an error in obtaining weather forecast data');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const handleChangeMode = () => {
    if (mode === MODES.Celsius) {
      setMode(MODES.Farnheit)
    } else {
      setMode(MODES.Celsius)
    }
  }

  return (
    <main>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter a location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Change Location</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {location && (
        <>
          <button onClick={handleChangeMode}>
            {mode === MODES.Celsius ? 'Change to ºF' : 'Change to ºC'}
          </button>
          <section>
            <h3>
              {location.name}, {location.region}, {location.country}
            </h3>
          </section>
        </>
      )}
      {weatherData && (
        <section>
          {mode === MODES.Celsius ? (
            <div>
              <p><b>Temperature:</b> {weatherData.temp_c} {MODES.Celsius}</p>
              <p><b>Thermal sensation:</b> {weatherData.feelslike_c} {MODES.Celsius}</p>
            </div>
          ) : (
            <div>
              <p><b>Temperature:</b> {weatherData.temp_f} {MODES.Farnheit}</p>
              <p><b>Thermal sensation:</b> {weatherData.feelslike_f} {MODES.Farnheit}</p>
            </div>
          )}
          <img src={weatherData.condition.icon} alt={weatherData.condition.text} title={weatherData.condition.text} />
          <p></p>
        </section>
      )}
    </main>
  );
}

export default App;
