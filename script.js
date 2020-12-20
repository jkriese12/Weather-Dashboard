// API Key and URL buildout
var city = $("textarea").val();
var APIKey = "11c1419085b8b8abf0e987d8580426ea";
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// Calling the API for current day weather on-click
$("button").on("click", function () {
  var city = $("textarea").val();
  var currentDate = moment().format(" L");
  var APIKey = "11c1419085b8b8abf0e987d8580426ea";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#city").text(response.name + currentDate);
    $("#temp").text("Temperature: " + response.main.temp.toFixed(0) + " F");
    $("#humidity").text("Humidity: " + response.main.humidity + "%");
    $("#windSpeed").text("Wind Speed: " + response.wind.speed.toFixed(1) + " MPH");
  });
});
// Calling API for 5 day forecast on-click
$("button").on("click", function () {
  var city = $("textarea").val();
  // Variable assignments to format dates correctly
  var nextDay = moment().add(1, "days").format("L");
  var twoDays = moment().add(2, "days").format("L");
  var threeDays = moment().add(3, "days").format("L");
  var fourDays = moment().add(4, "days").format("L");
  var fiveDays = moment().add(5, "days").format("L");
  // New API link for 5 day forecast data
  var queryURL5day =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;
  $.ajax({
    url: queryURL5day,
    method: "GET",
  }).then(function (response) {
    console.log(response.list);
    $("#day1").text(nextDay);
    $("#day1Temp").text("Temp: " + response.list[5].main.temp.toFixed(0) + " F");
    $("#day1Humidity").text("Humidity: " + response.list[5].main.humidity + "%");
    $("#day2").text(twoDays).addClass("bold");
    $("#day2Temp").text("Temp: " + response.list[13].main.temp.toFixed(0) + " F");
    $("#day2Humidity").text("Humidity: " + response.list[13].main.humidity + "%");
    $("#day3").text(threeDays).addClass("bold");
    $("#day3Temp").text("Temp: " + response.list[21].main.temp.toFixed(0) + " F");
    $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
    $("#day4").text(fourDays).addClass("bold");
    $("#day4Temp").text("Temp: " + response.list[29].main.temp.toFixed(0) + " F");
    $("#day4Humidity").text("Humidity: " + response.list[29].main.humidity + "%");
    $("#day5").text(fiveDays).addClass("bold");
    $("#day5Temp").text("Temp: " + response.list[37].main.temp.toFixed(0) + " F");
    $("#day5Humidity").text("Humidity: " + response.list[37].main.humidity + "%");
  });
});
