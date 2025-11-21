const input = document.getElementById('input');

const btn = document.getElementById("btn");

const output = document.getElementById("output-box");
 
// login into www.weatherapi.com and create an API key
const apikey = "db5c0a64548144cdb16104957252505";

btn.addEventListener("click",getWeather);


async function getWeather(){
    const city = input.value;
    
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`

    const data = await fetch(url);

    const value = await data.json();

    // output.innerHTML(`<p>${value.current.temp_c}</p>`)
    // or you can just use innerText (to show just text). innerHTML is used to add elements along with text or any kind of data.
    // store the temperture and country in two variables (highly not recommended for efficiency purposes)
    const temp = value.current.temp_c;
    const country = value.location.country;
    // you can write this as
    // output.innerText = temp;  // or
    output.innerText = `It's ${temp}°C in ${city}, ${country}`;
    // this will be shown as It's 28°C in Kolkata, India
}