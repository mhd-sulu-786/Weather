   const search_box=document.querySelector('.search input');
   const search_btn=document.querySelector('.search button')
        

const apikey = "268f6c3993fa15b75060593ca33f5310";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&appid=268f6c3993fa15b75060593ca33f5310&unit=metric&q=";
const weathr_icon = document.querySelector('.weather-icon');
async function checkweather(city) {
    const res = await fetch(apiurl + city);
    const data=await res.json();
    
    
  
    if (res.status == 404) {
        document.querySelector('.errr').style.display = "block";
    } else {
        document.querySelector('.errr').style.display = "none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            weathr_icon.src = "imgs/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weathr_icon.src = "imgs/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weathr_icon.src = "imgs/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weathr_icon.src = "imgs/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weathr_icon.src = "imgs/mist.png"
        }
        document.querySelector('.weather').style.display = "block";
    }


} search_btn.addEventListener("click",()=>{
    checkweather(search_box.value);
})

