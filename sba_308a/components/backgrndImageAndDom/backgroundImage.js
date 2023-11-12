const getBackgroundImage = (weather) => {
    // Set the background image based on weather conditions
    let backgroundImage;

    switch (weather) {
        case 'Clear':
            backgroundImage = '../../weather_backgrounds/clear.jpg'; 
            break;
        case 'Clouds':
            backgroundImage = '../../weather_backgrounds/cloudy.jpg';
            break;
        case 'Rain':
            backgroundImage = '../../weather_backgrounds/rainy.jpg';
            break;
        default:
            backgroundImage = '../../weather_backgrounds/sandy.jpg';
    }

    document.body.style.backgroundImage = `url(${backgroundImage})`;
}

export default getBackgroundImage;