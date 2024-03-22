const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const cityPhoto = document.getElementById('city-photo');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const city = cityInput.value;
    getWeather(city);
    getCityPhoto(city);
    cityInput.value = '';
});

function getWeather(city) {
    // Klucz API OpenWeatherMap
    const apiKey = '8e703ab4af69c7dee4a34ad2423d86a2';

    // Tworzymy URL zapytania do API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    console.log('Wyszukiwanie pogody dla miasta:', city);


    // Wysyłamy zapytanie HTTP GET za pomocą fetch
    fetch(apiUrl)
        .then(response => {
            // Sprawdzamy, czy odpowiedź jest prawidłowa (status HTTP 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Jeśli odpowiedź jest prawidłowa, przetwarzamy odpowiedź JSON
            return response.json();
        })
        .then(data => {
            // Przetwarzamy otrzymane dane o pogodzie
            displayWeather(data); // Wyświetlamy dane o pogodzie
        })
        .catch(error => {
            // Obsługujemy błędy sieciowe lub błędy związane z przetwarzaniem danych
            console.error('There was a problem with your fetch operation:', error);
        });
}

function displayWeather(data) {
    // Wybieramy interesujące nas informacje o pogodzie z obiektu 'data'
    const cityName = data.name;
    const weatherDescription = data.weather[0].description;
    const temperature = Math.round(data.main.temp - 273.15); // Konwersja z kelwinów na stopnie Celsiusza
    const humidity = data.main.humidity;

    // Tworzymy szablon HTML z wybranymi informacjami o pogodzie
    const weatherHtml = `
        <h2>${cityName}</h2>
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
    `;

    // Wyświetlamy informacje o pogodzie na stronie w elemencie o id 'weather-info'
    weatherInfo.innerHTML = weatherHtml;
}



function getCityPhoto(city) {
    // Kod do pobrania zdjęcia miasta za pomocą API
}

// Kod do wyświetlania danych o pogodzie i zdjęcia miasta na stronie
