var userInput = 'New York'



fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ userInput +'&limit=5&appid=330d645ab756160ca3a15f49a493501d').then(function(response) {
    return response.json()
}).then(function (data) {

    var latitude = data[0].lat
    var longitude = data[0].lon
    console.log(latitude, longitude)
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude +'&lon=' + longitude +'&appid=330d645ab756160ca3a15f49a493501d&units=imperial').then(function (response){
   return response.json()
}).then(function (data){
    console.log(data)
    var icon = data.list[0].weather[0].icon
    document.querySelector('.weather-image').setAttribute('src', 'https://openweathermap.org/img/w/'+ icon +'.png')
})
})


