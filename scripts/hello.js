const hello_next = document.querySelector("#hello_next")

hello_next.addEventListener('click',(e) =>{
   e.preventDefault()
   console.log("click")
   window.location.href= "selectCrop.html"
})