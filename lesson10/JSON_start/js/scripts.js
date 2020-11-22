//ADD the key and change units to imperial
const apiKey = "76906579f4efc58a128720f93bf9efd1";
const prestonID = "5604473";

const apiURL = `//api.openweathermap.org/data/2.5/weather?id=${prestonID}&appid=${apiKey}&units=imperial`;

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Once it comes back, display it to the console.
    console.log(jsObject);
    
    document.getElementById("place").innerHTML=jsObject.name;
    document.getElementById("currentTemp").innerHTML=jsObject.main.temp;
    document.getElementById("windSpeed").innerHTML=jsObject.wind.speed;

    const iconcode = jsObject.weather[0].icon;
    const iconpath = "//openweathermap.org/img/w/" +iconcode+ ".png";

    document.getElementById("weather_icon").src= iconpath;
 }); //end of "then" fat arrow function

 ///////////// 5 Days Forecast /////////////////////

//  const mydate = new Date();
//  const today = mydate.getDay();
//  console.log(today);
//  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//  const forecastAPI = `//api.openweathermap.org/data/2.5/forecast?id=${prestonID}&appid=${apiKey}&units=imperial`;

//  fetch(forecastAPI)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     //Once it comes back, display it to the console.
//     console.log(jsObject);

//   })


