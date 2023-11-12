import { createForecastCard } from './weatherCard.js';

export function display5DayForecast(data, forecastContainer) {
    forecastContainer.innerHTML = ''; // Clear previous forecast

    if (data && data.list) {
        for (let i = 0; i < 5; i++) {
            const forecastItem = data.list[i * 8]; // Data for each day at 12:00 PM

            if (forecastItem) {
                const date = new Date(forecastItem.dt * 1000);
                const card = createForecastCard(date, forecastItem);
                forecastContainer.appendChild(card);
            }
        }
    }
}
