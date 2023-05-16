import { getWeather } from './app';

const successCallback = position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getMyLocation(latitude, longitude);
};

const errorCallback = error => {
  console.log(error);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

const getMyLocation = (latitude, longitude) => {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pl`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      getWeather(data.city);
    });
};
