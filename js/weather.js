const searchButton = () => {
    const inputArea = document.getElementById('input-text');
    const inputText = inputArea.value;
    inputArea.value = '';
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=2dcf673c8282c3d287eb8c95c775c982`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))


}


const displayWeather = (weatherData) => {
    console.log(weatherData);
    const weatherForecastDiv = document.getElementById('weatherForecastDiv');
    weatherForecastDiv.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1>${weatherData.name}</h1>
            <h3><span>${weatherData.main.humidity}</span>&deg;C</h3>
            <h1 class="lead">${weatherData.weather[0].main}</h1>
            <h1 class="lead">Latitude= ${weatherData.coord.lat}</h1>
            <h1 class="lead">Longitude= ${weatherData.coord.lon}</h1>



    
    `;




}