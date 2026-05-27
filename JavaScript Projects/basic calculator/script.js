let addBtn = document.getElementById("add");
addBtn.addEventListener("click",addNumbers);


let subBtn = document.getElementById("sub");
subBtn.addEventListener("click", subtractNumbers);

let mulBtn = document.getElementById("mult");
mulBtn.addEventListener("click", multiplyNumbers);

let exitBtn = document.getElementById("exit");
exitBtn.addEventListener("click",exitApp);



// addition
let sum = 0;
function addNumbers () {
    
let number1 = Number(document.getElementById("input").value);

sum = sum + number1;

document.getElementById("result").innerText =  sum;

document.getElementById("input").value = "";
}


// subtract

let sub = 0;
function subtractNumbers() {

    let number2 = Number(document.getElementById("input").value);

    sub = Math.abs(sub-number2);

    document.getElementById("result").innerText = sub;
    document.getElementById("input").value = "";
}


// multiply
let mult = 1;

function multiplyNumbers() {
    let number3 = Number(document.getElementById("input").value);

    mult= mult * number3;

document.getElementById("result").innerText =  mult;

document.getElementById("input").value = "";
}
// exit
function exitApp() {
    sum = 0;
    document.getElementById("result").innerText = "0";
}