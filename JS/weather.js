const API_KEY = "983d7a8dfdde00f58d65c31a9bc91f4a";


function onGeoSuccess(position) { // GeolocationPosition 객체를 전달인자로 입력받고, 해당 객체는 현재의 위치정보(위도, 경도 등)을 포함
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = document.querySelector("#weather span:first-child");
            const cityWeather = document.querySelector("#weather span:nth-child(2)");
            const cityTemp = document.querySelector("#weather span:nth-child(3)");
            cityName.innerText = data.name;
            cityWeather.innerText = data.weather[0].main;
            cityTemp.innerText = `${Math.round(data.main.temp)}°C`;
    }) 
}


function onGeoFailure() {
    alert("Can't find you! No wather information")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure); // getCurrentPosition(위치정보 확보 성공 시 작동 함수, 실패 시 작동 함수)

