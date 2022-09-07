const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
async function getWeather () {
    let userCity = city.value;
    if(userCity){
        userCity = userCity
    }else {
        userCity = "Kyiv";
        city.value = "Kyiv";
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&lang=en&appid=6ac729d0e998a2a2deed63390521ba84&units=metric`
    const res = await fetch(url);
    const data = await res.json();    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = "wind: " + data.wind.speed + " m/s";
    humidity.textContent ="humidity: " + data.main.humidity+"%";
}
city.addEventListener("change", getWeather)
getWeather()

function setLocalStorage(){
    localStorage.setItem('city', city.value)
}
function getLocalStorage(){
    if(localStorage.getItem('city')){
        city.value = localStorage.getItem('city');
        getWeather()
    }
}
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
