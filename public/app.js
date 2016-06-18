$(document).ready(function(){
//   $('#seattleWeather').click(function(){
//     // var resultElement = $('#resultDiv');
//     $.get( "http://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1", function( data ) {
//       console.log(data);
//       console.log(data.weather[0].description);
//     $('#resultDiv').html(data.weather[0].main);
//   console.log( "Load was performed." );
//     });
// })
  $('#seattleWeather').click(function(){
    // var resultElement = $('#resultDiv');
    $.get("http://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1", function( data ) {
      console.log(data.weather[0].main);
    $('#resultDiv').html((function() {
    var $mainWeather = data.weather[0].main;
    var $temperatureWeather = data.main.temp;
    var $cityWeather = data.name;
  return ("<h2>" + $cityWeather + "</h2><p>Temperature: " + $temperatureWeather + "</p><p>" + $mainWeather + "</p>");
}));
  });
  });
  $('#portlandWeather').click(function(){
    // var resultElement = $('#resultDiv');
    $.get("http://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1", function( data ) {
      console.log(data.weather[0].main);
    $('#resultDiv').html((function() {
    var $mainWeather = data.weather[0].main;
    var $temperatureWeather = data.main.temp;
    var $cityWeather = data.name;
  return ("<h2>" + $cityWeather + "</h2><p>Temperature: " + $temperatureWeather + "</p><p>" + $mainWeather + "</p>");
}));
  });
  });
  $('#vancouverWeather').click(function(){
    // var resultElement = $('#resultDiv');
    $.get("http://api.openweathermap.org/data/2.5/weather?id=6173331&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1", function( data ) {
      console.log(data.weather[0].main);
    $('#resultDiv').html((function() {
    var $mainWeather = data.weather[0].main;
    var $temperatureWeather = data.main.temp;
    var $cityWeather = data.name;
  return ("<h2>" + $cityWeather + "</h2><p>Temperature: " + $temperatureWeather + "</p><p>" + $mainWeather + "</p>");
}));
  });
  });
//       data.list[0].weather[0].main);
//   console.log( "Load was performed." );
//     });5746545
// })

//    $('#vancouverWeather').click(function(){
//     // var resultElement = $('#resultDiv');
//     $.get( "http://api.openweathermap.org/data/2.5/forecast/city?id=6173331&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1", function( data ) {
//       console.log(data.list[0].weather[0].main);
//     $('#resultDiv').html(data.list[0].weather[0].main);
//   console.log( "Load was performed." );
//     });
// })


   //  $.ajax({
   //    url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=5809844&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1',
   //    method: 'GET',
   //    data: {
   //      format: 'json'
   //    },
   //    error: function() {
   //    $('#resultDiv').html('<p>An error has occurred</p>');
   // },
   //    success: function(data) {
   //      var $weatherMain = $('<h1>').text(data.list.weather.main);
   //      var $weatherDescription = $('<p>').text(data.list.weather.description);

   //      resultElement.append($weatherMain).append($weatherDescription);
   //    }
      // ('Weather: ' + data.weather[0].main + '<br/>' + 'Description: ' + data.weather[0].description);
    // })
})
