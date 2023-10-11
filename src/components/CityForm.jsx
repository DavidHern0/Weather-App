import { useState } from "react"
import { SPAIN_CITIES } from "../constants"
import { getWeatherData } from "../services/logic"

export function CityForm({ setLocation, setWeatherData }) {
    const randomProp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0]

    const [city, setCity] = useState(randomProp(SPAIN_CITIES) + ", Spain")
    const [error, setError] = useState(null)
    
    const handleGetWeatherData = async (city) => {
        const result = await getWeatherData(city)
        setLocation(result.location)
        setWeatherData(result.current)
        setError(result.error)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleGetWeatherData(city)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter a location"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
                {error && <p class="error">{error}</p>}
            </form>
        </>
    )
}