const add = (num1, num2) => {
  let total = num1 + num2;
  alert(`${num1} + ${num2} = ${total}`);
}

const subtract = (num1, num2) => {
  let total = num1 - num2;
  alert(`${num1} - ${num2} = ${total}`);
}

const multiply = (num1, num2) => {
  let total = num1 * num2;
  alert(`${num1} * ${num2} = ${total}`);
}

const divide = (num1, num2) => {
  let total = num1 / num2;
  alert(`${num1} / ${num2} = ${total}`);
}

const calculate = () => {
  let num1 = parseInt(prompt("Enter first number:"));
  let num2 = parseInt(prompt("Enter second number:"));
  add(num1, num2);
  subtract(num1, num2);
  multiply(num1, num2);
  divide(num1, num2);
}

calculate();


