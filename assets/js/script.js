// Variables for DOM elements
var formInput = document.getElementById("search-input")
var button = document.getElementById("search-btn")


// variables for the API
var apiKey = "a235fb6b7a07c79f26b94ec55dd12811"



// Write a function to get city info
function getCity(event){
    event.preventDefault();
    console.log("getting city")
    // get the city from the search input
    var city = formInput.value.trim()
    console.log(city);
    var geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    fetch(geoUrl)
  .then(response => response.json())
  .then(data => getWeather(data));
}

// write a function to get weather infomation using one-call api
function getWeather(cityInfo){
    console.log(cityInfo[0])
    // get the lat and lon
    var lat = cityInfo[0].lat
    var lon = cityInfo[0].lon
    console.log(lat,lon)
    var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(oneCallUrl)
    .then(response => response.json())
    .then(data => console.log(data));
}


// Attach EventLister to the button
button.addEventListener("click", getCity);

// get Render weather