let display = document.getElementById('display');
let resultDisplay = document.getElementById('result');
let currentInput = '';
let operator = '';
let previousInput = '';
let resultCalculated = false;
let memory = 0;

function appendNumber(number) {
    if (resultCalculated) {
        currentInput = number;
        resultCalculated = false;
        resultDisplay.innerText = '';  // Clear result display when a number is entered
    } else {
        currentInput += number;
    }
    updateDisplay();
    memory = 0;  // Clear memory when a number is appended
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    } else {
        memory = parseFloat(currentInput);  // Store in memory when an operation is set
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    resultDisplay.innerText = `${result}`;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    resultCalculated = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '';
    resultDisplay.innerText = '';
    resultCalculated = false;
    memory = 0;
}

function updateDisplay() {
    if (operator) {
        display.innerText = `${previousInput} ${operator} ${currentInput}`;
    } else {
        display.innerText = currentInput;
    }
}

function memoryClear() {
    memory = 0;
    resultDisplay.innerText = 'Memory Cleared';
}
