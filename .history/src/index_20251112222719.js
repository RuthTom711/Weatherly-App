function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current; 
    let cityElement = document.querySelector("#city")
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new date(response.data.time*1000);

   console.log(response.data);
   
    cityElement.innerHTML = response.data.city;

    timeElement.innerHTML = `${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature); 

}

function formatDate(date) {
    let minuted = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",

    ];
    let day = days [date.getDay()];

    return `${day} ${hours} ${minuted}`
}

function searchCity(city) {
    let apiKey = "2bf02005obb4ft73c247eba0b4e8f73d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Cape Town");