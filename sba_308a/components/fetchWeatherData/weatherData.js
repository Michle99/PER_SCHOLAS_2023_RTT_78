// weatherData.js

// OpenWeatherMap API key
const apiKey = '4ae4a7e14072cdaa089d3848c195e1a7';

const fetchWeatherData =  async (city, state = '', country = '')  => {
    const location = state ? `${city},${state},${country}` : `${city},${country}`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log("Weather data: ", data)
            return data;
        } else {
            console.error('Failed to fetch weather data');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export default fetchWeatherData;