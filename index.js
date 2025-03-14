const searchForm = document.querySelector(".search");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector(".search-button");
const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");


const apiKey = "0857e81c8a180e1ebc35fee07ca57b37";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const checkWeather = async(city) =>{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`) ;

if(response.status == 404){
    error.classList.add("errorShow");
}else{
     
    error.classList.remove("errorShow");
    const data = await response.json();

    console.log(data);

    cityName.innerHTML=data.name;
    temperature.innerHTML=Math.round(data.main.temp) +"°C";
    humidity.innerHTML=data.main.humidity + "%";
    windSpeed.innerHTML=data.wind.speed + "km/h";
    
    // add weather icon

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "image/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "image/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "image/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "image/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "image/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "image/snow.png";
    }
    weather.classList.add("weatherShow");

}
}
searchBtn.addEventListener("click" , ()=>{

    checkWeather(searchBox.value);
    
})