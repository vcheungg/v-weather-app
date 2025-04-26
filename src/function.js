function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temp = response.data.temperature.current;
  let feel = response.data.temperature.feels_like;
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#description");
  let feelTemperature = document.querySelector("#feel-temp");
  let iconElement = document.querySelector("#icon");
  let humidityElement = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let wind = response.data.wind.speed;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  iconElement.innerHTML = `<img
                src="${response.data.condition.icon_url}"
                class="weather-app-icon"
              />`;

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formattedDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  feelTemperature.innerHTML = Math.round(feel);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windSpeed.innerHTML = Math.round(wind);
  temperatureElement.innerHTML = Math.round(temp);
}

function formattedDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
function citySearch(city) {
  let apiKey = "047t2173e3a39c66942c701baf3a6of5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");

  citySearch(searchInput.value);
}

function displayForecast() {
  let forecast = document.querySelector("#forecast");

  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];

  days.forEach(function (day) {
    forecast.innerHTML = `
<div class="day-forecast">
    <div class="day">${day}</div>
    <div class="grid-emoji">☀️</div>
    <div class="day-temps">
        <div class="day-temp"><strong>15°C</strong></div>
        <div class="day-temp">9°C</div>
    </div>
</div>
`;
  });
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);

citySearch("Vancouver");
displayForecast();
