function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
}
let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);
