const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement("section");
            card.id = "card" + [i];
            let h2 = document.createElement("h2");
            let bdate = document.createElement("p");
            let bplace = document.createElement("p");
            let image = document.createElement("img");

            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            card.appendChild(h2);
            bdate.textContent = `Birth Date: ${prophets[i].birthdate}`;
            bplace.textContent = `Birth Place: ${prophets[i].birthplace}`;
            image.setAttribute("src", prophets[i].imageurl);

            document.querySelector("div.cards").appendChild(card);

                document.getElementById("card" + [i]).appendChild(bdate)
                document.getElementById("card" + [i]).appendChild(bplace)
                document.getElementById("card" + [i]).appendChild(image)
        }
    });