const API_KEY = "806996156b5a29efb3b54f0eeb248372";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const space = document.createTextNode("\u00a0");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        weather.append(space);
    });
}
function onGeoError(){
    alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);