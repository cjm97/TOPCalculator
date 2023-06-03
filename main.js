// operation function to carry out input
const operate = (operator, num1, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return (num1 + num2).toFixed(2);
    case '-':
      return (num1 - num2).toFixed(2);
    case '*':
      return (num1 * num2).toFixed(2);
    case '/':
      return (num1 / num2).toFixed(2);
    default:
      return 0;
  }
};

const container = document.querySelector('.calculator__container');
const display = document.querySelector('.result');
const buttons = container.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

// defining what happens for each button when clicked
const handleClick = (button) => {
  if (button.classList.contains('number')) {
    if (num1 !== '' && operator != '') {
      num2 += button.innerText;
      display.innerText = num2;
      console.log(`Num2: ${num2}`);
    } else {
      num1 += button.innerText;
      display.innerText = num1;
      console.log(`Num1: ${num1}`);
    }
  } else if (button.classList.contains('operator')) {
    if (num1 !== '' && num2 !== '') {
      num1 = operate(operator, num1, num2); // if we now have values for num1 and num2 and we've hit an operation button, carry out the latest operation using those valid figures.
      num2 = ''; //reset num2 after this operation
      operator = ''; // reset operator
      display.innerText = num1;
    }
    operator = button.innerText;
  } else if (button.classList.contains('resetBtn')) {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    display.innerText = '0';
  } else if (button.classList.contains('percent')) {
    num1 = num1 / 100;
    display.innerText = num1;
  }
};

// adding handleClick event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    handleClick(button);
  });
});
