let textBox = document.getElementById('display-screen');
let buttons = document.getElementsByClassName('btn');
let clearButton = document.getElementById('clear');

function appendNumber(number) {

    textBox.value += number;
}

function appendOperator(operator) {
    let value = textBox.value.trim();
    if (value === '') return;
    let lastChar = value[value.length - 1];
    if (['+', '-', '*', '/', '^', '%'].includes(lastChar)) {
        // Replace the last operator with the new one
        textBox.value = value.slice(0, -2) + operator;
    } else {
        // Append the operator if the last character is a number
        textBox.value += ' ' + operator + ' ';
    }
}

function clearScreen() {
    textBox.value = '';
}

function removeLast() {
    let lastChar = textBox.value[textBox.value.length - 1];
    if (lastChar === ' ') {
        textBox.value = textBox.value.slice(0, -3);
    } else
    textBox.value = textBox.value.slice(0, -1);
}

function calculate() {
    const result = textBox.value.split(' ').reduce((total, current, index, array) => {
        if (current === '+') {
            return total + parseFloat(array[index + 1]);
        } else if (current === '-') {
            return total - parseFloat(array[index + 1]);
        } else if (current === '*') {
            return total * parseFloat(array[index + 1]);
        } else if (current === '/') {
            return total / parseFloat(array[index + 1]);
        } else if (current === '%') {
            return total / parseFloat(array[index + 1]);
        } else if (current === '^') {
            return total / parseFloat(array[index + 1]);
        } 
        else {
            return parseFloat(current);
        }
    }, 0);
    textBox.value = result;
}
