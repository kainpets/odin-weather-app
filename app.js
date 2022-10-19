async function fetchWeather(location) {
  // get longititude and latitiude
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=119ed74a23e4f5335ac1fb44359fe2f3`
  );
  const json = await response.json();
  const lon = json[0].lon;
  const lat = json[0].lat;
  console.log(lon, lat);

  // get the weather
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=119ed74a23e4f5335ac1fb44359fe2f3`
  );
  const jsonWeather = await weatherResponse.json();
  console.log(jsonWeather);
}

function getLocation() {
  const searchBar = document.querySelector("#search-bar");
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const location = searchBar.value;
    fetchWeather(location);
  });
}

getLocation();
