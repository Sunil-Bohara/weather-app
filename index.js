console.log("Weather app");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "4931aebc9aa5c18057a68471ab388f66";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiURL + `${city}&appid=${apiKey}`);

    if (response.status >= 400) {
        document.querySelector(".city").innerHTML = "oops! city not found!";
        document.querySelector(".temp").innerHTML = "!";
        document.querySelector(".humidity").innerHTML = "!";
        document.querySelector(".wind").innerHTML = "!";
    } else {
        const data = await response.json();
        
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";

        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./images/snow.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png";
        }
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
})