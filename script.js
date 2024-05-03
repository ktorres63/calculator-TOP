const numbersBtns = document.querySelectorAll(".num"); //All numbers
const numbersDisplay = document.querySelector(".numbers");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".AC");
const operators = document.querySelectorAll(".op"); //All operations
const percent = document.querySelector(".percent")

//some op
const plus = document.querySelector(".plus");

let arrNums = [];
let num1;
let num2;
let operator;

// Catch all number buttons, and are shown on the display
numbersBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (arrNums.length === 0) {
      numbersDisplay.textContent = "";
    }
    arrNums.push(btn.textContent);
    numbersDisplay.textContent += btn.textContent;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    num1 = parseFloat([...arrNums].join(""));
    operator = op.textContent;
    arrNums.splice(0, arrNums.length); //delete elements in arr
    console.log(operator);
  });
});

equal.addEventListener("click", () => {
  num2 = parseFloat([...arrNums].join(""));
  arrNums.splice(0, arrNums.length); //delete elements in arr
  if(operator === "/" && num2 === 0){
    numbersDisplay.textContent = "Zero?"
  }
  else{
    numbersDisplay.textContent = operate(num1, num2, operator)
  }
  console.log(num1);
  console.log(num2);
  console.log(operate(num1, num2, operator));
});

percent.addEventListener("click",()=>{
  num1 = parseFloat([...arrNums].join(""));
  console.log(num1*0.01)
  numbersDisplay.textContent = num1*0.01
})

reset.addEventListener("click", () => location.reload());

function operate(n1, n2, op) {
  let result;
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
      result = n1;
  }
  return result;
}
