const selectCrop_next = document.querySelector("#selectCrop_next");
const crops = document.getElementsByClassName("crop");

const cropsArray = Array.from(crops);

const input = document.querySelector("#input");

function btn() {
  selectCrop_next.addEventListener("click", (e) => {
    e.preventDefault();
    const value = input.value 

    // let obj_serialized = JSON.stringify(value)

    localStorage.setItem("myObj", value)
    console.log(localStorage)

    window.location.href = "selectCountry.html";
  });
}
btn()

for (let i = 0; i < cropsArray.length; i++) {
  const item = cropsArray[i];
  item.addEventListener("click", () => {
    input.value = item.innerText;
  });
}
