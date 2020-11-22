
const apiKey = "76906579f4efc58a128720f93bf9efd1";
const prestonID = "5604473"

const apiURL = `//api.openweathermap.org/data/2.5/weather?id=${prestonID}&appid=${apiKey}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });