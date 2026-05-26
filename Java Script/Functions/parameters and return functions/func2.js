// Create a function that accepts two numbers and returns the smaller one.

let btn = document.getElementById("btn");
btn.addEventListener("click",smallest);

function small(a,b) { // parameter
    return a < b?a:b;
}

function smallest() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = small(num1,num2); // arguments

    document.getElementById("result").innerText = result; 
}