let operator = '+';
let number1 = 1;
let number2 = 2;
let result = 0;



let performMath = [];

let preRegisteredNumber = '';
let numberBtns = document.querySelectorAll(".number");

let operatorBtns = document.querySelectorAll(".operator");

let displayText = document.querySelector(".text");
let btns = document.querySelectorAll("button");
let equalBtn = document.querySelector("#equal");



function checkArrLength() {
    if (performMath.length > 3) {
        calculate();
        performMath.splice(0, 3, result);
        
    };
};



numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener("click", (e) => {
        preRegisteredNumber = preRegisteredNumber + numberBtn.textContent;
    });
});


operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
        checkArrLength();
        
        performMath.push(preRegisteredNumber);
        preRegisteredNumber = '';
        performMath.push(operatorBtn.textContent);
        
        
        console.log(performMath);
        

        //displayText.textContent = performMath.join('');
       
            
        } )
        
    });




equalBtn.addEventListener('click', (e) => {
    checkArrLength();
    performMath.push(preRegisteredNumber);
    preRegisteredNumber = '';
    calculate();
    console.log(result);
    console.log(performMath);
});









function calculate() {
    
    number1 = parseInt(performMath[0]);
    operator = performMath[1];
    number2 = parseInt(performMath[2]);    

    result = operate(number1, operator, number2);
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








