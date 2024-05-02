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
    displayNums.splice(0, displayNums.length);
    console.log(operator);
  });
});

// plus.addEventListener("click", () => {
//   num1 = parseFloat([...displayNums].join(""));
//   op = plus.textContent;
//   displayNums.splice(0, displayNums.length);
//   console.log(op);
// });

equal.addEventListener("click", () => {
  num2 = parseFloat([...displayNums].join(""));

  console.log(num1);
  console.log(num2);
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("ERROR");
  }
});
reset.addEventListener("click", () => location.reload());
