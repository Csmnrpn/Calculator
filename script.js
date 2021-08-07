//----------------------------------------------------------------------
// To Do
// -make backspace work
// -make it pretty
// -refactor code 

//----------------------------------------------------------------------
// DOM Selection
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const allClear = document.querySelector('.allClear');
const display = document.querySelector('.display');
const addition = document.querySelector('.addition');
const substraction = document.querySelector('.substraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const percent = document.querySelector('.percent');
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

function test() {
    console.log(`Display Number: ${displayNumber} \n
    Number one: ${numberOne} \n
    Number Two: ${numberTwo} \n
    Current Operation: ${currentOperation} \n
    Operate if True: ${operateTrue}`);
}

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
    if (displayNumber === '') {
        displayNumber += '0';
        display.textContent = '0';
    }
}

//----------------------------------------------------------------------
// Events and onClick functions

one.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '1';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
});

two.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '2';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

three.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '3';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

four.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '4';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

five.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '5';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

six.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '6';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

seven.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '7';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

eight.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '8';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

nine.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else {
        displayNumber += '9';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

zero.addEventListener('click', function(){
    if (equalIsTrue === true) {
        console.log('Number press. Must press operator');
    }
    else if (currentOperation === '/' && display.textContent === '') {
        console.log("Don't divide by zero, please");
    }
    else {
        displayNumber += '0';
        toDisplay(displayNumber);
        doubleOperand = false;
    }
})

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

addition.addEventListener('click', function(){         
    if (doubleOperand === true) {
        return console.log('Must Input Number');
    }
    else {
        test();
        transformNumber();
        if (divisionByZero()) {
            clearEverything();
            return display.textContent = "You tried do divide by zero. Don't.";
        }
        checkForOperation ();
        if (operateTrue === true) {
            numberOne = operate(currentOperation, numberOne, numberTwo);
            numberTwo = null;
            display.textContent = `${numberOne}`;
            operateTrue = false;
        }
        currentOperation = '+';
        result.textContent += '+';
        
        console.log('After: \n');
        test();
        doubleOperand = true;
        equalIsTrue = false;
 }
})
    

substraction.addEventListener('click', function(){   
    if (doubleOperand === true) {
        return console.log('Must Input Number');
    }
    else {
        test();
        transformNumber();
        if (divisionByZero()) {
            clearEverything();
            return display.textContent = "You tried do divide by zero. Don't.";
        }
        checkForOperation ();
        if (operateTrue === true) {
            numberOne = operate(currentOperation, numberOne, numberTwo);
            numberTwo = null;
            display.textContent = `${numberOne}`;
            operateTrue = false;
        }
        currentOperation = '-';
        result.textContent += '-';
        
        console.log('After: \n');
        test();
        doubleOperand = true;
        equalIsTrue = false;
 }
})

multiplication.addEventListener('click', function(){    
    if (doubleOperand === true) {
        return console.log('Must Input Number');
    }
    else {
        test();
        transformNumber();
        if (divisionByZero()) {
            clearEverything();
            return display.textContent = "You tried do divide by zero. Don't.";
        }
        checkForOperation ();
        if (operateTrue === true) {
            numberOne = operate(currentOperation, numberOne, numberTwo);
            numberTwo = null;
            display.textContent = `${numberOne}`;
            operateTrue = false;
        }
        currentOperation = '*';
        result.textContent += '*';
        
        console.log('After: \n');
        test();
        doubleOperand = true;
        equalIsTrue = false;
 }
})

division.addEventListener('click', function(){ 
    if (doubleOperand === true) {
        return console.log('Must Input Number');
    }
    else {
        test();
        transformNumber();
        if (divisionByZero()) {
            clearEverything();
            return display.textContent = "You tried do divide by zero. Don't.";
        }
        checkForOperation ();
        if (operateTrue === true) {
            numberOne = operate(currentOperation, numberOne, numberTwo);
            numberTwo = null;
            display.textContent = `${numberOne}`;
            operateTrue = false;
        }
        currentOperation = '/';
        result.textContent += '/';
        
        console.log('After: \n');
        test();
        doubleOperand = true;
        equalIsTrue = false;
 }
})

percent.addEventListener('click', function(){ 
    if (doubleOperand === true) {
        return console.log('Must Input Number');
    }
    else {
        test();
        transformNumber();
        if (divisionByZero()) {
            clearEverything();
            return display.textContent = "You tried do divide by zero. Don't.";
        }
        checkForOperation ();
        if (operateTrue === true) {
            numberOne = operate(currentOperation, numberOne, numberTwo);
            numberTwo = null;
            display.textContent = `${numberOne}`;
            operateTrue = false;
        }
        currentOperation = '%';
        result.textContent += '%';
        
        console.log('After: \n');
        test();
        doubleOperand = true;
        equalIsTrue = false;
 }
})

equals.addEventListener('click', function() {
    if (doubleOperand === true) {
        return console.log('Must Input Number');
    }
    else if (equalIsTrue === true) {
        return console.log('Must Input Sign');
    }
    else {
        test();
        transformNumber();
        if (divisionByZero()) {
            clearEverything();
            return display.textContent = "You tried do divide by zero. Don't.";
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
        console.log('After Equal:');
        test();
    }
});

allClear.addEventListener('click', function() {
    clearEverything();
    test();
});

clear.addEventListener('click', function(){ 
    clearLastInput();
    test();
})