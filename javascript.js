let operator = '+';
let number1 = 1;
let number2 = 2;
let result = 0;

let round = 0;

let performMath = [];

let preRegisteredNumber = '';
let numberBtns = document.querySelectorAll(".number");

let operatorBtns = document.querySelectorAll(".operator");

let displayText = document.querySelector(".text");
let btns = document.querySelectorAll("button");
let equalBtn = document.querySelector("#equal");


numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener("click", (e) => {
        preRegisteredNumber = preRegisteredNumber + numberBtn.textContent;
        
        
        
    });
});


operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
        if (round === 0) {
            performMath.push(preRegisteredNumber);
            performMath.push(operatorBtn.textContent);
            preRegisteredNumber = '';

            displayText.textContent = performMath.join('');

            console.log(performMath);
        } else if (round > 0) {
            performMath.push(operatorBtn.textContent);
            preRegisteredNumber = '';

            displayText.textContent = performMath.join('');

            console.log(performMath);
        }
        
    });
});




equalBtn.addEventListener('click', (e) => {
    performMath.push(preRegisteredNumber);
    
    number1 = parseInt(performMath[0]);
    operator = performMath[1];
    number2 = parseInt(performMath[2]);

    console.log(performMath);    
    
    result = operate(number1, operator, number2);
    displayText.textContent = result;
    performMath = [result];

    round++;
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








