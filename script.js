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
        numberOne = parseInt(displayNumber);
        result.textContent += displayNumber;
        displayNumber = '';
        display.textContent = '';
        }
    else {
        numberTwo = parseInt(displayNumber);
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
    else {
        displayNumber += '0';
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