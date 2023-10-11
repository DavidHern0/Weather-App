import { apiUrl } from '../config';

export const getWeatherData = async (city) => {
    try {
        const response = await fetch(apiUrl(city))

        if (response.status !== 200) {
            console.error('Error: Could not obtain weather data')
            return { location: null, current: null, error: "Error: City doesn't exist." }
        }

        const data = await response.json()
        return { location: data.location, current: data.current, error: null }
    } catch (error) {
        console.error('There was an error in obtaining weather forecast data:', error)
        return { location: null, current: null, error: 'There was an error in obtaining weather forecast data' }
    }
}