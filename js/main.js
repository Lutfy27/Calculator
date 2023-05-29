let result = document.getElementById('result');
let operatorClicked = false;
let currentTheme = 'light-theme';

function appendNumber(number) {
    result.innerHTML += number;
    operatorClicked = false;
}

function appendOperator(operator) {
    if (!operatorClicked) {
        result.innerHTML += operator;
        operatorClicked = true;
    }
}

function clearResult() {
    result.innerHTML = 0;
    operatorClicked = false;
}

function calculate() {
    try {
        const expression = result.innerHTML;
        const answer = eval(expression);
        result.innerHTML = answer;
        operatorClicked = false;
    } catch (error) {
        result.innerHTML = 'Error';
    }
}

function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const result = document.querySelector('.result');
    const buttons = document.querySelectorAll('.button');
    const themeButton = document.querySelector('.theme-button');

    body.classList.remove(currentTheme);
    container.classList.remove(currentTheme);
    result.classList.remove(currentTheme);
    buttons.forEach(button => button.classList.remove(currentTheme));

    if (currentTheme === 'light-theme') {
        currentTheme = 'black-theme';
        themeButton.innerText = 'Toggle Black Theme';
    } else if (currentTheme === 'Black-theme') {
        currentTheme = 'light-theme';
        themeButton.innerText = 'Toggle Light Theme';
    } else {
        currentTheme = 'light-theme';
        themeButton.innerText = 'Toggle Light Theme';
    }

    body.classList.add(currentTheme);
    container.classList.add(currentTheme);
    result.classList.add(currentTheme);
    buttons.forEach(button => button.classList.add(currentTheme));
}