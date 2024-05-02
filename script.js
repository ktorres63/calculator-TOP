const display = document.querySelector(".display")
const btns = document.querySelectorAll(".btn")

function write(){
}

btns.forEach(btn =>{
  btn.addEventListener("click", ()=> {
    console.log(btn.textContent)
  });
});



// const btn = document.querySelector(".seven")
// btn.addEventListener("click", ()=> {
//   console.log(btn.textContent)
// })