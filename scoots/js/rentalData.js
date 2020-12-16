const rentalData = `https://jesuisnicolas.github.io/scoots/data/rental-prices.json`;

fetch(rentalData)
 .then((response) => response.json())
 .then((jsObject) => {
    console.log(jsObject);

    //Honda Metro
    document.getElementById("rent1-1").innerHTML = jsObject.rentals[0].reservation.halfDay;
    document.getElementById("rent1-2").innerHTML = jsObject.rentals[0].reservation.fullDay;
    document.getElementById("rent1-3").innerHTML = jsObject.rentals[0].walkIn.halfDay;
    document.getElementById("rent1-4").innerHTML = jsObject.rentals[0].walkIn.fullDay;

    //Honda Dio
    document.getElementById("rent2-1").innerHTML = jsObject.rentals[1].reservation.halfDay;
    document.getElementById("rent2-2").innerHTML = jsObject.rentals[1].reservation.fullDay;
    document.getElementById("rent2-3").innerHTML = jsObject.rentals[1].walkIn.halfDay;
    document.getElementById("rent2-4").innerHTML = jsObject.rentals[1].walkIn.fullDay;

    //Honda PCX 150
    document.getElementById("rent3-1").innerHTML = jsObject.rentals[2].reservation.halfDay;
    document.getElementById("rent3-2").innerHTML = jsObject.rentals[2].reservation.fullDay;
    document.getElementById("rent3-3").innerHTML = jsObject.rentals[2].walkIn.halfDay;
    document.getElementById("rent3-4").innerHTML = jsObject.rentals[2].walkIn.fullDay;

    //Honda Pioneer ATV
    document.getElementById("rent4-1").innerHTML = jsObject.rentals[3].reservation.halfDay;
    document.getElementById("rent4-2").innerHTML = jsObject.rentals[3].reservation.fullDay;
    document.getElementById("rent4-3").innerHTML = jsObject.rentals[3].walkIn.halfDay;
    document.getElementById("rent4-4").innerHTML = jsObject.rentals[3].walkIn.fullDay;

    //Jeep Wrangler 4 Door
    document.getElementById("rent5-1").innerHTML = jsObject.rentals[4].reservation.halfDay;
    document.getElementById("rent5-2").innerHTML = jsObject.rentals[4].reservation.fullDay;
    document.getElementById("rent5-3").innerHTML = jsObject.rentals[4].walkIn.halfDay;
    document.getElementById("rent5-4").innerHTML = jsObject.rentals[4].walkIn.fullDay;

    //Jeep Wrangler 2 Door
    document.getElementById("rent6-1").innerHTML = jsObject.rentals[5].reservation.halfDay;
    document.getElementById("rent6-2").innerHTML = jsObject.rentals[5].reservation.fullDay;
    document.getElementById("rent6-3").innerHTML = jsObject.rentals[5].walkIn.halfDay;
    document.getElementById("rent6-4").innerHTML = jsObject.rentals[5].walkIn.fullDay;

 }
 )