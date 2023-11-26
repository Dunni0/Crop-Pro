const information_next = document.querySelector("#information_next")

information_next.addEventListener('click',(e) =>{
   e.preventDefault()
   console.log("click")
   window.location.href= "index.html"
})

const message = document.getElementById("empty_div")
const data = window.localStorage.getItem("data")

const d = JSON.parse(data)

message.innerHTML = `
<p>
In ${d.location}, ${d.country}, the current temperature is ${d.temperature}°C and the
ideal planting season for ${d.crop} is the ${d.plantingSeason} season, 
with the crop growth duration being about ${d.cropDuration} months.

Considering your location's pH level of ${d.ph}, ensure the soil 
maintains a pH level between 6.5 and 7 to support the crop throughout its growth cycle.

Additionally, the forecasted harvest season for this crop is expected to be 
in the ${d.harvestSeason} season.
</p>
`




 