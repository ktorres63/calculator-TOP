const display = document.querySelector(".display")
const btns = document.querySelectorAll(".num")
const numbers = document.querySelector(".numbers")
const equal = document.querySelector(".equal")
const reset = document.querySelector(".AC")

let displayNums = []



function write(){
}


btns.forEach(btn =>{
  btn.addEventListener("click", ()=> {
    if(displayNums.length === 0){
      numbers.textContent = ""
    }
    displayNums.push(btn.textContent)
    numbers.textContent += btn.textContent;
    // console.log(btn.textContent)
  });
});

equal.addEventListener("click",() => console.log(displayNums))
reset.addEventListener("click",() => location.reload())

