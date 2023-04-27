const darkButton = document.getElementById("dark-btn")
  const bodyTag = document.getElementsByTagName("body")
  const buttons = document.getElementsByTagName("button")
  console.log(buttons[1])
  
  darkButton.addEventListener("click", function(event){
    
    bodyTag[0].classList.remove("light");
    bodyTag[0].classList.add("dark");
  })
  const lightButton = document.getElementById("light-btn")
  lightButton.addEventListener("click", function(event){
    bodyTag[0].classList.remove("dark")
    bodyTag[0].classList.add("light")
  })