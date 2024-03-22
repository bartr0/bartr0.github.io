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
            displayWeather(data);
        })
        .catch(error => {
            // Obsługujemy błędy sieciowe lub błędy związane z przetwarzaniem danych
            console.error('There was a problem with your fetch operation:', error);
        });
}

function displayWeather(data) {
    // Tutaj możemy wyświetlić dane o pogodzie na stronie
    console.log(data);
}


function getCityPhoto(city) {
    // Kod do pobrania zdjęcia miasta za pomocą API
}

// Kod do wyświetlania danych o pogodzie i zdjęcia miasta na stronie
