
$(document).ready(() => {
  //////////////////////  for searching your city

  function searchCity(city) {
    // Here we run our AJAX call to the OpenWeatherMap API

    const API = "51d7968cfee71b16dc19326d1a6ed198";


   var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=" + API;
//     let queryURL = ' api.openweathermap.org/data/2.5/forecast/hourly?q=tucson,{us}' + "&APPID=" + API;
// ////for hourly temps api.openweathermap.org/data/2.5/forecast/hourly?q={city name},{country code} + "&APPID=" + API;
    // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}  ISO 3166-2:US is the entry for the United States
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "jsonp",
        success: function(response) {
          console.log(response);
        }
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {

        let cityName = response.name;
//       cityName.attr('<h2>');
//       cityName.addClass('text-center')
        $(".date").text(Date());


        $("#icon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");

//         console.log(response.weather.icon);
        let currentTemp = response.main.temp;
         let tempCurrent = $('<p class="text-center">').html(currentTemp.toFixed(0) + "°(F)");
         let descript = response.weather[0].description;
         let currentDescription = $('<p class="text-center">').html(descript)
         let humidityCurrent = response.main.humidity;
         let currentHumid = $('<p class="text-center">').html('Humidity: ' + humidityCurrent + ' %');
         let windSpeed = response.wind.speed;
         let currentSpeed = $('<p class="text-center">').html('Wind: ' + windSpeed.toFixed(0) + ' mph');
        let iconImage = $('<img>');
        let imageIcon = response.weather[0].icon;
        let iconImageNow = $("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        iconImageNow.attr('id','weatherIconCard');
        iconImageNow.addClass('mx-auto')
        // iconImage.attr('src', "http://openweathermap.org/img/w/" + imageIcon + ".png' alt='Icon depicting current weather.'>");



        $("#max-temp").text("Max Temp: " + response.main.temp_max + "°(F)");
        $("#min-temp").text("Min Temp: " + response.main.temp_min + "°(F)");


        // $("#icon").html("time of day " + response.weather[0].icon);
        $("#sunrise").text("Sunrise: " + response.sys.sunrise);
        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);
        console.log(response.weather[0].description);

        let weatherDiv = $("<div class='card m-2 col-sm-12 col-md-6 col-lg-4 mx-auto'>");

        weatherDiv.append(cityName, tempCurrent, currentDescription,iconImageNow, currentHumid, currentSpeed);
//       weatherDiv.append(currentTemp)
        $('.weather-div').append(weatherDiv);

      });

  }
  //end of function

  $("#search-btn").on("click", function(e) {
    e.preventDefault();
    var searchForYourCity = $("#search-city").val().trim();
    console.log(searchForYourCity);

    $("#search-city").val("");

    if (searchForYourCity === "" || searchForYourCity === undefined) {
      alertify.error("Enter a name of city!");

    } else {
      searchCity(searchForYourCity);

    }

  });
});