const api = {
  key: "42292af317b483d428713b720a52b7a3",
  base: "https://api.openweathermap.org/data/2.5/",
};

const search = document.querySelector(".search");
const soilPh = document.querySelector(".soilPh")
const waterAvail = document.querySelector(".waterAvail")


const selectCountry_next = document.querySelector("#selectCountry_next");

function click() {
  selectCountry_next.addEventListener("click", getInput);

  async function getInput(event) {
    event.preventDefault();

    const toNumSoilPh = Number(soilPh.value)
    const toNumWaterAvail = Number(waterAvail.value)

    if (search.value === "" || soilPh.value === "" || waterAvail.value === "" || toNumSoilPh > 14 || toNumWaterAvail > 300) {
    const errorMsg = document.getElementById("errMsg")

      errorMsg.style.display = "block"
      return;
    } else if (event.type == "click") {
      await getData(search.value);
    }
  }
}
click();

async function getData() {
  await fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then((response) => {
      return response.json();
    })
    .then((res) => displayData(res))
    .catch((err) => {
      console.log("error" + err);
    });
}

async function displayData(response) {
  const errorMsg = document.getElementById("errMsg")
  if (response.cod == "404") {
    console.log("enter valid city");
    errorMsg.style.display = "block"
    search.value = "";
    // console.log("errors")
    return
  } 

  else {
    const cropInput = window.localStorage.getItem("myObj");
    const location = response.name;
    const country = response.sys.country;
    const temp = response.main.temp;
    const humidity = response.main.humidity;
    const weather = response.weather[0].description;

    const toNumSoilPh = Number(soilPh.value)
    const toNumWaterAvail = Number(waterAvail.value)


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
        ph: toNumSoilPh,
        waterAvailability: toNumWaterAvail
      };

      console.log(dataObj);

      await fetch("https://crop-pro-68730434122c.herokuapp.com/predict", {
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
        .then(() =>{
        window.location.href = "information.html"

        })
        .catch((err) => console.log("err " + err));
    } 
    
  }
}
