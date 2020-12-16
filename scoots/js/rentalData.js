const rentalData = `https://jesuisnicolas.github.io/scoots/data/rental-prices.json`;

fetch(rentalData)
 .then((response) => response.json())
 .then((jsObject) => {
     console.log(jsObject);
 }
 )