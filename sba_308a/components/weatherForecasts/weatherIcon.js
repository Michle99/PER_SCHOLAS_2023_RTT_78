

export function createWeatherIcon(iconCode) {
    const iconElement = document.createElement('img');
    iconElement.src = `../../icons/${iconCode}.png`;
    iconElement.alt = `${iconCode}`;
    return iconElement;
}