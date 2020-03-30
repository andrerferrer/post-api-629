const results = document.getElementById("results");
const form = document.getElementById('search-form');

// POST request to Algolia
const input = document.querySelector("#search-input");

// Realtime refresh it on every keyUp
input.addEventListener("keyup", (event) => {
  const cityName = document.getElementById("search-input").value;

  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {

      results.innerHTML = ""
      const arrayOfCities = data.hits
      arrayOfCities.forEach( (city) => {
        const cityHTML = `
          <li>
            <p>
              ${city.locale_names.default} - ${city.country.default}
            </p>
          </li>
        `
        console.log(city)
        results.insertAdjacentHTML("beforeend", cityHTML); // Look at local_names.default
      });
    });
});





