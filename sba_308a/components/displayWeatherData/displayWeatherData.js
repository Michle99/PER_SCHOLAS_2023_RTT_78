import { updateBackgroundColor } from "./backgroundColor.js";

export function displayWeatherData(data, cityNameElement, weatherDateTimeElement, weatherDescriptionElement, weatherIconElement, temperatureElement, feelsLikeElement, pressureElement, tempMaxElement, tempMinElement, sunriseElement, sunsetElement, weatherCardElement) {
    const iconUrl = data.weather[0].icon;
    // `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log("Weather icon:", iconUrl);
    
    weatherIconElement.src = `../../icons/${iconUrl}.png`;
    weatherIconElement.alt= `${data.weather[0].main}`;
    console.log("Weather icon Element:", weatherIconElement, weatherIconElement.alt);

    cityNameElement.textContent = data.name;
    const date = new Date();
    const dateString = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    weatherDateTimeElement.textContent = dateString;

    weatherDescriptionElement.textContent = data.weather[0].description;

    temperatureElement.textContent = `Temperature: ${data.main.temp.toFixed(1)}°F`;
    feelsLikeElement.textContent = `Feels Like: ${data.main.feels_like.toFixed(1)}°F`;
    pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
    tempMaxElement.textContent = `Max Temperature: ${data.main.temp_max.toFixed(1)}°F`;
    tempMinElement.textContent = `Min Temperature: ${data.main.temp_min.toFixed(1)}°F`;

    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);
    sunriseElement.textContent = `Sunrise: ${sunriseTime.toLocaleTimeString()}`;
    sunsetElement.textContent = `Sunset: ${sunsetTime.toLocaleTimeString()}`;

    // Update background color based on weather
    // updateBackgroundColor(data.weather[0].main);

    weatherCardElement.style.display = 'block';
    console.log("weather card element:", weatherCardElement);
}
