
const input = document.getElementById("city");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

const API = "YOUR_API_KEY";

btn.addEventListener("click", getWeather);

async function getWeather() {
 
  const city = input.value;


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

 
  const resp = await fetch(url);
  const data = await resp.json();

  out.innerHTML = `
    <h3>${data.name}</h3>
    Temp: ${data.main.temp}°C <br>
    Weather: ${data.weather[0].description}
  `;
}

