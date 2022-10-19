async function fetchWeather() {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=119ed74a23e4f5335ac1fb44359fe2f3`
  );
  const json = await response.json();
  console.log(json);
}

fetchWeather();
