let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchButton = document.querySelector(".btn");
let inputBox = document.getElementById("input");
let weatherIcon = document.querySelector(".weather").firstElementChild;
let errorsPlace = document.querySelector(".errors").firstElementChild;
const apiKey = "318008663e50c86a70f8adf22a5a37c2";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let weatherElement = document.querySelector(".weather");
const input = document.querySelector('#input');
const icon = document.querySelector('.input-box i');
// code the change the color of the icons when i focus in input-box :
input.addEventListener('focus', () => {
    icon.style.color = '#fea954'; // Change icon color on focus
});
async function checkWeather(cityName)
{
    let response = await fetch(apiUrl+ cityName +`&appid=${apiKey}`);
    let data = await response.json();
    let weather = data.weather;
    
    if(response.status === 404)
    {
        errorsPlace.innerHTML = "⚠️ INVALIDE CITY NAME";
    }
    else if(inputBox.value === "")
    {
        errorsPlace.innerHTML = "⚠️ PLS ENTER A CITY NAME";
    }
    else if(response.status === 200 && inputBox.value !=="")
    {
    errorsPlace.innerHTML = "";

    weatherElement.style.display = "inline";
    temp.innerHTML = Math.round(data.main.temp) +" °C"
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity +" %"
    wind.innerHTML = Math.round(data.wind.speed) +" km/h"
    if(weather[0].main === "Clear")
    {
        weatherIcon.src  ="images/sun.png";
    }
    else if(weather[0].main === "Clouds")
    {
        weatherIcon.src  = "images/clouds.png";
    }
    else if(weather[0].main === "Rain")
    {
        weatherIcon.src = "images/heavy-rain.png";
    }
    else if(weather[0].main === "Mist")
    {
        weather.src = "images/mist.png";
    }
    else if(weather[0].main === "Drizzle")
    {
        weather.src  = "images/drizzle.png";
    }
    else if(weather[0].main === "Snow")
    {
        weather.src = "images/snow.png";
    }
    inputBox.value = "";
    
    }

   
}

searchButton.addEventListener("click", ()=>{
        checkWeather(inputBox.value);
   
})