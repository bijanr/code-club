const input = document.getElementById('input');

const btn = document.getElementById("btn");

const output = document.getElementById("output-box");

const apikey = "e9413d66e57315b811138420d35cfc21";

btn.addEventListener("click",getWeather);


function getWeather(){
    const city = input.value;
    
    const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=22.57&lon=88.36&appid={e9413d66e57315b811138420d35cfc21}'

    const 

}