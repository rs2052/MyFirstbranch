const apiKey = '96889c07a2fe067a9bf225b0cca41dfc';

const cityInput = document.getElementById('cityInput');

const searchBtn = document.getElementById('btn');

const weatherInfoDiv = document.getElementById('weather-info');



searchBtn.addEventListener('click', () => {

    const cityName = cityInput.value.trim();
    if (!cityName) {
        alert('Please enter a city name');
        return;
    }



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)

        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();

        })

    

        .then(data => {

            const weatherDescription = data.weather[0].description;

            const cityMainTemperature = data.main.temp;

            const windSpeed = data.wind.speed;

            weatherInfoDiv.innerHTML =
                `
    <p>Weather Description: ${weatherDescription}</p>
   
    <p>Main Temperature: ${cityMainTemperature} K</p>
   
    <p>Wind Speed: ${windSpeed} m/s</p>
    `
                ;

        })


        .catch(error => {

            console.error('Error:', error.message);
            alert('Error, Please Try Again Later');

        });

});