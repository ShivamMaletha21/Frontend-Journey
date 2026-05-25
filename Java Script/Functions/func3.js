//Create a function that takes two numbers and returns their sum.

let btn = document.getElementById("btn");
btn.addEventListener("click",add);


function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number( document.getElementById("num2").value);

     let result = num1 + num2;

     document.getElementById("result").innerText = result;
}

