const api = {
  key: "42292af317b483d428713b720a52b7a3",
  base: "https://api.openweathermap.org/data/2.5/",
};

const search = document.querySelector(".search");
const selectCountry_next = document.querySelector("#selectCountry_next");

function click() {
  selectCountry_next.addEventListener("click", getInput);

  function getInput(event) {
    event.preventDefault();

    if (search.value === "") {
      return;
    } else if (event.type == "click") {
      getData(search.value);
      // window.location.href = "information.html"
    }
  }
}
click();

function getData() {
  fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then((response) => {
      return response.json();
    })
    .then(displayData)
    .catch((err) => {
      console.log("error" + err);
    });
}

function displayData(response) {
  const errorMsg = document.getElementById("errMsg")
  if (response.cod == "404") {
    console.log("enter valid city");
    errorMsg.style.display = "block"
    search.value = "";
  } else {
    const cropInput = window.localStorage.getItem("myObj");
    const location = response.name;
    const country = response.sys.country;
    const temp = response.main.temp;
    const humidity = response.main.humidity;
    const weather = response.weather[0].description;

    if (
      country == "NG" ||
      country == "ZA" ||
      country == "KE" ||
      country == "SD"
    ) {
      const dataObj = {
        selectedCrop: cropInput,
        location: location,
        country: country,
        temperature: temp,
        humidity: humidity,
        weather: weather,
      };

      console.log(dataObj);

      fetch("https://crop-pro-68730434122c.herokuapp.com/predict", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataObj),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json)  
        const data = json.data
        const dataSerialized = JSON.stringify(data)

        localStorage.setItem("data", dataSerialized)
        console.log(dataSerialized)
        })
        .catch((err) => console.log("err " + err));
    } else {
      errorMsg.style.display = "block"
    }
  }
}
