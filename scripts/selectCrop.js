const selectCrop_next = document.querySelector("#selectCrop_next");
const crops = document.getElementsByClassName("crop");

const cropList = document.querySelector("#crops_list")

const cropsArray = Array.from(crops);

const input = document.querySelector("#input");

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toLowerCase() + this.slice(1).replace(/\s/g, '');
  },
  enumerable: false
});

function btn() {
  selectCrop_next.addEventListener("click", (e) => {
    e.preventDefault();
   
    if(input.value === ""){
      return
    }

    else if (input.value){    
    let value = input.value.capitalize()
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


