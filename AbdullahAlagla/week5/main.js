/*
- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.
*/

//key 1d5caa74a9552da4699dd287b92f5313


'use strict';
$(document).ready(function() {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "1d5caa74a9552da4699dd287b92f5313";
  
   $("#submitGetTemp").click(function(){
     var cityName = $('#city').val();
     GetWeather(cityName)
   })
 
   $('#city').keyup(function() {
    //perform ajax call...
    $('#cityStatic').text($(this).val());
 });

   function GetWeather(city){
  $.ajax({
       url :  weatherUrl + city + '&appid='+apiKey,
       success: function (res){
        Display(res)
},
error: function(e){
  console.log(e.responseJSON.message)
     alert(`error : ${e.responseJSON.message}`)
},

  })

}
 
});

function Display(res){
  console.log(res.main.temp)
        $("#temp").html(res.main.temp)
}

