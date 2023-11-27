const information_next = document.querySelector("#information_next");

information_next.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  window.location.href = "index.html";
});

const message = document.getElementById("empty_div");
const data = window.localStorage.getItem("data");

const d = JSON.parse(data);

console.log(d);


if (d.waterAvailOk) {
  message.innerHTML = `
      <p>
      In ${d.location}, ${d.country}, the current temperature is ${d.temperature}°C and the
      ideal planting season for ${d.crop} is the ${d.plantingSeason} season, 
      with the crop growth duration being about ${d.cropDuration} months.

      Considering your soil's pH level of ${d.ph}, ensure the soil 
      maintains a pH level between ${d.minPh} and ${d.maxPh} to support the crop throughout its growth cycle.

      Additionally, the forecasted harvest season for this crop is expected to be 
      in the ${d.harvestSeason} season.
      </p>
      `;
} else {
    message.innerHTML = `
       <p> 
       With the availability of water in your area being ${d.waterAvailability}, it would not be 
       advisable to plant ${d.crop} as the expected water availability to plant ${d.crop} should be about ${d.minWaterAvail} to ${d.maxWaterAvail}. 
       If you want to go ahead you might want to consider seeking alternative means of irrigation.
       </p>
   `;
}
