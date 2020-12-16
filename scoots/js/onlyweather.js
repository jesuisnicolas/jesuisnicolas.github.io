const apiKey = "76906579f4efc58a128720f93bf9efd1";
const forecastAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

fetch(forecastAPI)
 .then((response) => response.json())
 .then((jsObject) => {

    let mylist = jsObject.daily;
    console.log(mylist)

    //Current Weather //
    let current_icon = jsObject.current.weather[0].icon;
    let current_condition = jsObject.current.weather[0].description;
    current_condition = current_condition[0].charAt(0).toUpperCase()+current_condition.slice(1)
    let current_temp = jsObject.current.temp;
    let current_humidity = jsObject.current.humidity;
    const iconpath = `https://openweathermap.org/img/w/${current_icon}.png`;
    // console.log(current_icon, current_condition, current_humidity, current_temp)
    document.getElementById("weatherTopIcon").src=iconpath;
    document.getElementById("weatherTopCondition").innerHTML=current_condition;
    document.getElementById("weatherTopTemp").innerHTML=current_temp;
    document.getElementById("weatherTopHumidity").innerHTML=current_humidity;
 })