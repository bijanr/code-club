const input = document.getElementById('input');

const btn = document.getElementById("btn");

const output = document.getElementById("output-box");

const apikey = "db5c0a64548144cdb16104957252505";

btn.addEventListener("click",getWeather);


async function getWeather(){
    const city = input.value;
    
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`

    const data = await fetch(url);

    const value = data.json;

    console.log(value)
}