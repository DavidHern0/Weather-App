
export const getWeatherData = async (city) => {
    const API_KEY = 'dc55a19ca44442c085e94324231110'
    try {
        const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
        const response = await fetch(API_URL)

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