const mydate = new Date();
const hoy = mydate.getDay();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const forecastAPI = `//api.openweathermap.org/data/2.5/forecast?id=${prestonID}&appid=${apiKey}&units=imperial`;

fetch(forecastAPI)
 .then((response) => response.json())
 .then((jsObject) => {
   //Once it comes back, display it to the console.
    console.log(jsObject);

    let mylist = jsObject.list;
    let forecastDayNumber = hoy;
    let dayBox = 1;

    for (i=0; i < mylist.length; i++){
        
        let time = mylist[i].dt_txt;

        if (time.includes("18:00:00")){
            forecastDayNumber += 1;
            if (forecastDayNumber===7){
                forecastDayNumber = 0
            }
            var iconcode = mylist[i].weather[0].icon;
            var iconpath = "https://openweathermap.org/img/w/" + iconcode + ".png";
            console.log(iconpath)
            document.getElementById(`forecastDay${dayBox}`).innerHTML=weekDays[forecastDayNumber];
            document.getElementById(`max${dayBox}`).innerHTML=mylist[i].main.temp_max;
            document.getElementById(`forecastIcon${dayBox}`).src = iconpath;

            dayBox += 1

        }
    }
    // const iconcode = jsObject.weather[0].icon;
    // const iconpath = "//openweathermap.org/img/w/" +iconcode+ ".png";

    // document.getElementById("weather_icon").src= iconpath;
 })
