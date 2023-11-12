// weatherForecast.js

// OpenWeatherMap API key
const apiKey = '4ae4a7e14072cdaa089d3848c195e1a7';

const fetch5DayWeatherForecast = async (city, state = '', country = '') => {
    const location = state ? `${city},${state},${country}` : `${city},${country}`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=imperial`;
    console.log("API URL response:", apiUrl)

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch forecast data');
        }
    } catch (error) {
        throw new Error('An error occurred:', error);
    }
};

export  default fetch5DayWeatherForecast;
