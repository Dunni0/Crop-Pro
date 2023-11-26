const selectCrop_next = document.querySelector("#selectCrop_next");
const crops = document.getElementsByClassName("crop");

const cropList = document.querySelector("#crops_list")

const cropsArray = Array.from(crops);

const input = document.querySelector("#input");

Object.defineProperty(String.prototype, 'lowercase', {
  value: function() {
    return this.toLowerCase().replace(/\s/g, '');
  },
  enumerable: false
});

function btn() {

  const crops = ["rice", "chickpea", "pigeonpeas", "watermelon", 
  "maize", "kidneybeans", "mothbeans", "cotton", "lentil",
  "blackgram", "jute", "mungbean", "muskmelon"]

  selectCrop_next.addEventListener("click", (e) => {
    e.preventDefault();

    if (input.value){    
    let value = input.value.lowercase()

    if(crops.indexOf(value) < 0){
        const errorMsg = document.getElementById("errMsg")
        errorMsg.style.display = "block"
        return;
    }
    localStorage.setItem("myObj", value)
    console.log(localStorage)

    window.location.href = "selectCountry.html";

    }

  });
}
btn()

for (let i = 0; i < cropsArray.length; i++) {

  const item = cropsArray[i];

  item.addEventListener("click", () => {

    let el = cropsArray[0]

    while (el){
      if(el.tagName === "P"){
        el.classList.remove("toggle")
      }
      el = el.nextSibling
    }
 
    item.classList.add("toggle")

    input.value = item.innerText;
  });

}


