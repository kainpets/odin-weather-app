async function fetchWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=119ed74a23e4f5335ac1fb44359fe2f3`
  );
  const json = await response.json();
  console.log(json);
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
