// Import modules
import fetchWeatherData from '../components/fetchWeatherData/weatherData.js';
import getBackgroundImage from '../components/backgrndImageAndDom/backgroundImage.js'
import fetch5DayWeatherForecast from "../components/fetchWeatherData/weatherForecast.js";
import { display5DayForecast } from '../components/weatherForecasts/displayForecast.js'
import { displayWeatherData } from '../components/displayWeatherData/displayWeatherData.js'
import { updateBackgroundColor } from '../components/displayWeatherData/backgroundColor.js';
import {
    cityInput,
    stateInput,
    countryInput,
    searchButton,
    weatherCard,
    cityName,
    weatherDateTime,
    weatherDescription,
    weatherIcon,
    temperature,
    feelsLike,
    pressure,
    tempMax,
    tempMin,
    sunrise,
    sunset,
    forecast,
} from '../components/backgrndImageAndDom/domElements.js';

// Search Weather Event Listener
searchButton.addEventListener('click', async () => {
    const city = cityInput.value;
    const state = stateInput.value;
    const country = countryInput.value;
    if (city) {
        
        try {
            const weatherData = await fetchWeatherData(city, state, country);
            if(weatherData) {
                displayWeatherData(
                    weatherData,
                    cityName,
                    weatherDateTime,
                    weatherDescription,
                    weatherIcon,
                    temperature,
                    feelsLike,
                    pressure,
                    tempMax,
                    tempMin,
                    sunrise,
                    sunset,
                    weatherCard
                );

                const background = getBackgroundImage(weatherData.weather[0].main);
                console.log("weather data:", weatherData);

                // updateBackgroundColor(background);

                const forecastData = await fetch5DayWeatherForecast(city, state, country);
                if (forecastData) {
                    console.log("Weather forecast:", forecastData)
                    display5DayForecast(forecastData, forecast);
                }
            }
        } catch (error) {
            console.error('Error Getting Weather Data:', error)
        }
    }  else {
        console.log("Enter the correct city name.");
    }
});

// Initial hide the weather card
weatherCard.style.display = 'none';