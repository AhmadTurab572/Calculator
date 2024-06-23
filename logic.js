document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'AC') {
                currentInput = '';
                previousInput = '';
                operator = '';
                screen.value = '';
            } else if (value === 'DEL') {
                currentInput = currentInput.slice(0, -1);
                screen.value = currentInput;
            } else if (['+', '-', '*', '/', '%'].includes(value)) {
                if (currentInput !== '') {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else if (value === '=') {
                if (previousInput !== '' && currentInput !== '' && operator !== '') {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                    screen.value = currentInput;
                    operator = '';
                }
            } else {
                currentInput += value;
                screen.value = currentInput;
            }
        });
    });
});
