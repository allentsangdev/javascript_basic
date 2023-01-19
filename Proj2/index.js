let num1 = document.getElementById("num1-el").value
let num2 = document.getElementById("num1-el").value
let ansDisplay = document.getElementById("sum-el")

function updateValue() {
    num1 = document.getElementById("num1-el").value;
    num2 = document.getElementById("num2-el").value;
    console.log(num1)
    console.log(num2)
    num1 = parseInt(num1)
    num2 = parseInt(num2)
}
 
function add() {
    ansDisplay.textContent = "Sum: ";
    ans = num1 + num2
    ansDisplay.textContent += ans;
}

function subtract() {
    ansDisplay.textContent = "Sum: ";
    ans = num1 - num2
    ansDisplay.textContent += ans;
}

function divide() {
    ansDisplay.textContent = "Sum: ";
    ans = num1 / num2
    ansDisplay.textContent += ans;
}

function multiply() {
    ansDisplay.textContent = "Sum: ";
    ans = num1 * num2
    ansDisplay.textContent += ans;   
}