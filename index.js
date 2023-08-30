const displayFirstValue = document.querySelector(".first-value");
const displayActualValue = document.querySelector(".actual-value");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const display = new Display(displayFirstValue, displayActualValue);

numberButtons.forEach(button=>{
    button.addEventListener("click", ()=> display.addNumber(button.innerHTML))
})

operatorButtons.forEach(button =>{
    button.addEventListener("click", ()=> display.computer(button.value))
})