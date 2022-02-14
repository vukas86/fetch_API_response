// const key: 827db65285a64a1fa7bc64e67bc55bd1;

const btnSearch = document.querySelector(".button-42");
const counContainer = document.querySelector(".container");

const renderCountry = function (data) {
  console.log(data);
  const insertName = `<p>Random country is: <span>${data.country_name}</span></p>`;
  counContainer.insertAdjacentHTML("afterbegin", insertName);
};

const errorMsg = function (msg) {
  counContainer.insertAdjacentText("afterbegin", msg);
};

btnSearch.addEventListener("click", function () {
  let ip = `${Math.floor(Math.random() * 255) + 1}.${
    Math.floor(Math.random() * 255) + 1
  }.${Math.floor(Math.random() * 255) + 1}.${
    Math.floor(Math.random() * 255) + 1
  }`;

  fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=827db65285a64a1fa7bc64e67bc55bd1&ip=${ip}`
  )
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`IP adress is not correct! ${res.status}`);
      }
      return res.json();
    })
    .then((data) => renderCountry(data))
    .catch((err) => {
      console.error(`There was an error 🙍 : ${err}`);
      errorMsg(`Something went wrong 🙍: ${err.message}`);
    });
});
