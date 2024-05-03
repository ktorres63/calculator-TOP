const numbersBtns = document.querySelectorAll(".num"); //All numbers
const numbersDisplay = document.querySelector(".numbers");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".AC");
const operators = document.querySelectorAll(".op"); //All operations

//some op
const plus = document.querySelector(".plus");

let displayNums = [];
let num1;
let num2;
let operator;

// Catch all number buttons, and are shown on the display
numbersBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (displayNums.length === 0) {
      numbersDisplay.textContent = "";
    }
    displayNums.push(btn.textContent);
    numbersDisplay.textContent += btn.textContent;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    num1 = parseFloat([...displayNums].join(""));
    operator = op.textContent;
    displayNums.splice(0, displayNums.length); //delete elements in arr
    console.log(operator);
  });
});

equal.addEventListener("click", () => {
  num2 = parseFloat([...displayNums].join(""));
  displayNums.splice(0, displayNums.length); //delete elements in arr
  numbersDisplay.textContent = operate(num1, num2, operator)

  console.log(num1);
  console.log(num2);
  console.log(operate(num1, num2, operator));
});
reset.addEventListener("click", () => location.reload());

function operate(n1, n2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
    default:
      result = -1;
  }
  return result;
}
