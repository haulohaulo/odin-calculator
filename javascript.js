let operator = '+';
let number1 = 1;
let number2 = 2;

let performMath = [];



let displayText = document.querySelector(".text");
let btns = document.querySelectorAll("button");
let equalBtn = document.querySelector("#equal");


btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        performMath.push(btn.textContent);
        displayText.textContent = performMath.join(' ');
        console.log(performMath);
        
        
        
    })
})


equalBtn.addEventListener('click', (e) => {
    number1 = parseInt(performMath[0]);
    operator = performMath[1];
    number2 = parseInt(performMath[2]);
    
    displayText.textContent = operate(number1, operator, number2);
});

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



function operate(number1, operator, number2) {
    if (operator == '+') {
        return add(number1, number2);
    };
    if (operator == '-') {
        return subtract(number1, number2);
    };
    if (operator == 'x') {
        return multiply(number1, number2);
    };
    if (operator == '/') {
        return divide(number1, number2);
    };
};












