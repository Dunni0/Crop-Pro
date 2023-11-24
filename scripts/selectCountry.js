const api = {
   key: "42292af317b483d428713b720a52b7a3",
   base: "https://api.openweathermap.org/data/2.5/",
}

const search = document.querySelector(".search")
const selectCountry_next = document.querySelector("#selectCountry_next")


function click(){
   
   selectCountry_next.addEventListener("click", getInput);

   function getInput(event){
       event.preventDefault();
       if(event.type == "click"){
         getData(search.value);
         window.location.href = "information.html"
       }
   }

   document.addEventListener("keypress",function(){
      if(event.charCode==13|| event.which==13){
         event.preventDefault();
         getData(search.value);
         window.location.href = "information.html"
       }
   })

   
} click();


function getData(){
   fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
   .then(response => {
       return response.json();
   }) .then(displayData)
   .catch( err => {
      console.log("error" + err)
   })
}

function displayData(response){
   const cropInput = window.localStorage.getItem("myObj")
   const location =  response.name + ", " + response.sys.country 
   const temp = response.main.temp + "°C"
   const humidity = response.main.humidity + "%"
   const weather = response.weather[0].description

   const dataObj ={
      selectedCrop: cropInput,
      location: location,
      temperature: temp,
      humidity: humidity,
      weather: weather
   }

   console.log(dataObj)

   // fetch("/data", {
   //    method: "POST",
   //    headers: {
   //       "Content-type": "application/json"
   //    },
   //    body: JSON.stringify(dataObj)
   // })
 
}





