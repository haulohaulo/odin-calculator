let operator = '+';
let number1 = 1;
let number2 = 2;

let performMath = [];

number1 = performMath[0];
operator = performMath[1];
number2 = performMath[2];

let displayText = document.querySelector(".text");
let btns = document.querySelectorAll("button");


btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        performMath.push(btn.textContent);
        displayText.textContent = performMath.join(' ');
        
        
        
    })
})




function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};


function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};



function operate(operator, number1, number2) {
    if (operator = '+') {
        return add(number1, number2);
    }
}














console.log(operate(operator, number1, number2))