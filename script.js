const searchInput = document.querySelector('#search-input').value;
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='
const apiKey = '&appid=6d7fe1885740c345686c5b56cbcda38f'

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
        .then(function (data){
            return response.json();
        })
        .then(function ())
}