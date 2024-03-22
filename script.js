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
    // Kod do pobrania danych o pogodzie za pomocą API
}

function getCityPhoto(city) {
    // Kod do pobrania zdjęcia miasta za pomocą API
}

// Kod do wyświetlania danych o pogodzie i zdjęcia miasta na stronie
