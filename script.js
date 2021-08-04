const searchInput = document.querySelector('#search-input')
var searchInputVal = document.querySelector('#search-input').value
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='
const apiKey = '&appid=6d7fe1885740c345686c5b56cbcda38f'

// let today = moment().format('1')
// let todayTemp = document.querySelector(".temp");
// let todayHumid = document.querySelector(".hum");
// let todayWind = document.querySelector(".wind");


// let monday = document.getElementById("mon").children[0];
// let mon = moment().add(1, 'days').calendar("l");
// let monTemp = document.querySelector(".monTemp");
// let monHumid = document.querySelector(".monHum");
// let monWind = document.querySelector(".monWind");


// let tuesday = document.getElementById("tue").children[0];
// let tue = moment().add(1, 'days').calendar("l");
// let tueTemp = document.querySelector(".tueTemp");
// let tueHumid = document.querySelector(".tueHum");
// let tueWind = document.querySelector(".tueWind");


// let wednesday = document.getElementById("wed").children[0];
// let wed = moment().add(1, 'days').calendar("l");
// let wedTemp = document.querySelector(".wedTemp");
// let wedHumid = document.querySelector(".wedHum");
// let wedWind = document.querySelector(".wedWind");


// let thursday = document.getElementById("thur").children[0];
// let thur = moment().add(1, 'days').calendar("l");
// let thurTemp = document.querySelector(".thurTemp");
// let thurHumid = document.querySelector(".thurHum");
// let thurWind = document.querySelector(".thurWind");


// let friday = document.getElementById("fri").children[0];
// let fri = moment().add(1, 'days').calendar("l");
// let friTemp = document.querySelector(".friTemp");
// let friHumid = document.querySelector(".friHum");
// let friWind = document.querySelector(".friWind");


const weatherNow = [];
function getLatLong(searchInput) {
    var latLong = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchInput + apiKey;
    fetch(latLong)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            var lat = data[0].lat
            var long = data[0].long
            getWeather(lat, long)
        })
}
function getWeather(lat, long) {
    var url = baseUrl + lat + long + apiKey;
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            var weather = {
                ccity: data.timezone,
                cicon: data.current.weather[0].icon,
                ctemp: data.current.temp,
                chum: data.current.humidity,
                cwind: data.current.wind_speed
            }
            weatherNow.push(weather)

        }
        )
}
function weatherNow(data){
    var createWeatherDiv = document.createElement('div');
    weathResultDiv.className = 'weather-result float-child';

    var ccity = document.createElement('h4');
    ccity.textContent = data.timezone + ' ' + currentDay;
    ccity.className = 'weather';

    var cicon = document.createElement('img');
    cicon.src = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
    cicon.className = 'weather';

    var ctemp = document.createElement('p');
    ctemp.textContent = "Temp: " + data.current.temp + " °F";
    ctemp.className = 'weather';

 

    var chum = document.createElement('p');
    chum.textContent = "Humidity: " + data.current.humidity + "%";
    chum.className = 'weather';

    var cwind = document.createElement('p');
    cwind.textContent = "Wind Speed: " + data.current.wind_speed + " MPH";
    cwind.className = 'weather';

    createWeatherDiv.appendChild(weathCity);
    createWeatherDiv.appendChild(weathIcon);
    createWeatherDiv.appendChild(weathTemp);
    createWeatherDiv.appendChild(weathHum);
    createWeatherDiv.appendChild(weathWind);
    
  
    document.querySelector('.result-content').appendChild(createWeatherDiv);
}
function handleSearchFormSubmit(event) {
    event.preventDefault();
    searchInput = document.querySelector('#search-input').value;


    if (!searchInputVal) {

        return;
    }
    getWeather();
}
searchBtn.addEventListener('click', handleSearchFormSubmit);