const searchInput = document.querySelector('#search-input')
var searchInputVal = document.querySelector('#search-input').value
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='
const apiKey = '&appid=6d7fe1885740c345686c5b56cbcda38f'
const weatherNow = [];
function getLatLong(searchInput) {
    var latLong = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchInput + apiKey;
    fetch(latLong)
        .then(function (data){
            return data.json()
        })
        .then(function (data) {
            var lat = data[0].lat
            var long = data[0].long
            getWeather(lat, long)
        })
}
function getWeather(lat, long){
    var url = baseUrl + lat + long + apiKey;
    fetch(url)
        .then(function (res){
            return res.json();
        })
        .then(function (data){
            var weather = {
                city: data.timezone,
                icon: data.current.weather[0].icon,
                temp: data.current.temp,
                hum: data.current.humidity,
                wind: data.current.wind_speed
            }
            weatherNow.push(weather)

        }
        )
}
function showWeather(){

}
function handleSearchSubmit(event){
    event.preventDefault();
    searchInput= document.querySelector('.search-input').value;
    

    if (!searchInputVal) {
      
      return;
    }  
    getWeather();
  }
  searchBtn.addEventListener('click', handleSearchFormSubmit);