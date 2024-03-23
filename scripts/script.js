const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const cityPhoto = document.getElementById('city-photo');


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('search-form');
    const cityInput = document.getElementById('city-input');
    
    form.addEventListener('submit', function(event) {   
        event.preventDefault();
        const city = cityInput.value;
        console.log('City:', city);
        getWeather(city);
        // getCityPhoto(city); // Wywołaj funkcję getCityPhoto, jeśli jest dostępna
        cityInput.value = '';
    });
});

function getWeather(city) {
    const apiKey = '8e703ab4af69c7dee4a34ad2423d86a2';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            // Dodaj kod obsługi błędów, np. wyświetlanie komunikatu dla użytkownika
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const weatherDescription = data.weather[0].description;
    const temperature = Math.round(data.main.temp - 273.15);
    const humidity = data.main.humidity;

    const weatherHtml = `
        <h2>${cityName}</h2>
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
    `;

    weatherInfo.innerHTML = weatherHtml;
}

// Funkcja getCityPhoto(city) - implementuj odpowiednio, aby pobierała zdjęcie miasta i wyświetlała je na stronie

