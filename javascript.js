let operator = '+';
let number1 = 1;
let number2 = 2;
let result = 0;

let registeredNumber = '';   //it allows non-single digits to be registered as ONE SINGLE array item in the performMath array
let performMath = [];
let displayMath = [];

let numberBtns = document.querySelectorAll(".number");

let operatorBtns = document.querySelectorAll(".operator");

let displayText = document.querySelector(".text");
let equalBtn = document.querySelector("#equal");
let clearBtn = document.querySelector("#clr");

let hasEqualsBeenPressed = false;


function calculateFirstTwoNumbers() {
    calculate();
    performMath.splice(0, 3, result);
    displayResultOfFirstTwoNumbers();
};


function displayResultOfFirstTwoNumbers() {
    const lastOperator = displayMath.slice(-1);
    displayMath = [result, lastOperator];
    displayText.textContent = displayMath.join('');
}

function clearPreviousCalculations() {
    performMath = [];
    displayMath = [];
}

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener("click", (e) => {
        registeredNumber = registeredNumber + numberBtn.textContent;
        
        displayMath.push(numberBtn.textContent);
        displayText.textContent = displayMath.join('');
    });
});




operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
        if (registeredNumber) {
            displayMath.push(operatorBtn.textContent);
            displayText.textContent = displayMath.join('');

            performMath.push(registeredNumber);
            registeredNumber = '';
            performMath.push(operatorBtn.textContent);
            hasEqualsBeenPressed = false;
        };
        
        if (performMath.length > 3) {
            calculateFirstTwoNumbers();
            hasEqualsBeenPressed = false;
        };
        if (hasEqualsBeenPressed === true) {  //allows continuous calculations using the result after equals has been pressed
            clearPreviousCalculations();
            performMath.push(result);
            performMath.push(operatorBtn.textContent);
            displayMath.push(result);
            displayMath.push(operatorBtn.textContent);
            displayText.textContent = displayMath.join('');
            hasEqualsBeenPressed = false;
        }
        
        } )
        
    });


equalBtn.addEventListener('click', (e) => {
    if (performMath.length >= 2) {
        if (performMath.length > 3) {
        calculateFirstTwoNumbers();
        };
        if (registeredNumber) {
        performMath.push(registeredNumber);
        registeredNumber = '';
        calculate();
        displayText.textContent = result;
        hasEqualsBeenPressed = true;
        };
    };
    
});



clearBtn.addEventListener("click", (e) => {
    clearPreviousCalculations();
     displayText.textContent = displayMath.join('');
});




function calculate() {
    
    number1 = parseInt(performMath[0]);
    operator = performMath[1];
    number2 = parseInt(performMath[2]);    

    result = operate(number1, operator, number2);
    result = Math.round(result);

    if (operator === "/" && number2 === 0) {
        result = "ERROR"
    }
};




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








