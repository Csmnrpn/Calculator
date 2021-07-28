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

let currentOperation = '';
let displayNumber = '';
let resultNumber = 0;
let ifEquals = 0;
const displayArrayToOperate = [];

//----------------------------------------------------------------------
// Calculator Button Functions

function toDisplay(number) {
    display.textContent += number;
}

function clearDisplay() {
    display.textContent = '';
    result.textContent = '';
    displayNumber = '';
    resultNumber = 0;
    displayArrayToOperate.splice(0, displayArrayToOperate.length);
}

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

/*
function doPercent(first) {
    return first / 100;
}
*/

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


function checkIfOperate (operator){
    // Checks array length, if two numbers inputed it Operates on them
    if (displayArrayToOperate.length === 2) {
        resultNumber = operate(operator, displayArrayToOperate[0], displayArrayToOperate[1]);
        // Populate the array with the result of operation
        displayArrayToOperate.splice(0, 2);
        displayArrayToOperate.push(resultNumber);
        result.textContent = resultNumber;
    }
}

function checkForDoubleOperator () {
    if (display.textContent === '' || 
        display.textContent.charAt(display.textContent.length - 1) === ' ')
        {
        return true;
    }
    else return false; 
}

//----------------------------------------------------------------------
// Events and onClick functions

allClear.addEventListener('click', function(){
    clearDisplay();
})

one.addEventListener('click', function(){
    toDisplay('1');
    displayNumber += '1';
})

two.addEventListener('click', function(){
    toDisplay('2');
    displayNumber += '2';
})

three.addEventListener('click', function(){
    toDisplay('3');
    displayNumber += '3';
})

four.addEventListener('click', function(){
    toDisplay('4');
    displayNumber += '4';
})

five.addEventListener('click', function(){
    toDisplay('5');
    displayNumber += '5';
})

six.addEventListener('click', function(){
    toDisplay('6');
    displayNumber += '6';
})

seven.addEventListener('click', function(){
    toDisplay('7');
    displayNumber += '7';
})

eight.addEventListener('click', function(){
    toDisplay('8');
    displayNumber += '8';
})

nine.addEventListener('click', function(){
    toDisplay('9');
    displayNumber += '9';
})

zero.addEventListener('click', function(){
    toDisplay('0');
    displayNumber += '0';
})

addition.addEventListener('click', function(){     
    if (checkForDoubleOperator()) {
        console.log('sorry boss');

    } 
    else {   
        if(ifEquals === 1) {
            currentOperation = '+';
            ifEquals = 0;
        }
        else displayArrayToOperate.push(parseInt(displayNumber));
        display.textContent += ' + ';            
        displayNumber = '';
        checkIfOperate(currentOperation);
        currentOperation = '+';
    }
})

substraction.addEventListener('click', function(){   
    if (checkForDoubleOperator()) {
        console.log('sorry boss');

    } 
    else {
        display.textContent += ' - ';
        if(ifEquals === 1) {
            currentOperation = '-';
            ifEquals = 0;
        }    
        else displayArrayToOperate.push(parseInt(displayNumber));    
        displayNumber = '';
        checkIfOperate(currentOperation);
        currentOperation = '-';
    }
})

multiplication.addEventListener('click', function(){    
    if (checkForDoubleOperator()) {
        console.log('sorry boss');

    } 
    else {
        display.textContent += ' x '; 
        if(ifEquals === 1) {
            currentOperation = '*';
            ifEquals = 0;
        }   
        else displayArrayToOperate.push(parseInt(displayNumber));    
        displayNumber = '';
        checkIfOperate(currentOperation);
        currentOperation = '*';
    }
})

division.addEventListener('click', function(){ 
    if (checkForDoubleOperator()) {
        console.log('sorry boss');

    } 
    else {
        display.textContent += ' / ';    
        if(ifEquals === 1) {
            currentOperation = '/';
            ifEquals = 0;
        }
        else displayArrayToOperate.push(parseInt(displayNumber));    
        displayNumber = '';
        checkIfOperate(currentOperation);
        currentOperation = '/';
    }
})

equals.addEventListener('click', function() {
        ifEquals = 1;
        display.textContent = '';
        displayArrayToOperate.push(parseInt(displayNumber));
        displayNumber = '';
        checkIfOperate(currentOperation);
        currentOperation = '';
        display.textContent = result.textContent;
    
})