const searchInputEl = document.getElementById('search-input');
const searchButtonEl = document.getElementById('search-button');
const townEl = document.getElementById('town');
const countryEl = document.getElementById('country');
const temperatureEl = document.getElementById('temperature');
const conditionsEl = document.getElementById('conditions');
const windEl = document.getElementById('wind');
const pressureEl = document.getElementById('pressure');
const uvEl = document.getElementById('uv');

const airQuality = 'yes';

const getWeather = city => {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=756b142720f34d1dad3184645231502&q=${city}&aqi=${airQuality}`
  )
    .then(response => response.json())
    .then(data => {
      townEl.innerHTML = data.location.name;
      countryEl.innerHTML = data.location.country;
      temperatureEl.innerHTML = `${data.current.temp_c}&deg C`;
      conditionsEl.innerHTML = `<img src=${data.current.condition.icon}> <span>${data.current.condition.text}</span>`;
      windEl.innerHTML = `wind: ${data.current.wind_kph} kph`;
      pressureEl.innerHTML = `pressure: ${data.current.pressure_mb} hPa`;
      uvEl.innerHTML = `index UV: ${data.current.uv}`;

      console.log(data);
    });
};

getWeather('Warsaw');

searchButtonEl.addEventListener('click', e => {
  e.preventDefault();
  const city = searchInputEl.value;
  getWeather(city);
});
