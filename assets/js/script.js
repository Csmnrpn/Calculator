//----------------------------------------------------------------------
// To Do
// -keyboard support

//----------------------------------------------------------------------
// DOM Selection

const operatorButton = document.querySelectorAll('.operatorButton');
const numbers = document.querySelectorAll('.numbers');
const allClear = document.querySelector('.allClear');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');
const result = document.querySelector('.result');
const dot = document.querySelector('.dot');
const clear = document.querySelector('.clear');

//----------------------------------------------------------------------
// Variables

let displayNumber = '';
let numberOne = null;
let numberTwo = null;
let currentOperation = '';
let operateTrue = false;
let doubleOperand = true;
let equalIsTrue = false;

//----------------------------------------------------------------------
// Calculator Logic

function add(first, second) {
    return first + second;
};

function substract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function findPercentage(first, second) {
    return first * (second / 100);
}

function operate(operator, first, second) {
    if (operator === '+'){
        return add(first, second);
    }
    else if (operator === '-'){
        return substract(first, second);
    }
    else if (operator === '*'){
        return multiply(first, second);
    }
    else if (operator === '/'){
        return divide(first, second);
    }
    else if (operator === '%'){
        return findPercentage(first, second);
    }
    else return 'Operator is not recognized';
}

//----------------------------------------------------------------------
// Helper Functions

/*
function test() {
    console.log(`Display Number: ${displayNumber} \n
    Number one: ${numberOne} \n
    Number Two: ${numberTwo} \n
    Current Operation: ${currentOperation} \n
    Operate if True: ${operateTrue}`);
}
*/

function toDisplay(number) {
    display.textContent = number;
}

function transformNumber() {
    if (numberOne === null) {
        numberOne = parseFloat(displayNumber);
        result.textContent += displayNumber;
        displayNumber = '';
        display.textContent = '';
        }
    else {
        numberTwo = parseFloat(displayNumber);
        result.textContent += displayNumber;
        displayNumber = '';
        display.textContent = '';
    }
}

function checkForOperation () {
    if (numberOne !== null && numberTwo !== null && currentOperation !== ''){
        return operateTrue = true;
    }
}

function clearEverything () {
    displayNumber = '';
    numberOne = null;
    numberTwo = null;
    currentOperation = '';
    operateTrue = false;
    doubleOperand = true;
    equalIsTrue = false;
    display.textContent = '';
    result.textContent = '';
}

function divisionByZero () {
    if (currentOperation === '/' && numberTwo === 0){
        return true;
    }
}

function clearLastInput () {
    display.textContent = display.textContent.slice(0, -1);
    displayNumber = displayNumber.slice(0, -1);
    if (display.textContent === '') {
        displayNumber = '0';
        display.textContent = '0';
    }
}

//----------------------------------------------------------------------
// Events and onClick functions

function addNumbers () {
    numbers.forEach(number => {
        number.addEventListener ('click', function(){
            if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += number.textContent;
        toDisplay(displayNumber);
        doubleOperand = false;
    }
        })
    })
}
addNumbers();

dot.addEventListener('click', function(){    
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else if (display.textContent.indexOf('.') != -1) {
        console.log('You can only have one dot, sorry!');
    }
    else if (display.textContent === '') {
        displayNumber += '0.';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
    else {
        displayNumber += '.';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

function addOperators() {
    operatorButton.forEach(operator => {
        operator.addEventListener('click', function(){         
            if (doubleOperand === true) {
                return console.log('Must Input Number');
            }
            else {
                
                transformNumber();
                if (divisionByZero()) {
                    clearEverything();
                    return display.textContent = "Zero Division Bad!";
                }
                checkForOperation ();
                if (operateTrue === true) {
                    numberOne = operate(currentOperation, numberOne, numberTwo);
                    numberTwo = null;
                    display.textContent = `${numberOne}`;
                    operateTrue = false;
                }
                currentOperation = operator.textContent;
                result.textContent += operator.textContent;                    
                doubleOperand = true;
                equalIsTrue = false;
        }
        })
    })
}
addOperators();

equals.addEventListener('click', function() {
    if (doubleOperand === true) {
        return console.log('Must Input Number');
    }
    else if (equalIsTrue === true) {
        return console.log('Must Input Sign');
    }
    else {
        
        transformNumber();
        if (divisionByZero()) {
            clearEverything();
            return display.textContent = "Zero Division Bad";
        }
        checkForOperation ();
        if (operateTrue === true) {
            numberOne = Math.round(operate(currentOperation, numberOne, numberTwo) * 10000) / 10000;
            numberTwo = null;
            display.textContent = `${numberOne}`;
            operateTrue = false;
        }
        currentOperation = '';
        equalIsTrue = true;
        result.textContent = `${numberOne}`;       
    }
});

allClear.addEventListener('click', function() {
    clearEverything();
    
});

clear.addEventListener('click', function(){ 
    clearLastInput();
    
})