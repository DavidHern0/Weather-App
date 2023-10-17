const apiKey = '' // Set your API_KEY here

export function apiUrl(city) {
    return `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
}