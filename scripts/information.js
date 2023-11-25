const information_next = document.querySelector("#information_next")

information_next.addEventListener('click',(e) =>{
   e.preventDefault()
   console.log("click")
   window.location.href= "index.html"
})

const message = document.getElementById("empty_div")
const data = window.localStorage.getItem("data")
const d = JSON.parse(data)
console.log(d)

message.innerHTML = `
<p>
For cultivating ${d.crop} in [location], the ideal planting season is [season], 
with an anticipated harvest during [harvest season].

Ensure the soil maintains a pH level of ${d.ph} for optimal growth.

Considering [locationS]'s temperature range, ensure it stays at ${d.temperature}°C to support the ${d.crop} crop throughout its growth cycle.
</p>
`




