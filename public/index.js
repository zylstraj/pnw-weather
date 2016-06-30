$(document).ready(function(){
  $('#seattleWeather').click(function(){
    // var resultElement = $('#resultDiv');
    $.get("https://api.forecast.io/forecast/f78dd824963251a1a2bc8cd3b18b634b/47.606,-122.335", function( data ) {
      console.log(data);
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
})
// http://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1
