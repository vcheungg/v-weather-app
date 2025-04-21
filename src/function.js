function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temp = response.data.temperature.current;
  let feel = response.data.temperature.feels_like;
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#description");
  let feelTemperature = document.querySelector("#feel-temp");
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img
                src="${response.data.condition.icon_url}"
                class="weather-app-icon"
              />`;

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  feelTemperature.innerHTML = Math.round(feel);
  temperatureElement.innerHTML = Math.round(temp);
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
let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);

citySearch("Vancouver");
