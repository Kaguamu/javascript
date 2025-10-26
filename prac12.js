const app = document.createElement("div");
app.id = "weatherApp";
document.body.appendChild(app);

const input = document.createElement("input");
input.placeholder = "Enter city...";
const button = document.createElement("button");
button.textContent = "Get Weather";
const result = document.createElement("div");

app.append(input, button, result);

const API_KEY = "demo";
const BASE_URL = "https://api.open-meteo.com/v1/forecast";

const getWeather = async (city) => {
  try {
    result.textContent = "Loading...";
    const coords = await getCoordinates(city);
    const url = `${BASE_URL}?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
    const res = await fetch(url);
    const data = await res.json();
    const temp = data.current_weather?.temperature;
    if (temp !== undefined) {
      displayWeather(city, temp);
      cacheWeather(city, temp);
    } else result.textContent = "No weather data found.";
  } catch (err) {
    result.textContent = "Error fetching weather.";
    console.error(err);
  }
};

const getCoordinates = async (city) => {
  const geoRes = await fetch(`https://geocode.maps.co/search?q=${city}`);
  const [data] = await geoRes.json();
  return { lat: data.lat, lon: data.lon };
};

const displayWeather = (city, temp) => {
  result.innerHTML = `<h3>${city}</h3><p>${temp}°C</p>`;
};

const cacheWeather = (city, temp) => {
  const cached = JSON.parse(localStorage.getItem("weatherData")) || {};
  cached[city] = temp;
  localStorage.setItem("weatherData", JSON.stringify(cached));
};

button.addEventListener("click", () => {
  const city = input.value.trim();
  if (city) getWeather(city);
});


