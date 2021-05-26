const searchAlgoliaPlaces = (event) => {
  const url = "https://places-dsn.algolia.net/1/places/query";

  // console.log(event);
  // console.log(event.currentTarget);
  // console.log(event.currentTarget.value);

  const bodyData = JSON.stringify(
    { query: event.currentTarget.value }
  );

  const options = {
    method: "POST",
    body: bodyData
  };

  console.log(options);

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.hits);
      console.log(data.hits[0]);
      console.log(data.hits[0].locale_names);
      console.log(data.hits[0].locale_names.default);
      console.log(data.hits[0].locale_names.default[0]);
      const cityName = data.hits[0].locale_names.default[0];
      const resultP = document.querySelector('#result');
      resultP.innerText = cityName;
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
