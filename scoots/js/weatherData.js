const mydate = new Date();
const hoy = mydate.getDay();
const apiKey = "76906579f4efc58a128720f93bf9efd1";

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const forecastAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

fetch(forecastAPI)
 .then((response) => response.json())
 .then((jsObject) => {

    let mylist = jsObject.daily;
    console.log(mylist)
    let forecastDayNumber = hoy;
    let dayBox = 1;

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

    document.getElementById("weatherBottomIcon").src=iconpath;
    document.getElementById("weatherBottomCondition").innerHTML=current_condition;
    document.getElementById("weatherBottomTemp").innerHTML=current_temp;
    document.getElementById("weatherBottomHumidity").innerHTML=current_humidity;

    for (i=0; i < 3; i++){
        
        let time = unixToDate(mylist[i].dt);
        if (time.includes("14:00:00")){
            forecastDayNumber += 1;
            if (forecastDayNumber===7){
                forecastDayNumber = 0
            }
            var iconcode = mylist[i].weather[0].icon;
            var iconpath2 = "https://openweathermap.org/img/w/" + iconcode + ".png";
            document.getElementById(`forecastDay${dayBox}`).innerHTML=weekDays[forecastDayNumber];
            document.getElementById(`max${dayBox}`).innerHTML=mylist[i].temp.day;
            // document.getElementById(`min${dayBox}`).innerHTML=mylist[i].main.temp_min;
            document.getElementById(`forecastIcon${dayBox}`).src = iconpath2;
            dayBox += 1
        }
    }
    
})

function unixToDate(dt){
  
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   
    // Convert timestamp to milliseconds
    var date = new Date(dt*1000);
   
    var year = date.getFullYear();
    var month = months_arr[date.getMonth()];
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
   
    var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return convdataTime    
   }