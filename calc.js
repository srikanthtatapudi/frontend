// script.js

// Get display element
const display = document.getElementById('display');

// Function to append a number to the display
function appendNumber(number) {
    display.innerText += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    // Prevent adding operators consecutively
    const lastChar = display.innerText.slice(-1);
    if (!isNaN(lastChar) || lastChar === '.') {
        display.innerText += operator;
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

// Function to append a decimal point to the display
function appendDecimal() {
    // Check if there's already a decimal point in the current number
    const currentNumber = display.innerText.split(/[\+\-\*\/]/).pop();
    if (!currentNumber.includes('.')) {
        display.innerText += '.';
    }
}

// Function to calculate the expression on the display
function calculate() {
    try {
        // Evaluate the expression using eval
        const result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
