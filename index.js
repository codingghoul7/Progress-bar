const circles =document.querySelectorAll(".circle")
const progressBar =document.querySelector(".indicator")
const buttons =document.querySelectorAll("button")


let currentStep=0;


// update that updates the current step and updates the DOM
const updateState =(e)=>{
//update current step based on the button clicked
currentStep=e.target.id ==="next"? ++currentStep : --currentStep;

//loop through all circles and/remove "active" class based on their index and current step
circles.forEach((circle,index)=>{
    circle.classList[`${index < currentStep? "add": "remove"}`]("active")
});
//update progress bar width based on current step
progressBar.style.width =`${((currentStep -1)/ (circles.length - 1))* 100}%`

}

buttons.forEach(button=>{
    button.addEventListener("click",updateState)
})