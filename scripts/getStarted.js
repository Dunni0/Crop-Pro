const nextBtn = document.querySelector("#next")

nextBtn.addEventListener('click',(e) =>{
   e.preventDefault()
   console.log("click")
   window.location.href= "hello.html"
})

